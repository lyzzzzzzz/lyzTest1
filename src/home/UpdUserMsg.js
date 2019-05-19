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
class UpdUserMsg extends Component {


    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#FFACAC",
        },
        headerTintColor: 'white',
        headerTitle: "修改个人信息"
    };

    constructor(props) {
        super(props);
        this.state = {
            adrrMsg: undefined,
            userPhone: '',
            userName: '',
            userAddress: '',
            userLoginpwd: '',
            userPaypwd: '',
            result: undefined
        };
    }

    componentDidMount = () => {
        const { navigation } = this.props;
        const adrr = navigation.getParam('adrr');
        this.setState({ result: adrr, userPhone: adrr.userPhone, userName: adrr.userName, userAddress: adrr.userAddress, userLoginpwd: adrr.userLoginpwd, userPaypwd: adrr.userPaypwd })

    }


    clickUpdUser = () => {
        var data = {
            "userPhone": this.state.userPhone,
            "userLoginpwd": this.state.userLoginpwd,
            "userPaypwd": this.state.userPaypwd,
            "userAddress": this.state.userAddress,
            "userName": this.state.userName,
        };

        fetch(baseUrl + '/user/detailupdate', {
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
                console.log('================responseDatavvvvvvvvvvvv====================');
                console.log(responseData);
                console.log('====================================');
                if (responseData.code === '1') {
                    ToastAndroid.show("修改成功!", ToastAndroid.SHORT);
                    let user = this.state.result
                    if (data.userLoginpwd != user.userLoginpwd) {
                        ToastAndroid.show("请重新登录!", ToastAndroid.SHORT);
                        // this
                        //     .props
                        //     .navigation
                        //     .push('LoginScreen')
                    }else{
                        // this
                        // .props
                        // .navigation
                        // .goBack()
                    }
                   
                } else {
                    ToastAndroid.show("修改失败!", ToastAndroid.SHORT);
                }
            });

    }


    render() {
        return (
            <View style={{ width: screenW, flexDirection: 'column', alignItems: "center", justifyContent: 'center', flex: 1 }}>
                <View style={{ marginTop: 10 }}>
                    <Text>电话号码：</Text>
                    <View style={{
                        width: 260,
                        borderRadius: 25,
                        height: 40,
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: 'center',
                        borderColor: '#FFACAC',
                        borderWidth: 1,
                        marginTop: 5
                    }}>
                        <Image source={require('../images/phone.png')} style={{ width: 25, height: 25 }}></Image>
                        <TextInput
                            placeholder="手机号码"
                            editable={false}
                            style={{ width: 200, height: '100%', }}
                            value={this.state.userPhone === undefined ? '' : this.state.userPhone}
                            onChangeText={(userPhone) => this.setState({ userPhone })}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text>昵称：</Text>
                    <View style={styles.input}>
                        <Image source={require('../images/Password1.png')} style={{ width: 25, height: 25 }}></Image>
                        <TextInput
                            placeholder="昵称"
                            style={{ width: 200, height: '100%', }}
                            value={this.state.userName === undefined ? '' : this.state.userName}
                            onChangeText={(userName) => this.setState({ userName })}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text>登录密码：</Text>
                    <View style={styles.input}>
                        <Image source={require('../images/Password1.png')} style={{ width: 25, height: 25 }}></Image>
                        <TextInput
                            placeholder="登录密码"
                            style={{ width: 200, height: '100%', }}
                            secureTextEntry={true}
                            value={this.state.userLoginpwd}
                            keyboardType='visible-password'
                            onChangeText={(userLoginpwd) => this.setState({ userLoginpwd })}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text>支付密码：</Text>
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
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text>地址：</Text>
                    <View style={{
                        width: 260,
                        height: 70,
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: 'center',
                        borderColor: '#FFACAC',
                        borderWidth: 1,
                        marginTop: 5
                    }}>
                        <TextInput
                            placeholder="地址"
                            style={{ width: 200, height: '100%', }}
                            multiline={true}
                            value={this.state.userAddress === undefined ? '' : this.state.userAddress}
                            onChangeText={(userAddress) => this.setState({ userAddress })}
                        />
                    </View>

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
                    onPress={this.clickUpdUser}
                >
                    <Text style={{ color: 'white', fontSize: 18 }} >确认</Text>
                </TouchableOpacity>
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
        marginTop: 5
    }
});

export default UpdUserMsg;