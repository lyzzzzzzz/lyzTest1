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
	AsyncStorage
} from 'react-native';
import baseUrl from '../Comment'
export default Cart;

class Cart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			address: '广东省肇庆市怀集县凤岗镇桃花村委会vvvvvvvvvv',
			name: '李雅真',
			phone: '17724272471',
			productList: [],
			userObj: undefined
		};
	}


	componentDidMount = () => {

		var that = this;
		AsyncStorage.getItem('user', function (errs, result) {
			if (errs) {
				alert('获取user错误!')
			} else {
				let userItem = JSON.parse(result)
				fetch(baseUrl + '/product/selectProductByUserId?userId=' + userItem.userId, {
					method: 'GET',
					headers: new Headers({
						'Content-Type': 'application/json'
					})
				})
					.then((response) => response.json())
					.catch(error => console.error('Error:', error))
					.then((responseData) => {
						if (responseData.length != 0) {
							that.setState({ productList: responseData })
						} else {
							ToastAndroid.show("没有数据!", ToastAndroid.SHORT);
						}
					});

			}
		})



	}


	render() {
		console.log('=================this.state.productList===================');
		console.log(this.state.productList);
		console.log('====================================');

		return (
			<View >
				<View style={{ width: '100%', height: 50, backgroundColor: '#FFACAC', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
					<Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>购物车</Text>
				</View>


				<ScrollView showsVerticalScrollIndicator={false} >
					<View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center',marginBottom:50 }}>


						<View style={styles.addr}>
							<View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center' }}>
								<Text style={{ color: '#571D0C', fontSize: 17, marginLeft: 5 }}>收货地址</Text>
							</View>
							<View style={{ width: '100%', height: 2, backgroundColor: '#F0F0F0' }}></View>
							<View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', }}>
								<View style={{ width: '80%', height: 90, flexDirection: 'column', justifyContent: 'space-around', marginLeft: 5 }}>
									<Text style={{ fontSize: 16, color: '#571D0C' }}>{this.state.address}</Text>
									<Text style={{ fontSize: 15 }}>{this.state.name}</Text>
									<Text style={{ fontSize: 15 }}>{this.state.phone}</Text>
								</View>
								<View style={{ width: '15%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
									<Image source={require('../images/editAddr.png')}></Image>
								</View>
							</View>

						</View>

						<FlatList
							style={{ width: '100%' }}
							data={this.state.productList}
							renderItem={({ item }) =>
								<View style={styles.goods}>
									<View style={{ width: 80 }}>
										<Image source={{ uri: item.productPicUrl }} style={styles.imageStyle} />
									</View>

									<View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start', height: 90, width: 250 }}>
										<Text numberOfLines={2} ellipsizeMode='tail'>{item.productName}</Text>
										<Text style={{ backgroundColor: '#F7F4F4' }}>{item.productColor}; {item.productCapicity}</Text>

										<View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 240, alignItems: 'center' }}>
											<Text style={{ color: 'red' }}>￥{item.productPrice}</Text>
											<View style={styles.numStyle}>
												<TouchableOpacity style={{ width: 20, }}>
													<Text style={{ textAlign: 'center' }}>-</Text>
												</TouchableOpacity>
												{/* <TextInput
														// editable={false}
														value='1'
														style={{ width: 48, height: 25,fontSize:10,  textAlign: 'center',backgroundColor:'pink'}}
													/> */}
												<Text style={{ width: 28, textAlign: 'center' }}>1</Text>

												<TouchableOpacity style={{ width: 20, }}>
													<Text style={{ textAlign: 'center' }}>+</Text>
												</TouchableOpacity>
											</View>
										</View>

									</View>

								</View>

							}
						/>


					</View>
				</ScrollView>
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
	}
});

// 输出
module.exports = Cart;