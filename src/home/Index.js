import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  ScrollView,
  FlatList
} from 'react-native';
import Swiper from 'react-native-swiper';
import baseUrl from '../Comment'
var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUploadList: [],
      recommendList: []
    };

  }

  componentDidMount = () => {
    //获取newUploadList
    fetch(baseUrl+'/product/selectProductByToday', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then((response) => response.json())
      .catch(error => console.error('Error:', error))
      .then((responseData) => {
        console.log('responseData');
        console.log(responseData)
        if (responseData.length != 0) {
          this.setState({ newUploadList: responseData })
        } else {
          ToastAndroid.show("没有数据!", ToastAndroid.SHORT);
        }
      });

    //获取recommendList
    fetch(baseUrl+'/product/selectAllBySale', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then((response) => response.json())
      .catch(error => console.error('Error:', error))
      .then((responseData) => {
        if (responseData.length != 0) {
          this.setState({ recommendList: responseData })
        } else {
          ToastAndroid.show("没有数据!", ToastAndroid.SHORT);
        }
      });

  }


  toIndexSearch = () => {
    this
      .props
      .navigation
      .navigate('IndexSearch')
  }

  // 首页的导航条
  renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        {/* <TouchableOpacity onPress={() => { this.pushToDetail() }} > */}
          <Text style={styles.leftTitleStyle}>广州</Text>
        {/* </TouchableOpacity> */}
        <TextInput placeholder="搜索" style={styles.topInputStyle} onFocus={this.toIndexSearch}/>
        <View style={styles.rightNavViewStyle}>
          {/* <TouchableOpacity onPress={() => { alert('点击了') }} > */}
            <Image source={require('../images/sc.png')} style={styles.navRightImgStyle} />
          {/* </TouchableOpacity> */}
        </View>
      </View>
    )
  }

  diorDetail = () => {
    this
      .props
      .navigation
      .navigate('DiorScreen')
  }

  yslDetail = () => {
    this
      .props
      .navigation
      .navigate('YSLScreen')
  }

  macDetail = () => {
    this
      .props
      .navigation
      .navigate('MacScreen')
  }

  chanelDetail = () => {
    this
      .props
      .navigation
      .navigate('ChanelScreen')
  }


  render() {
    return (

      <View style={styles.container}>
        {/*首页的导航条*/}
        {this.renderNavBar()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/*首页轮播图*/}

          <Swiper
            style={styles.swiper}          //样式
            height={200}                   //组件高度
            loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
            autoplay={true}                //自动轮播
            autoplayTimeout={3}                //每隔4秒切换
            horizontal={true}              //水平方向，为false可设置为竖直方向
            paginationStyle={{ bottom: 10 }} //小圆点的位置：距离底部10px
            showsButtons={false}           //为false时不显示控制按钮
            showsPagination={false}       //为false不显示下方圆点
            dot={<View style={{           //未选中的圆点样式
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 18,
              height: 18,
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 9,
              marginTop: 9,
              marginBottom: 9,
            }} />}
            activeDot={<View style={{    //选中的圆点样式
              backgroundColor: '#007aff',
              width: 18,
              height: 18,
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 9,
              marginTop: 9,
              marginBottom: 9,
            }} />}

          >
            <Image source={require('../images/p5.png')} style={styles.img} />
            <Image source={require('../images/p2.jpg')} style={styles.img} />
            <Image source={require('../images/p3.jpg')} style={styles.img} />
            <Image source={require('../images/p4.jpg')} style={styles.img} />
          </Swiper>

          {/*首页圆形图片*/}
          <View style={{ marginTop: 20, }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
              <TouchableOpacity style={{ width: 70 }} onPress={this.diorDetail}>
                <Image source={require('../images/DIOR.png')} roundAsCircle={true} style={styles.img2} />
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 70 }} onPress={this.macDetail}>
                <Image source={require('../images/MAC.png')} roundAsCircle={true} style={styles.img2} />
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 70 }} onPress={this.yslDetail}>
                <Image source={require('../images/YSL.png')} roundAsCircle={true} style={styles.img2} />
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 70 }} onPress={this.chanelDetail}>
                <Image source={require('../images/chanel.png')} roundAsCircle={true} style={styles.img2} />
              </TouchableOpacity>
            </View>
          </View>

          {/* 精品推荐 */}
          {/* <Recommend efg={this.efg} /> */}
          <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 20, color: "#C6C6C6", marginTop: 30 }}>精 / 品 / 推 / 荐</Text>
          <FlatList
            data={this.state.recommendList}
            numColumns='2'
            renderItem={({ item }) => <View style={styles.itemViewStyle}>
              <Image source={{ uri: item.productPicUrl }} style={styles.imageStyle} />
              <Text style={styles.shopNameStyle}>{item.productName}</Text>
            </View>
            }
          />


          {/* 每日上新 */}
          {/* <NewUpload/> */}
          <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 20, color: "#C6C6C6", marginTop: 30 }}>每 / 日 / 上 / 新</Text>
          <FlatList
            data={this.state.newUploadList}
            numColumns='2'
            renderItem={({ item }) => <View style={styles.itemViewStyle}>
              <Image source={{ uri: item.productPicUrl }} style={styles.imageStyle} />
              <Text style={styles.shopNameStyle}>{item.productName}</Text>
            </View>
            }
          />



        </ScrollView>

      </View>
    );
  }

  efg = (screen) => {
    this.props.navigation.navigate(screen);
  }
}
//<Text style={styles.text}>首页</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F0F0F0'
    backgroundColor: 'white'
  },
  imageStyle: {
    width: "100%",
    height: 120,

  },
  shopNameStyle: {
    textAlign: 'center',
    marginTop: 5,
    color: "#757575"
  },
  itemViewStyle: {
    width: 150,
    height: 160,
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    elevation: 4,
    alignItems: "center",
    marginLeft: 20
  },
  text: {
    fontSize: 30,
    color: 'black'
  },
  // 导航栏
  navBarStyle: {
    height: Platform.OS === 'ios' ? 64 : 44,
    backgroundColor: '#FFACAC',
    // 主轴方向
    flexDirection: 'row',
    // 侧轴对齐方式 垂直居中
    alignItems: 'center',
    // 主轴对齐方式
    justifyContent: 'space-around', // 平均分布

  },
  // 导航条左侧文字
  leftTitleStyle: {
    marginLeft: 10,
    color: 'white',
    fontSize: 19,
  },
  // 导航栏输入框
  topInputStyle: {
    width: screenW * 0.71,
    height: Platform.OS === 'ios' ? 35 : 35,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 18 : 0,
    // 圆角
    borderRadius: 18,
    paddingLeft: 10,
    backgroundColor: 'white'

  },
  // 导航条右侧视图
  rightNavViewStyle: {
    flexDirection: 'row',
    height: 70,
    // 侧轴对齐方式
    alignItems: 'center',
    marginRight: 10
  },
  // 导航栏右侧图片
  navRightImgStyle: {
    width: Platform.OS === 'ios' ? 28 : 24,
    height: Platform.OS === 'ios' ? 28 : 24,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  text2: {
    marginTop: 5,
    alignSelf: 'center',
    fontSize: 11,
    color: '#555555',
    textAlign: 'center',
    flexDirection: 'column',
  },
  img2: {
    //  borderRadius: 35,
    //  borderColor: 'skyblue',
    // borderWidth: 1,
    // backgroundColor: 'skyblue',
    alignSelf: 'center',
    width: 60,
    height: 60,

  },


});



