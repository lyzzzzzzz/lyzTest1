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
  FlatList
} from 'react-native';
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
     };
  }
  render() {
    return (
      <FlatList
      data={[{key: 'a'}, {key: 'b'}]}
      renderItem={({item}) => <Text>{item.key}</Text>}
    />
    );
  }
}

export default addrDetail;