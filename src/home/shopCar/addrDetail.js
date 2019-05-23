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
  DeviceEventEmitter
} from 'react-native';
import baseUrl from '../../Comment'
class addrDetail extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FFACAC",
    },
    headerTintColor: 'white',
    headerTitle: "地址列表"
  };

  constructor(props) {
    super(props);
    this.state = {
      addrList: [],
      result: undefined
    };
  }

  componentDidMount = () => {
    var that = this;
    AsyncStorage.getItem('user', (errs, result) => {
      if (errs) {
        alert('获取user错误!')
      } else {
        that.setState({ result: JSON.parse(result) })
        that.fetchAddrList(JSON.parse(result));
      }
    })

    that.listener = DeviceEventEmitter.addListener('updAddr', (message) => {
			that.fetchAddrList(that.state.result)
    })
    that.listenerDelAddr = DeviceEventEmitter.addListener('delAddr', (message) => {
			that.fetchAddrList(that.state.result)
    })
    that.listenerAddAddr = DeviceEventEmitter.addListener('addAddr', (message) => {
			that.fetchAddrList(that.state.result)
		})
  }



  fetchAddrList=(result)=>{
    fetch(baseUrl + '/addr/selectAllByUserId?userId=' +result.userId, {
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

  toEditAddr=(item)=>{
    this
    .props
    .navigation
    .push('EditAddr', { item: item })
  }

  addAddr=()=>{
    this
    .props
    .navigation
    .push('AddAddr', { user: this.state.result })
  }

  chooseAddr=(item)=>{
    DeviceEventEmitter.emit('chooseAddr',item);
      this
    .props
    .navigation
    .goBack()
  }

  render() {
    return (
      <View style={{ backgroundColor: '#F4F8F9', flexDirection: "column", }}>
        {this.state.addrList.length > 0 ?
          <FlatList
            style={{ width: '100%' }}
            data={this.state.addrList}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={()=>this.chooseAddr(item)}
              style={{ flexDirection: "column", alignItems: 'flex-start', justifyContent: 'space-around', height: 70, backgroundColor: 'white', paddingLeft: 10, }}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start',marginTop:10  }}>
                  <Text style={{ fontSize: 16}}>{item.name}</Text>
                  <Text style={{ fontSize: 16, marginLeft: 20 }}>{item.phone}</Text>
                  <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}  onPress={()=>this.toEditAddr(item)}>
                  <Image style={{ marginLeft: 30, width: 25, height: 25 }} source={require('../../images/edit33.png')}></Image>
                  <Text style={{ color: '#bfbfbf' }}>编辑</Text>
                  </TouchableOpacity>
                  
                </View>
                <View style={{marginBottom:10}}>
                  <Text style={{ fontSize: 16 }}>{item.addrdetail}</Text>
                </View>
                <View style={{ width: '100%', height: 2, backgroundColor: '#EBEFEF' }}></View>
              </TouchableOpacity>
            }
          /> :
          <Text>没有地址，请新增~</Text>
        }

        <TouchableOpacity style={styles.addNewAddr} onPress={this.addAddr}> 
          <Image source={require('../../images/addto.png')}></Image>
          <Text>添加新地址</Text>
        </TouchableOpacity>


      </View>)
  }
}

const styles = StyleSheet.create({
  addNewAddr: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingLeft: 10
  },
});

export default addrDetail;