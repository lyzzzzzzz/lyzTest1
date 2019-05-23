import React, { Component } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
	TextInput,
	Alert,
	SectionList,
	AsyncStorage,
	DeviceEventEmitter,
	Button
} from 'react-native';
class MyOrder extends Component {


  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FFACAC",
    },
    headerTintColor: 'white',
    headerTitle: "我的订单"
  };


  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Text>我的订单</Text>
    );
  }
}

export default MyOrder;