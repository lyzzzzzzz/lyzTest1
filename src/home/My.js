import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,

} from 'react-native';

export default class My extends Component{
  constructor() {
    super();

  }


  toLogin=()=>{
    this
    .props
    .navigation
    .push('LoginScreen')
  }


  render() {
    return (

      <View>
          <View style={{height:50,backgroundColor:'#FFACAC',flexDirection:'row',alignItems:"center",justifyContent: 'center'}}>
        <Text style={{color:'white',fontSize:18}}>个人页面</Text>
          </View>
        <View style={{height:200,flexDirection:'column',alignItems:"center",justifyContent: 'center'}}>
        <Image source={require('../images/photo.jpg')} roundAsCircle={true} style={styles.img2} />
             <Text style={{marginTop:10,color:'#7B0000',fontSize:18,fontWeight:'bold'}}>lyzzzzzzzzz</Text>
        </View>
        <View style={{marginTop:40}}>
          <Text style={{marginBottom:3,marginLeft:10,fontSize:16}}>修改个人信息</Text>
          <View style={{height:2,backgroundColor:'#EFEFEF'}}></View>
        </View>
        {/* <View style={{marginTop:10}}>
          <Text style={{marginBottom:3,marginLeft:10,fontSize:16}}>修改登录密码</Text>
          <View style={{height:2,backgroundColor:'#EFEFEF'}}></View>
        </View> */}
        <View style={{marginTop:10}}>
          <Text style={{marginBottom:3,marginLeft:10,fontSize:16}} onPress={this.toLogin}>登录</Text>
          <View style={{height:2,backgroundColor:'#EFEFEF'}}></View>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{marginBottom:3,marginLeft:10,fontSize:16,color:'#7B0000'}}>退出</Text>
          <View style={{height:2,backgroundColor:'#EFEFEF'}}></View>
        </View>
      </View>


    );
  }
}
const styles = StyleSheet.create({
  img2: {
    borderRadius: 45,
    borderColor: 'skyblue',
    alignSelf: 'center',
    width: 90,
    height: 90,
    marginTop: 10
  },
});
