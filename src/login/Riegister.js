import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;
class Riegister extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#FFACAC",
        },
        headerTintColor: 'white',
        headerTitle: "注册"
    };

    constructor(props) {
        super(props);
        this.state = {};
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
                    <TextInput placeholder="手机号码" style={{ width: 200, height: '100%', }} />
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
                    <TextInput placeholder="登录密码" style={{ width: 200, height: '100%', }} />
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
                    <TextInput placeholder="支付密码" style={{ width: 200, height: '100%', }} />
                </View>

                <View style={{
                    width: 260,
                    borderRadius: 25,
                    height: 40,
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center',
                    marginTop: 20,
                    backgroundColor: '#FFACAC'
                }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>注册</Text>
                </View>
            </View>
        );
    }
}

export default Riegister;