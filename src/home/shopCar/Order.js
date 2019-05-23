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
// import moment from 'moment';
import baseUrl from '../../Comment'
class Order extends Component {


  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FFACAC",
    },
    headerTintColor: 'white',
    headerTitle: "订单确认"
  };

  constructor(props) {
    super(props);
    this.state = {
      result: undefined,
      addrList: [],
      checkedList: [],
      totalNum: 0,
      tatalPrize: 0
    };
  }


  componentDidMount = () => {
    var that = this;
    AsyncStorage.getItem('user', (errs, result) => {
      if (errs) {
        alert('获取user错误!')
      } else {
        that.setState({ result: JSON.parse(result) })

        that.fetchDefautAddr(JSON.parse(result))
      }
    })
    that.listenerAddr = DeviceEventEmitter.addListener('updAddr', (message) => {
      that.fetchDefautAddr(that.state.result)
    })
    that.listenerChooseAddr = DeviceEventEmitter.addListener('chooseAddr', (message) => {
      let tempList = []
      tempList.push(message)
      that.setState({ addrList: tempList })
    })

    const { navigation } = this.props;
    const checkedList = navigation.getParam('checkedList');
    const tatalPrize = navigation.getParam('tatalPrize');
    let totalnum = 0
    checkedList.forEach(item => {
      totalnum = totalnum + item.shopCar.productNum
    });
    that.setState({ checkedList: checkedList, totalNum: totalnum, tatalPrize: tatalPrize })
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



  toEditMsg = () => {
    this
      .props
      .navigation.push('addrDetail', { adrr: this.state.result });
  }

  toMyOrder = () => {

    let checkedList = this.state.checkedList
    let productIds = []
    checkedList.forEach(item => {
      productIds.push(item.productId)
    });

    let addr = this.state.addrList
    let addrId = addr[0].addrId

    let user = this.state.result

    let userId = user.userId
    // let day = new Date();
    //     let today = day.Format("yyyy-MM-dd");
    let order = {
      "addrId": addrId,
      "userId": userId,
      "orderTime":'',
      "totalPrize": this.state.tatalPrize,
      "peopuctAllnum": this.state.totalNum
    }
    console.log('================order====================');
    console.log(order);
    console.log('====================================');
    // fetch(baseUrl + 'http://192.168.43.252:8080/order/insertOrder?productIds=1,2', {
    //   method: 'GET',
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // })
    //   .then((response) => response.json())
    //   .catch(error => console.error('Error:', error))
    //   .then((responseData) => {
    //     if (responseData.length > 0) {
    //       this.setState({ addrList: responseData })
    //     } else {
    //       this.setState({ addrList: [] })
    //     }
    //   });



    // this
    // .props
    // .navigation.push('MyOrder');
  }

  render() {
    let defaultAddr = this.state.addrList
    let addr = defaultAddr == [] ? undefined : defaultAddr[0]
    return (
      // <Text>订单</Text>

      <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>

            <View style={styles.addr}>
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
                  <Image source={require('../../images/jiantou.png')}></Image>
                </View>
              </TouchableOpacity>
            </View>


            <FlatList
              style={{ width: '95%', marginTop: 10, elevation: 0, marginBottom: 20, borderWidth: 1, borderColor: '#E0E2E2', borderStyle: 'solid' }}
              data={this.state.checkedList}
              renderItem={({ item }) => {
                let productNum = item.shopCar.productNum
                let shopCar = item.shopCar

                return (
                  <View style={styles.goods}>
                    {/* {this.checkBoxView(item)} */}

                    <View style={{ width: 80 }}>
                      <Image source={{ uri: item.productPicUrl }} style={styles.imageStyle} />
                    </View>

                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start', height: 90, width: 220 }}>
                      <Text numberOfLines={2} ellipsizeMode='tail'>{item.productName}</Text>
                      <Text style={{ backgroundColor: '#F7F4F4' }}>{item.productColor}; {item.productCapicity}</Text>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 210, alignItems: 'center' }}>
                        <Text style={{ color: 'red' }}>￥{item.productPrice}</Text>
                        <Text>x{productNum}</Text>
                      </View>

                    </View>

                  </View>
                )
              }
              }
            />


          </View>
        </ScrollView>
        <View style={{ width: '100%', height: 50, backgroundColor: 'white', elevation: 10, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text>共{this.state.totalNum}件</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginLeft: 15 }}>合计:</Text>
            <Text style={{ color: '#FC721A' }}>￥{this.state.tatalPrize}</Text>
          </View>

          <TouchableOpacity onPress={this.toMyOrder}
            style={{ width: 70, height: 30, backgroundColor: '#FC721A', marginLeft: 15, marginRight: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white' }}>提交订单</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({

  addr: {
    width: '95%',
    height: 130,
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 2,
    marginBottom: 10,
    flexDirection: 'column',
  },


  editAddr: {
    width: '15%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  goods: {
    width: '100%',
    height: 130,
    backgroundColor: 'white',
    // marginTop: 2,
    elevation: 3,
    // marginBottom: 10,
    //	marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

export default Order;