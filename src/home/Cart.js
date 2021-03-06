/**
 * 首页折扣模块
 */
import React, { Component } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
	TextInput,
	Alert,
	SectionList,
	AsyncStorage,
	DeviceEventEmitter,
	Button
} from 'react-native';
import baseUrl from '../Comment'
import CheckBox from 'react-native-check-box'
import NavigationService from '../NavigationService';
export default Cart;

class Cart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			productList: [],
			userObj: undefined,
			isCheckedAll: false,
			result: undefined,
			tatalPrize: 0,
			isManage: false,
			manage: '管理',
			checkedList: [],
			addrList: [],
			checkedList2:[]
		};
	}


	componentDidMount = () => {
		var that = this;
		AsyncStorage.getItem('user', (errs, result) => {
			if (errs) {
				alert('获取user错误!')
			} else {
				that.setState({ result: JSON.parse(result) })
				that.fetchProductList(JSON.parse(result))
				that.fetchDefautAddr(JSON.parse(result))
			}
		})
		that.listener = DeviceEventEmitter.addListener('insertIntoShopCar', (message) => {
			that.fetchProductList(that.state.result)
		})
		that.listenerAddr = DeviceEventEmitter.addListener('updAddr', (message) => {
			that.fetchDefautAddr(that.state.result)
		})


	}


	fetchDefautAddr = (result) => {
		fetch(baseUrl + '/addr/findDefaultAddr?userId=' + result.userId, {
			method: 'GET',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then((response) => response.json())
			.catch(error => console.error('Error:', error))
			.then((responseData) => {
				if (responseData.length > 0) {
					this.setState({ addrList: responseData })
				} else {
					this.setState({ addrList: [] })
				}
			});
	}


	componentWillUnmount() {
		//移除监听
		if (this.listener) {
			this.listener.remove();
		}
	}

	fetchProductList = (result) => {
		fetch(baseUrl + '/product/selectProductByUserId?userId=' + result.userId, {
			method: 'GET',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then((response) => response.json())
			.catch(error => console.error('Error:', error))
			.then((responseData) => {
				if (responseData.length != 0) {
					this.setState({ productList: responseData })
				} else {
					ToastAndroid.show("没有数据!", ToastAndroid.SHORT);
				}
			});
	}


	checkBoxView = (item) => {
		return (
			<CheckBox
				onClick={() => this.onClickCheckBox(item)}
				isChecked={item.ischecked === 0 ? false : true}
				checkBoxColor='#571D0C'
				style={{ width: 20 }}
			/>);
	}

	onClickCheckBox = (item) => {
		let num=item.shopCar.productNum
		item.ischecked = item.ischecked === 0 ? 1 : 0;//改变选中的那个的值
		this.setState({//重新渲染
			productList: this.state.productList,
			tatalPrize: item.ischecked === 1 ? this.state.tatalPrize + item.productPrice*num: this.state.tatalPrize - item.productPrice*num
		})

		let productList = this.state.productList
		let productListCheck = []
		let checkedAllList = []
		let checkedList = []
		let checkedList2 = []
		for (let i = 0; i < productList.length; i++) {
			productListCheck.push(productList[i].ischecked)
			if (productList[i].ischecked === 1) {
				checkedList.push(productList[i].shopCar.shopcarId)
				checkedList2.push(productList[i])
			}
			checkedAllList.push(1)
		}
		this.setState({ checkedList: checkedList, checkedList2:checkedList2})
		if (productListCheck.toString() == checkedAllList.toString()) {
			this.setState({ isCheckedAll: true })
		} else {
			this.setState({ isCheckedAll: false })
		}

	}

	onClickCheckAll = () => {
		this.setState({ isCheckedAll: !this.state.isCheckedAll })
		let productList = this.state.productList
		productList.forEach(item => {
			item.ischecked = this.state.isCheckedAll == true ? 0 : 1
		});
		let totalPrize=0;
		if(!this.state.isCheckedAll==true){
			productList.forEach(item => {
				totalPrize=totalPrize+item.productPrice*item.shopCar.productNum
			});
		}
		this.setState({//重新渲染
			productList: productList,
			tatalPrize:totalPrize
		})
	}

	reduceProductNum = (shopCar, action) => {
		let productNum = shopCar.productNum
		if (productNum === 1&&action=='reduceShopCar') {
			return
		}
		fetch(baseUrl + '/shopCar/' + action + '?productId=' + shopCar.productId + '&userId=' + shopCar.userId + '&productNum=' +1, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then((response) => response.json())
			.catch(error => console.error('Error:', error))
			.then((responseData) => {
				if (responseData > 0) {
					fetch(baseUrl + '/product/selectProductByUserId?userId=' + shopCar.userId, {
						method: 'GET',
						headers: new Headers({
							'Content-Type': 'application/json'
						})
					})
						.then((response) => response.json())
						.catch(error => console.error('Error:', error))
						.then((responseData) => {
							if (responseData.length != 0) {
								this.setState({ productList: responseData })
							} else {
								ToastAndroid.show("出错了!", ToastAndroid.SHORT);
							}
						});
				} else {
					ToastAndroid.show("出错了!", ToastAndroid.SHORT);
				}
			});


	}

	clickManage = () => {
		this.setState({ isManage: this.state.isManage ? false : true, manage: this.state.manage === '管理' ? '完成' : '管理' })
	}

	clickDelete = () => {

		Alert.alert(
			'',
			'确定删除吗?',
			[
				{ text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
				{
					text: '确认', onPress: () => {
						let result = JSON.parse(this.state.result)
						let userid = result.userId
						fetch(baseUrl + '/shopCar/batchDeleteByIds?array=' + this.state.checkedList, {
							method: 'DELETE',
							headers: new Headers({
								'Content-Type': 'application/json'
							})
						})
							.then((response) => response.json())
							.catch(error => console.error('Error:', error))
							.then((responseData) => {
								if (responseData > 0) {

									fetch(baseUrl + '/product/selectProductByUserId?userId=' + userid, {
										method: 'GET',
										headers: new Headers({
											'Content-Type': 'application/json'
										})
									})
										.then((response) => response.json())
										.catch(error => console.error('Error:', error))
										.then((responseData) => {
											if (responseData.length != 0) {
												this.setState({ productList: responseData })
											} else {
												ToastAndroid.show("出错了!", ToastAndroid.SHORT);
											}
										});

								} else {
									ToastAndroid.show("出错了!", ToastAndroid.SHORT);
								}
							});
					}
				},
			],
			{ cancelable: false }
		)
	}

	toEditMsg = () => {
		NavigationService.navigate('addrDetail', { adrr: this.state.result });
	}

	toOrder= () => {
		NavigationService.navigate('Order',{checkedList:this.state.isCheckedAll?this.state.productList:this.state.checkedList2,tatalPrize:this.state.tatalPrize});
	}


	render() {
		let userMsg = this.state.result;
		let defaultAddr = this.state.addrList
		let addr = defaultAddr == [] ? undefined : defaultAddr[0]

		return (
			<View style={{ flexDirection: 'column', justifyContent: 'space-between', display: 'flex', flex: 1 }}>
				<View style={{ width: '100%', height: 50, backgroundColor: '#FFACAC', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
					<Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 150 }}>购物车</Text>
					<Text style={{ color: 'white', fontSize: 18, marginRight: 10 }} onPress={this.clickManage}>{this.state.manage}</Text>
				</View>


				<ScrollView showsVerticalScrollIndicator={false} >
					<View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', marginBottom: 50 }}>


						{/* <View style={styles.addr}>
							<View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center' }}>
								<Text style={{ color: '#571D0C', fontSize: 17, marginLeft: 5 }}>收货地址</Text>
							</View>
							<View style={{ width: '100%', height: 2, backgroundColor: '#F0F0F0' }}></View>
							<TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', }} onPress={this.toEditMsg}>
								<View style={{ width: '80%', height: 90, flexDirection: 'column', justifyContent: 'space-around', marginLeft: 5 }}>
									<Text style={{ fontSize: 16, color: '#571D0C' }}>{addr == undefined ? '' : addr.addrdetail}</Text>
									<Text style={{ fontSize: 15 }}>{addr == undefined ? '' : addr.name}</Text>
									<Text style={{ fontSize: 15 }}>{addr == undefined ? '' : addr.phone}</Text>
								</View>
								<View style={styles.editAddr}>
									<Image source={require('../images/jiantou.png')}></Image>
								</View>
							</TouchableOpacity>

						</View> */}

						<FlatList
							style={{ width: '100%',marginTop:10 }}
							data={this.state.productList==[]?'':this.state.productList}
							renderItem={({ item }) => {
								let productNum = item.shopCar.productNum
								let shopCar = item.shopCar
								return (
									<View style={styles.goods}>
										{this.checkBoxView(item)}

										<View style={{ width: 80 }}>
											<Image source={{ uri: item.productPicUrl }} style={styles.imageStyle} />
										</View>

										<View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start', height: 90, width: 220 }}>
											<Text numberOfLines={2} ellipsizeMode='tail'>{item.productName}</Text>
											<Text style={{ backgroundColor: '#F7F4F4' }}>{item.productColor}; {item.productCapicity}</Text>

											<View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 210, alignItems: 'center' }}>
												<Text style={{ color: 'red' }}>￥{item.productPrice}</Text>
												<View style={styles.numStyle}>
													<TouchableOpacity style={{ width: 20, }} onPress={() => this.reduceProductNum(shopCar, 'reduceShopCar')}>
														<Text style={{ textAlign: 'center' }}>-</Text>
													</TouchableOpacity>

													<Text style={{ width: 28, textAlign: 'center' }}>{productNum}</Text>

													<TouchableOpacity style={{ width: 20, }} onPress={() => this.reduceProductNum(shopCar, 'addShopCar')}>
														<Text style={{ textAlign: 'center' }}>+</Text>
													</TouchableOpacity>
												</View>
											</View>

										</View>

									</View>
								)
							}
							}
						/>

					</View>

				</ScrollView>

				<View style={styles.bottomTab}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<CheckBox
							onClick={this.onClickCheckAll}
							isChecked={this.state.isCheckedAll}
							checkBoxColor='#571D0C'
							style={{ width: 20 }}
						/>
						<Text style={{ marginLeft: 10 }}>全选</Text>
					</View>

					{
						this.state.isManage ? <View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<TouchableOpacity style={styles.settlement} onPress={this.clickDelete}>
								<Text style={{ color: 'white', fontWeight: 'bold' }}>删除</Text>
							</TouchableOpacity>
						</View> : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Text style={{ color: 'black' }}>合计:</Text>
								<Text style={{ color: 'red' }}>￥{this.state.tatalPrize}</Text>
								<TouchableOpacity style={styles.settlement} onPress={this.toOrder}>
									<Text style={{ color: 'white', fontWeight: 'bold' }}>结算</Text>
								</TouchableOpacity>
							</View>
					}



				</View>


			</View>
		);
	}


}



const styles = StyleSheet.create({
	button: {
		marginBottom: 30,
		width: 260,
		alignItems: 'center',
		backgroundColor: '#2196F3'
	},
	bottomTab: {
		width: '100%',
		height: 50,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		elevation: 5,
		paddingLeft: 10,
		paddingRight: 10
	},
	settlement: {
		width: 50,
		height: 30,
		backgroundColor: '#571D0C',
		marginLeft: 10,
		borderRadius: 3,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		padding: 20,
		color: 'white'
	},
	numStyle: {
		width: 70,
		height: 25,
		// backgroundColor: '#DCD9D9', 
		flexDirection: 'row',
		borderStyle: 'solid',
		borderRadius: 3,
		borderWidth: 1,
		borderColor: '#DCD9D9'
	},
	addr: {
		width: '95%',
		height: 130,
		backgroundColor: 'white',
		marginTop: 10,
		elevation: 2,
		marginBottom: 10,
		flexDirection: 'column',
	},


	goods: {
		width: '95%',
		height: 130,
		backgroundColor: 'white',
		marginTop: 2,
		elevation: 3,
		marginBottom: 10,
		marginLeft: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},

	scrollViewStyle: {
		flexDirection: 'row',
		backgroundColor: 'white',
		padding: 10,
	},
	itemViewStyle: {
		width: '95%',
		flexDirection: 'row',
		elevation: 5
	},
	imageStyle: {
		width: 80,
		height: 80,
		borderRadius: 8,
	},
	clothNameStyle: {
		textAlign: 'left',
		marginTop: 5,
		marginLeft: 5,
		color: 'black',
		width: 185

	},
	leftViewStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 60,
	},
	clothPayStyle: {
		textAlign: 'right',
		marginTop: 5,
		// marginLeft: 55,
		color: 'black',
		justifyContent: 'space-around',

	},
	itemViewStyle2: {
		// margin: 8,
		flexDirection: 'row',
		marginTop: 25
	},
	shopNameStyle: {
		textAlign: 'center',
		marginTop: 5,
		marginLeft: 10,
		color: 'gray',
		fontSize: 10,
	},
	input1: {
		textAlign: 'center',
		height: 30,
		borderWidth: 1,
		borderColor: '#ccc',
		width: 25,
		marginLeft: 10,
		padding: 0,
		marginTop: 8,
	},
	middleInput: {
		textAlign: 'center',
		height: 30,
		borderWidth: 1,
		borderColor: '#ccc',
		width: 45,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		padding: 0,
		marginTop: 8,
	},
	input2: {
		textAlign: 'center',
		height: 30,
		borderWidth: 1,
		borderColor: '#ccc',
		width: 25,
		padding: 0,
		marginTop: 8,
	},
	delete: {
		fontSize: 40,
		color: '#E0E0E0'
	},
	inputStyle: {
		flexDirection: 'row',
		width: 180,
	},
	editAddr: {
		width: '15%',
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end'
	}
});

// 输出
module.exports = Cart;