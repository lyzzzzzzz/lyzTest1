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
  AsyncStorage
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
        fetch(baseUrl + '/addr/selectAllByUserId?userId=' + JSON.parse(result).userId, {
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
          .then((response) => response.json())
          .catch(error => console.error('Error:', error))
          .then((responseData) => {
            if (responseData.length > 0) {
              that.setState({ addrList: responseData })
            } else {
              that.setState({ addrList: [] })
            }
          });
      }
    })
  }

  toEditAddr=(item)=>{
    this
    .props
    .navigation
    .push('EditAddr', { item: item })
  }


  render() {
    return (
      <View style={{ backgroundColor: '#F4F8F9', flexDirection: "column", }}>
        {this.state.addrList.length > 0 ?
          <FlatList
            style={{ width: '100%' }}
            data={this.state.addrList}
            renderItem={({ item }) =>
              <View style={{ flexDirection: "column", alignItems: 'flex-start', justifyContent: 'space-around', height: 70, backgroundColor: 'white', paddingLeft: 10, marginTop: 10 }}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
                  <Text style={{ fontSize: 16 }}>{item.name}</Text>
                  <Text style={{ fontSize: 16, marginLeft: 20 }}>{item.phone}</Text>
                  <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}  onPress={()=>this.toEditAddr(item)}>
                  <Image style={{ marginLeft: 30, width: 25, height: 25 }} source={require('../../images/edit33.png')}></Image>
                  <Text style={{ color: '#bfbfbf' }}>编辑</Text>
                  </TouchableOpacity>
                  
                </View>
                <View>
                  <Text style={{ fontSize: 16 }}>{item.addrdetail}</Text>
                </View>
                <View style={{ width: '100%', height: 2, backgroundColor: '#EBEFEF' }}></View>
              </View>
            }
          /> :
          <Text>没有地址，请新增~</Text>
        }

        <TouchableOpacity style={styles.addNewAddr}>
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