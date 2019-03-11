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
  ScrollView
} from 'react-native';
var Common = require('./Common')
var screenW = Dimensions.get('window').width;
export default class DiorDetail extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FFACAC",
    },
    headerTintColor: 'white',
    headerTitle: "Dior"
  };


  render() {
    return (
      <View style={styles.container}>
        {/* 搜索框 */}
        <View style={styles.navBarStyle}>
          <TextInput placeholder="输入商家,品类,商圈" style={styles.topInputStyle} />
        </View>
<Common/>
       
      </View>
    );
  }

}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor: 'white'
  },
  // 导航栏
  navBarStyle: {
    height: Platform.OS === 'ios' ? 64 : 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10
  },
  // 搜索框
  topInputStyle: {
    width: screenW * 0.71,
    height: Platform.OS === 'ios' ? 35 : 35,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 18 : 0,
    // 圆角
    borderRadius: 18,
    paddingLeft: 10,
    backgroundColor: 'white',
    elevation: 3,
  },

});
