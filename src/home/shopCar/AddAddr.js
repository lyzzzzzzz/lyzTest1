import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  ScrollView,
  FlatList,
  AsyncStorage,
  ToastAndroid,
  Switch,
  DeviceEventEmitter,
  Alert
} from 'react-native';
import baseUrl from '../../Comment'
class AddAddr extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FFACAC",
    },
    headerTintColor: 'white',
    headerTitle: "新增地址"
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      addrdetail: '',
      isdefault: 0
    };
  }


  swtichChange = () => {
    this.setState({ isdefault: this.state.isdefault == 0 ? 1 : 0 })
  }

  saveAddr = () => {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    let userId = user.userId
    let address = {
      "addrdetail": this.state.addrdetail,
      "phone": this.state.phone,
      "name": this.state.name,
      "isdefault": this.state.isdefault
    }

    fetch(baseUrl + '/addr/insertAddr?userId=' + userId, {
      method: 'POST',
      async: true,
      body: JSON.stringify(address),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then((response) => response.json())
      .catch(error => console.error('Error:', error))
      .then((responseData) => {
        if (responseData.code === '1') {
          ToastAndroid.show("新增成功!", ToastAndroid.SHORT);
          const message = '监听';
					DeviceEventEmitter.emit('addAddr',message);
          this
            .props
            .navigation
            .goBack()
        } else {
          ToastAndroid.show("新增失败!", ToastAndroid.SHORT);
        }
      });

  }

  render() {
    return (
      <View style={{ flexDirection: "column", flex: 1, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: "column", alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 10 }}>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
            <Text >收货人</Text>
            <TextInput
              value={this.state.name}
              style={{ marginLeft: 30, width: 230 }}
              clearButtonMode='always'
              onChangeText={(name) => this.setState({ name })}
            />
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#EBEFEF' }}></View>

          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
            <Text >电话</Text>
            <TextInput
              value={this.state.phone}
              style={{ marginLeft: 45, width: 230 }}
              clearButtonMode='always'
              onChangeText={(phone) => this.setState({ phone })}
            />
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#EBEFEF' }}></View>

          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
            <Text >地址</Text>
            <TextInput
              value={this.state.addrdetail}
              style={{ marginLeft: 45, width: 230 }}
              clearButtonMode='always'
              onChangeText={(addrdetail) => this.setState({ addrdetail })}
              multiline={true}
            />
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#EBEFEF' }}></View>

          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
            <Text >设置为默认地址</Text>
            <Switch onValueChange={this.swtichChange} value={this.state.isdefault == 0 ? false : true}></Switch>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#EBEFEF' }}></View>


        </View>

        <TouchableOpacity
          onPress={this.saveAddr}
          style={{ white: '100%', height: 50, backgroundColor: '#FFACAC', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>保存收货地址</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddAddr;