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
      addr:undefined
     };
  }

  componentDidMount = () =>{
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    this.setState({addr:item})
    console.log('===============item=====================');
    console.log(item);
    console.log('====================================');
  }

  render() {
    let addr=this.state.addr
    return (
     <View style={{flexDirection: "column", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
   <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
 <Text >收货人</Text>
 <TextInput value={addr==undefined?'':addr.name}/>
   </View>
     </View>
    );
  }
}

export default EditAddr;