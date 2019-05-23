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
class EditAddr extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FFACAC",
    },
    headerTintColor: 'white',
    headerTitle: "编辑地址"
  };

  constructor(props) {
    super(props);
    this.state = {
      addr: undefined,
      swtich: false,
      name:'',
      phone:'',
      addrdetail:'',
      isdefault:'',
      userId:undefined
    };
  }

  componentDidMount = () => {
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    this.setState({ addr: item, name: item.name, phone: item.phone, addrdetail: item.addrdetail ,isdefault:item.isdefault})
    AsyncStorage.getItem('user',  (errs, result) =>{
			if (errs) {
				alert('获取user错误!')
			} else {
				this.setState({ userId: JSON.parse(result).userId })
			}
		})
  }


  swtichChange = (isdefault) => {
    this.setState({ isdefault: isdefault==0?1:0})
  }



  saveAddr=()=>{

    var address = {
      "addrId": this.state.addr.addrId,
      "addrdetail": this.state.addrdetail,
      "phone": this.state.phone,
      "name": this.state.name,
      "isdefault": this.state.isdefault
  };
  // console.log('address')
  //   console.log(JSON.stringify(address))

    fetch(baseUrl + '/addr/updateAddr', {
      method: 'POST',
      body: JSON.stringify(address),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then((response) => response.json())
      .catch(error => console.error('Error:', error))
      .then((responseData) => {
        if (responseData> 0) {
          ToastAndroid.show("修改成功!", ToastAndroid.SHORT);
          const message = '监听';
					DeviceEventEmitter.emit('updAddr',message);
          this
          .props
          .navigation
          .goBack()
        } else {
          ToastAndroid.show("修改失败!", ToastAndroid.SHORT);
        }
      });
  }

  delAddr=()=>{
    let userid=this.state.userId
    let addrId=this.state.addr.addrId


    Alert.alert(
      '',
      '确定删除吗？',
      [
        {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: '确认', onPress: () =>{
          fetch(baseUrl + '/addr/delByAddrIdAndUserId?addrId='+addrId+'&userId='+userid, {
            method: 'DELETE',
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
            .then((response) => response.json())
            .catch(error => console.error('Error:', error))
            .then((responseData) => {
              if (responseData> 0) {
                ToastAndroid.show("删除成功!", ToastAndroid.SHORT);
                const message = '监听';
                DeviceEventEmitter.emit('delAddr',message);
                this
                .props
                .navigation
                .goBack()
              } else {
                ToastAndroid.show("删除失败!", ToastAndroid.SHORT);
              }
            });
        }},
      ],
      { cancelable: false }
    )



   
     
  }

  render() {
    let addr = this.state.addr
    let name = this.state.name
    let phone = this.state.phone
    let addrdetail = this.state.addrdetail
    let isdefault= this.state.isdefault

    // console.log('resultccccccccccc')
    //     console.log(this.state.userId==undefined?'':this.state.userId)
    return (
      <View style={{ flexDirection: "column", flex: 1, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: "column", alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 10 }}>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
            <Text >收货人</Text>
            <TextInput
              value={addr == undefined ? '' : name}
              style={{ marginLeft: 30, width: 230 }}
              clearButtonMode='always'
              onChangeText={(name) => this.setState({ name })}
            />
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#EBEFEF' }}></View>

          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
            <Text >电话</Text>
            <TextInput
              value={addr == undefined ? '' : phone}
              style={{ marginLeft: 45, width: 230 }}
              clearButtonMode='always'
              onChangeText={(phone) => this.setState({ phone })}
            />
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#EBEFEF' }}></View>

          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
            <Text >地址</Text>
            <TextInput
              value={addr == undefined ? '' : addrdetail}
              style={{ marginLeft: 45, width: 230 }}
              clearButtonMode='always'
              onChangeText={(addrdetail) => this.setState({ addrdetail })}
              multiline={true}
            />
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#EBEFEF' }}></View>

          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
            <Text >设置为默认地址</Text>
            <Switch onValueChange={()=>this.swtichChange(isdefault)} value={isdefault==0?false:true}></Switch>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#EBEFEF' }}></View>

          <TouchableOpacity onPress={this.delAddr}
          style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-end', width: '100%', marginTop: 20, paddingRight: 10 }}>
            <Image source={require('../../images/delete.png')} style={{ width: 25, height: 25 }}></Image>
            <Text style={{ color: '#8a8a8a' }}>删除地址</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={this.saveAddr}
        style={{ white: '100%', height: 50, backgroundColor: '#FFACAC', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>保存收货地址</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EditAddr;