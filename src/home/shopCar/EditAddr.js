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
  Switch
} from 'react-native';
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
      swtich: false
    };
  }

  componentDidMount = () => {
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    this.setState({ addr: item, name: item.name, phone: item.phone, addrdetail: item.addrdetail })
    console.log('===============item=====================');
    console.log(item);
    console.log('====================================');
  }


  swtichChange = () => {
    this.setState({ swtich: !this.state.swtich })
  }

  render() {
    let addr = this.state.addr
    let name = this.state.name
    let phone = this.state.phone
    let addrdetail = this.state.addrdetail
    return (
<View style={{flexDirection: "column",flex:1,justifyContent: 'space-between'}}>
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
          <Switch onValueChange={this.swtichChange} value={this.state.swtich}></Switch>
        </View>
        <View style={{ width: '100%', height: 1, backgroundColor: '#EBEFEF' }}></View>

        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'flex-end', width: '100%', marginTop: 20, paddingRight: 10 }}>
          <Image source={require('../../images/delete.png')} style={{ width: 25, height: 25 }}></Image>
          <Text style={{ color: '#8a8a8a' }}>删除地址</Text>
        </View>

      </View>

<View style={{white:'100%',height:50,backgroundColor:'#FFACAC',flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
<Text style={{color:'white',fontWeight:'bold',fontSize:16}}>保存收货地址</Text>
</View>
      </View>
    );
  }
}

export default EditAddr;