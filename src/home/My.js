import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,

} from 'react-native';
// var TitleView = require('./MyTitle');

export default class My extends Component{
  constructor() {
    super();

  }

  render() {
    return (

      <View>
          <View style={{height:50,backgroundColor:'pink',flexDirection:'row',alignItems:"center",justifyContent: 'center'}}>
        <Text style={{color:'white',fontSize:18}}>个人页面</Text>
          </View>
        <View style={{height:200,flexDirection:'column',alignItems:"center",justifyContent: 'center'}}>
        <Image source={require('../images/photo.jpg')} roundAsCircle={true} style={styles.img2} />
             <Text style={{marginTop:10,color:'#7B0000',fontSize:18,fontWeight:'bold'}}>lyzzzzzzzzz</Text>
        </View>
        <View style={{marginTop:40}}>
          <Text style={{marginBottom:3,marginLeft:10,fontSize:16}}>修改支付密码</Text>
          <View style={{height:2,backgroundColor:'#EFEFEF'}}></View>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{marginBottom:3,marginLeft:10,fontSize:16}}>修改登录密码</Text>
          <View style={{height:2,backgroundColor:'#EFEFEF'}}></View>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{marginBottom:3,marginLeft:10,fontSize:16}}>登录</Text>
          <View style={{height:2,backgroundColor:'#EFEFEF'}}></View>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{marginBottom:3,marginLeft:10,fontSize:16,color:'#7B0000'}}>退出</Text>
          <View style={{height:2,backgroundColor:'#EFEFEF'}}></View>
        </View>
      </View>



      // <View style={styles.container}>
      //   {/*首页圆形图片*/}
      //   <View style={{ marginLeft: 5, marginTop: 10, marginRight: 5 }}>
      //     <View style={{ flexDirection: 'row', backgroundColor: '#FFACAC', height: 80 }}>
      //       <Image source={require('../images/photo.jpg')} roundAsCircle={true} style={styles.img2} />
      //       <Text style={styles.text2}>lyzzzzzzzzz</Text>

      //     </View>
      //   </View>
      //   <TitleView
      //     leftIcon="gw"
      //     leftTitle="我的订单"
      //     rightTitle="查看全部订单>"
      //   />

      //     <View style={{ flexDirection: 'row' ,justifyContent: 'space-around',alignItems:"center"}}>
      //       <View style={{ flexDirection: 'column',width:70 ,justifyContent:"center",alignItems:"center"}}>
      //         <Image source={require('../images/ww.png')} style={styles.imageStyle} />
      //         <Text style={styles.clothPayStyle}>待付款</Text>
      //       </View>
      //       <View style={{ flexDirection: 'column',width:70 ,justifyContent:"center",alignItems:"center" }}>
      //         <Image source={require('../images/cc.png')} style={styles.imageStyle} />
      //         <Text style={styles.clothPayStyle}>待发货</Text>
      //       </View>
      //       <View style={{ flexDirection: 'column',width:70  ,justifyContent:"center",alignItems:"center"}}>
      //         <Image source={require('../images/cc2.png')} style={styles.imageStyle} />
      //         <Text style={styles.clothPayStyle}>待收货</Text>
      //       </View>
      //       <View style={{ flexDirection: 'column' ,width:70,justifyContent:"center",alignItems:"center"}}>
      //         <Image source={require('../images/xx.png')} style={styles.imageStyle} />
      //         <Text style={styles.clothPayStyle}>评价</Text>
      //       </View>
      //       <View style={{ flexDirection: 'column',width:70 ,justifyContent:"center",alignItems:"center" }}>
      //         <Image source={require('../images/aa.png')} style={styles.imageStyle} />
      //         <Text style={styles.clothPayStyle}>售后</Text>
      //       </View>
      //     </View>
      //     <View style={{ backgroundColor:'#F0F0F0',height:70,borderRadius: 10,marginTop:15} }>
      //     <Text style={styles.clothPayStyle}>物流</Text>
      //     </View>
      // </View>
    );
  }
}
const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor: '#F0F0F0'
//     backgroundColor: 'white',
//   },
//   text2: {
//     marginTop: 0,
//     alignSelf: 'center',
//     fontSize: 16,
//     color: '#555555',
//     textAlign: 'center',
//     flexDirection: 'column',
//     marginLeft: 5
//   },
  img2: {
    borderRadius: 45,
    borderColor: 'skyblue',
    // borderWidth: 1,
    // backgroundColor: 'skyblue',
    alignSelf: 'center',
    width: 90,
    height: 90,
    marginTop: 10,
    marginLeft: 15
  },

//   imageStyle: {
//     width: 30,
//     height: 30,
//     borderRadius: 2,
//     marginTop:10,
// },
// clothPayStyle: {
//     textAlign: 'center',
//     marginTop: 10,
//     color: 'black',
  

// },
});
