import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
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
        this.state = {};
    }


    toRegister=()=>{
        this
        .props
        .navigation
        .push('Riegister')
    }

    render() {
        return (
            <View style={{ width: screenW, flexDirection: 'column', alignItems: "center", justifyContent:'center',flex:1 }}>
                <View style={{width:260,
                    borderRadius: 25,
                    height:40,
                    flexDirection: 'row',
                     alignItems: "center", 
                     justifyContent: 'center',
                     borderColor:'#FFACAC',
                     borderWidth:1,
                    //  marginTop:100
                      }}>
                    <Image source={require('../images/phone.png')}  style={{width:25,height:25}}></Image>
                    <TextInput placeholder="手机号码" style={{width:200,height:'100%',}} />
                </View>
                <View style={{width:260,
                    borderRadius: 25,
                    height:40,
                    flexDirection: 'row',
                     alignItems: "center", 
                     justifyContent: 'center',
                     borderColor:'#FFACAC',
                     borderWidth:1,
                     marginTop:20
                      }}>
                    <Image source={require('../images/Password1.png')}  style={{width:25,height:25}}></Image>
                    <TextInput placeholder="密码" style={{width:200,height:'100%',}} />
                </View>
                <View style={{width:260,
                    borderRadius: 25,
                    height:40,
                    flexDirection: 'row',
                     alignItems: "center", 
                     justifyContent: 'space-between',
                     paddingLeft:5,
                     paddingRight:5,
                      }}>
                      <Text style={{color:'#A0A0A0'}} onPress={this.toRegister}>注册</Text>
                      <Text style={{color:'#A0A0A0'}}>忘记密码?</Text>
                </View>
                <View style={{width:260,
                    borderRadius: 25,
                    height:40,
                    flexDirection: 'row',
                     alignItems: "center", 
                     justifyContent: 'center',
                    marginTop:20,
                     backgroundColor:'#FFACAC'
                      }}>
                      <Text style={{color:'white',fontSize:18}}></Text>登录</Text>
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
      marginTop: 10,
     
    },
  });

export default LoginScreen;