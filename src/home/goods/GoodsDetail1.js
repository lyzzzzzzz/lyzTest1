import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	View,
	Text,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Button,
	ToastAndroid,
	AsyncStorage
} from 'react-native';
import Swiper from 'react-native-swiper';
var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;
import baseUrl from '../../Comment'
class GoodsDetail1 extends Component {

	static navigationOptions = {
		header: null,  //隐藏顶部导航栏
	};

	constructor(props) {
		super(props);
		this.state = {
			productNum: '1',
			userObj: undefined
		};
	}


	reduceProduct = () => {
		let num = parseInt(this.state.productNum);
		if (num === 1) {
			return
		} else {
			num--
		}
		this.setState({ productNum: num.toString() })
	}

	addProduct = () => {
		let num = parseInt(this.state.productNum);
		num++;
		this.setState({ productNum: num.toString() })
	}

	componentDidMount = () => {
		var that = this;
		AsyncStorage.getItem('user', function (errs, result) {
			if (errs) {
				alert('获取user错误!')
			} else {
				that.setState({ userObj: JSON.parse(result) })

			}
		})
	}

	insertIntoShopCar = () => {
		const { navigation } = this.props;
		const item = navigation.getParam('item');
		let userItem = this.state.userObj
		fetch(baseUrl + '/shopCar/insertShopCar?productId=' + item.productId + '&userId=' + userItem.userId + '&productNum=' + this.state.productNum, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then((response) => response.json())
			.catch(error => console.error('Error:', error))
			.then((responseData) => {
				if (responseData>0) {
					ToastAndroid.show("添加成功，在购物车等待~", ToastAndroid.SHORT);
				} else {
					ToastAndroid.show("加入购物车失败!", ToastAndroid.SHORT);
				}
			});
	}


	render() {

		const { navigation } = this.props;
		const item = navigation.getParam('item');
		return (
			<View style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={{ width: screenW, height: screenH * 0.45, marginBottom: 5 }}>
						<Swiper
							style={styles.swiper}          //样式
							height={200}                   //组件高度
							loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
							horizontal={true}              //水平方向，为false可设置为竖直方向
							paginationStyle={{ bottom: 10 }} //小圆点的位置：距离底部10px
							showsButtons={false}           //为false时不显示控制按钮
							showsPagination={true}       //为false不显示下方圆点
							dot={<View style={{           //未选中的圆点样式
								backgroundColor: 'rgba(0,0,0,.2)',
								width: 14,
								height: 14,
								borderRadius: 4,
								marginLeft: 10,
								marginRight: 9,
								marginTop: 9,
								marginBottom: 9,
							}} />}
							activeDot={<View style={{    //选中的圆点样式
								backgroundColor: '#007aff',
								width: 14,
								height: 14,
								borderRadius: 4,
								marginLeft: 10,
								marginRight: 9,
								marginTop: 9,
								marginBottom: 9,
							}} />}

						>

							<Image source={{ uri: item.productPicUrl }} style={{ width: '100%', height: '100%' }} />
							{/* <Image source={require('../../images/p2.jpg')} style={styles.img} />
							<Image source={require('../../images/p3.jpg')} style={styles.img} />
							<Image source={require('../../images/p4.jpg')} style={styles.img} /> */}
						</Swiper>
					</View>

					<View style={{ backgroundColor: 'white' }}>
						{/* <h2>￥{this.state.produst.money}</h2> */}
						<Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold', }}>￥{item.productPrice}</Text>
						<View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>
							<Text style={{ fontSize: 18, color: 'black', fontFamily: '宋体' }}>{item.productName}</Text>
							<Text style={{ fontSize: 18, color: 'black', fontFamily: '宋体', marginLeft: 5, }}>{item.productColor}</Text>
							<Text style={{ fontSize: 18, color: 'black', fontFamily: '宋体', marginLeft: 5, }}>{item.productCapicity}</Text>
						</View>

					</View>

					<View style={{ width: screenW, backgroundColor: 'white', marginTop: 10, minHeight: 215 }}>
						<Text style={{ fontSize: 16 }}>{item.productDescribe}</Text>

					</View>
				</ScrollView>
				<View style={{ width: screenW, height: 50, backgroundColor: '#FFACAC', display: 'flex', flexDirection: 'row' }}>
					<View style={{ height: '100%', width: '60%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
						<TouchableOpacity onPress={this.addProduct}>
							<Image source={require('../../images/add1.png')}></Image>
						</TouchableOpacity>
						<TextInput
							editable={false}
							value={this.state.productNum}
							style={{ width: 60, height: "100%", fontSize: 20, color: 'white', textAlign: 'center' }}
						// onChangeText={(productNum)=>this.setState({productNum})}
						/>
						<TouchableOpacity onPress={this.reduceProduct}>
							<Image source={require('../../images/jian.png')}></Image>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						onPress={this.insertIntoShopCar}
						style={{ width: '40%', backgroundColor: 'skyblue', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
						<Text style={{ fontSize: 18, color: 'white' }}>加入购物车</Text>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		flex: 1,
		backgroundColor: '#F1F5F7'
	},
});

export default GoodsDetail1;