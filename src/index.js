import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './home/Index';
import Cart from './home/ShopCart';
import My from './home/My';
import Classify from './home/Classify';
const dataSource = [
  { icon: require('./images/index.png'), selectedIcon: require('./images/index2.png'), tabPage: 'Home', tabName: '首页', component: Home },
  // { icon: require('./images/sz.png'), selectedIcon: require('./images/fff.png'), tabPage: 'Products', tabName: '分类', component: Products },
  { icon: require('./images/sz.png'), selectedIcon: require('./images/fff.png'), tabPage: 'Classify', tabName: '分类', component: Classify },
  { icon: require('./images/gouwuche.png'), selectedIcon: require('./images/gouwuche1.png'), tabPage: 'Cart', tabName: '购物车', component: Cart },
  { icon: require('./images/wode_1.png'), selectedIcon: require('./images/wode_11.png'), tabPage: 'My', tabName: '我的', component: My }
]
var navigation = null;
export default class App extends Component {
  static navigationOptions = {
    header: null
  };


  constructor(props) {
    super(props);
    navigation = this.props.navigation;
    this.state = {
      selectedTab: 'Home'
    }
  }

  render() {

    let tabViews = dataSource.map((item, i) => {
      return (
        <TabNavigator.Item
          title={item.tabName}
          selected={this.state.selectedTab === item.tabPage}
          titleStyle={{ color: 'white', fontSize: 12 }}
          selectedTitleStyle={{ color: '#7F0000' }}
          renderIcon={() => <Image style={styles.tabIcon} source={item.icon} />}
          renderSelectedIcon={() => <Image style={styles.tabIcon2} source={item.selectedIcon} />}
          tabStyle={{ alignSelf: 'center', backgroundColor: "#FFACAC", marginTop: 0, padding: 0 }}
          onPress={() => { this.setState({ selectedTab: item.tabPage }) }}
          key={i}
        >
          <item.component navigation={navigation} />
        </TabNavigator.Item>
      );
    })
    return (
      <View style={styles.container}>
        <TabNavigator
          hidesTabTouch={true}
          tabBarStyle={{ backgroundColor: "#FFACAC", marginTop: 0, padding: 0, }}
        >
          {tabViews}
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
    backgroundColor: '#F5FCFF',
    margin: 0,
    padding: 0,
  },
  tabIcon: {
    width: 23,
    height: 23,
  },
  tabIcon2: {
    width: 23,
    height: 23,
   
  }
});
