import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Button,
    ToastAndroid,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import baseUrl from '../Comment'
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
        this.state = {
            userPhone: '',
            userLoginpwd: '',
            code: '',
            userPaypwd: '',
            userAddress: '',
            title: '获取验证码',
            timerCount: 60,
            disabled: false
        };
    }


    getCode = () => {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (this.state.userPhone === '' || this.state.userPhone === null) {
            ToastAndroid.show("手机不能为空!", ToastAndroid.SHORT);
            return false;
        } else if (!myreg.test(this.state.userPhone)) {
            ToastAndroid.show("请输入正确的手机号码!", ToastAndroid.SHORT);
            return false;

        } else {
            var data = {
                "userPhone": this.state.userPhone,
                "userLoginpwd": this.state.userLoginpwd,
                "phoneCodeCode": this.state.code,
                "userPaypwd": this.state.userPaypwd,
                "userAddress": this.state.userAddress,
            };

            fetch(baseUrl+'/user/registercode', {
                method: 'POST',
                async: true,
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then((response) => response.json())
                .catch(error => console.error('Error:', error))
                .then((responseData) => {

                    if (responseData.code === '1') {
                        this.interval = setInterval(() => {
                            var timer = this.state.timerCount - 1
                            if (timer === 0) {
                                this.interval && clearInterval(this.interval);
                                this.setState({ disabled: false, timerCount: 60, title: '重新获取' })
                            } else {
                                this.setState({ timerCount: timer, title: timer + 's', disabled: true }

                                )
                            }
                        }, 1000)
                    } else {
                        ToastAndroid.show("电话号码或密码错误!", ToastAndroid.SHORT);
                    }
                });
        }
    }

    toRegister = () => {
        if (this.state.code === '' || this.state.code === null) {
            ToastAndroid.show("验证码不能为空!", ToastAndroid.SHORT);
            return false;
        } else if (this.state.userLoginpwd === '' || this.state.userLoginpwd === null) {
            ToastAndroid.show("登录密码不能为空!", ToastAndroid.SHORT);
            return false;
        } else if (this.state.userPaypwd === '' || this.state.userPaypwd === null) {
            ToastAndroid.show("支付密码不能为空!", ToastAndroid.SHORT);
            return false;
        } else {
            var data = {
                "userPhone": this.state.userPhone,
                "userLoginpwd": this.state.userLoginpwd,
                "phoneCodeCode": this.state.code,
                "userPaypwd": this.state.userPaypwd,
                "userAddress": this.state.userAddress,
                "phoneCodeTime": new Date().getTime()
            };

            fetch(baseUrl+'/user/register', {
                method: 'POST',
                async: true,
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then((response) => response.json())
                .catch(error => console.error('Error:', error))
                .then((responseData) => {
                    if (responseData.code === '1') {
                        this
                            .props
                            .navigation
                            .goBack()
                    } else {
                        ToastAndroid.show("注册失败!", ToastAndroid.SHORT);
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


                <View style={styles.input}>
                    <Image source={require('../images/code.png')} style={{ width: 21, height: 21 }}></Image>
                    <TextInput
                        placeholder="验证码"
                        style={{ width: 120, height: '100%', }}
                        value={this.state.code}
                        onChangeText={(code) => this.setState({ code })}
                    />
                    <Button
                        title={this.state.title}
                        color='#FFACAC'
                        style={{ height: '90%' }}
                        onPress={this.getCode}
                        disabled={this.state.disabled}
                    >
                    </Button>
                </View>


                <View style={styles.input}>
                    <Image source={require('../images/Password1.png')} style={{ width: 25, height: 25 }}></Image>
                    <TextInput
                        placeholder="登录密码"
                        style={{ width: 200, height: '100%', }}
                        secureTextEntry={true}
                        value={this.state.userLoginpwd}
                        onChangeText={(userLoginpwd) => this.setState({ userLoginpwd })}
                    />
                </View>


                <View style={styles.input}>
                    <Image source={require('../images/Password1.png')} style={{ width: 25, height: 25 }}></Image>
                    <TextInput
                        placeholder="支付密码"
                        style={{ width: 200, height: '100%', }}
                        secureTextEntry={true}
                        value={this.state.userPaypwd}
                        onChangeText={(userPaypwd) => this.setState({ userPaypwd })}
                    />
                </View>



                <View style={{
                    width: 260,
                    height: 70,
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center',
                    borderColor: '#FFACAC',
                    borderWidth: 1,
                    marginTop: 20
                }}>
                    <TextInput
                        placeholder="地址"
                        style={{ width: 200, height: '100%', }}
                        multiline={true}
                        value={this.state.userAddress}
                        onChangeText={(userAddress) => this.setState({ userAddress })}
                    />
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
                    onPress={this.toRegister}
                >
                    <Text style={{ color: 'white', fontSize: 18 }} >登录</Text>
                </TouchableOpacity>



                {/* <View style={{
                    width: 260,
                    borderRadius: 25,
                    height: 40,
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center',
                    marginTop: 20,
                    backgroundColor: '#FFACAC'
                }}>
                    <Button style={{ color: 'white', fontSize: 18, width: 260, }} color='#FFACAC' width='260px' onPress={this.toRegister} title='注册'></Button>
                </View> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    input: {
        width: 260,
        borderRadius: 25,
        height: 40,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        borderColor: '#FFACAC',
        borderWidth: 1,
        marginTop: 20
    }
});



export default Riegister;