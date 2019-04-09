import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

class LoginScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FFACAC",
    },
    headerTintColor: 'white',
    headerTitle: "登录"
  };


  constructor(props) {
    super(props);
    this.state = {
      userPhone: '',
      userLoginpwd: ''
    };
  }


  toRegister = () => {
    this
      .props
      .navigation
      .push('Riegister')
  }


  loginFetch = () => {
    var myreg =/^[1][3,4,5,7,8][0-9]{9}$/;
    if (this.state.userPhone === '' || this.state.userLoginpwd === '') {
      ToastAndroid.show("不能为空!", ToastAndroid.SHORT);
      return false;
    } else if (!myreg.test(this.state.userPhone)) {
      ToastAndroid.show("手机号码格式错误!", ToastAndroid.SHORT);
      return false;

    } else {

      var data = { "userPhone": this.state.userPhone, "userLoginpwd": this.state.userLoginpwd };

      fetch('http://192.168.43.252:8080/user/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then((response) => response.json())
        .catch(error => console.error('Error:', error))
        .then((responseData) => {
          console.log('responseData');
          console.log(responseData.code)
          if (responseData.code === '101') {
            this
              .props
              .navigation
              .goBack()
          } else {
            ToastAndroid.show("电话号码或密码错误!", ToastAndroid.SHORT);
          }
        });


    }



  }




  render() {
    return (
      <View style={{ width: screenW, flexDirection: 'column', alignItems: "center", justifyContent: 'center', flex: 1 }}>
        <View style={{
          width: 260,
          borderRadius: 25,
          height: 40,
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: 'center',
          borderColor: '#FFACAC',
          borderWidth: 1,
          //  marginTop:100
        }}>
          <Image source={require('../images/phone.png')} style={{ width: 25, height: 25 }}></Image>
          <TextInput
            placeholder="手机号码"
            style={{ width: 200, height: '100%', }}
            value={this.state.userPhone}
            onChangeText={(userPhone) => this.setState({ userPhone })}
          />
        </View>
        <View style={{
          width: 260,
          borderRadius: 25,
          height: 40,
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: 'center',
          borderColor: '#FFACAC',
          borderWidth: 1,
          marginTop: 20
        }}>
          <Image source={require('../images/Password1.png')} style={{ width: 25, height: 25 }}></Image>
          <TextInput
            secureTextEntry={true}
            placeholder="密码"
            style={{ width: 200, height: '100%', }}
            value={this.state.userLoginpwd}
            onChangeText={(userLoginpwd) => this.setState({ userLoginpwd })}
          />
        </View>
        <View style={{
          width: 260,
          borderRadius: 25,
          height: 40,
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: 'space-between',
          paddingLeft: 5,
          paddingRight: 5,
        }}>
          <Text style={{ color: '#A0A0A0' }} onPress={this.toRegister}>注册</Text>
          <Text style={{ color: '#A0A0A0' }}>忘记密码?</Text>
        </View>

        <TouchableOpacity
          style={{
            width: 260,
            borderRadius: 25,
            height: 40,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'center',
            marginTop: 20,
            backgroundColor: '#FFACAC'
          }}
          onPress={this.loginFetch}
        >
          <Text style={{ color: 'white', fontSize: 18 }} >登录</Text>
        </TouchableOpacity>
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
    marginTop: 10,

  },
});

export default LoginScreen;