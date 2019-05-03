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
import baseUrl from '../Comment'
var screenW = Dimensions.get('window').width;

class IndexSearch extends Component {


  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: "#FFACAC",
        width: '100%'
      },
      headerTintColor: 'white',
      headerTitle: (
        <TextInput placeholder="搜索"
          style={{ height: 35, backgroundColor: 'white', borderRadius: 18, paddingLeft: 10, width: 270 }}
          onChangeText={navigation.getParam('setText')}
          value={navigation.getParam('setText')}
          
        />
      ),
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam('getProductList')}  >
          <Image source={require('../images/sc.png')} style={{ width: 24, height: 24, }} />
        </TouchableOpacity>
      )
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({ getProductList: this.searchText });
    this.props.navigation.setParams({ setText: this.setText });
    this.props.navigation.setParams({ text: this.state.text });
  }

  state = {
    productList: [],
    text: ''
  };

  setText = (text) => {
    this.setState({ text: text });
  };


  searchText = () => {
    //获取商品列表
    fetch(baseUrl + '/product/SelectProductByTypeOrNameOrBrand?search=' + this.state.text, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then((response) => response.json())
      .catch(error => console.error('Error:', error))
      .then((responseData) => {
        if (responseData.length != 0) {
          this.setState({ productList: responseData })
        } else {
          ToastAndroid.show("没有数据!", ToastAndroid.SHORT);
        }
      });
  }




  render() {
    return (
      <View style={styles.container}>
        {/* 搜索框 */}
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
          <FlatList
            data={this.state.productList}
            numColumns='2'
            renderItem={({ item }) => <View style={styles.itemViewStyle}>
              <Image source={{ uri: item.productPicUrl }} style={styles.imageStyle} />
              <Text style={styles.shopNameStyle}>{item.productName}</Text>
            </View>
            }
          />
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageStyle: {
    width: "100%",
    height: 120,

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
  itemViewStyle: {
    width: 150,
    height: 160,
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    elevation: 4,
    marginLeft: 20
  },
  shopNameStyle: {
    textAlign: 'center',
    marginTop: 5,
    color: "#757575"
  },

});


export default IndexSearch;