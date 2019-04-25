import React, { Component } from 'react';
import { View ,Button} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer ,navigation} from 'react-navigation';

import LoginScreen from './login/LoginScreen';
import HomeScreen from './index'
import DiorScreen from './home/DiorDetail'
import YSLScreen from "./home/YslDetail" 
import MacScreen from "./home/MacDetail"
import ChanelScreen from "./home/ChanelDetail"
import GoodsDetail1 from "./home/goods/GoodsDetail1"
import GoodsDetail2 from "./home/goods/GoodsDetail2"
import GoodsDetail3 from "./home/goods/GoodsDetail3"
import GoodsDetail4 from "./home/goods/GoodsDetail4"
import KouhongDetail from './home/classify/KouhongDetail'
import Riegister from './login/Riegister'
import FendiDetail from './home/classify/FendiDetail'
import YanyingDetail from './home/classify/YanyingDetail'
import ZhexiaDetail from './home/classify/ZhexiaDetail'
import SaihongDetail from './home/classify/SaihongDetail'
//主页
const HomeStack = createStackNavigator({
    HomeScreen: HomeScreen,
    DiorScreen:DiorScreen,
    YSLScreen:YSLScreen,
    MacScreen:MacScreen,
    ChanelScreen:ChanelScreen,
    GoodsDetail1:GoodsDetail1,
    GoodsDetail2:GoodsDetail2,
    GoodsDetail3:GoodsDetail3,
    GoodsDetail4:GoodsDetail4,
    LoginScreen: LoginScreen,
    KouhongDetail:KouhongDetail,
    FendiDetail:FendiDetail,
    YanyingDetail:YanyingDetail,
    ZhexiaDetail:ZhexiaDetail,
    SaihongDetail:SaihongDetail,
    Riegister:Riegister,
}, { initialRouteName: "HomeScreen" ,
defaultNavigationOptions: {
    headerStyle: {
        elevation: 1
    },
    headerTitleStyle: {
        fontWeight: 'normal',
        flex: 1,
        textAlign: 'center'
    },
    headerRight: <View
        style={{
            width: 50,
            height: 10
        }} />,
      
}
});
const RootStack = createSwitchNavigator({
    Home: HomeStack,
}, {
        initialRouteName: 'Home',
        backBehavior:'none'
    });

 const AppContainer = createAppContainer(RootStack);

 export default class RootNavigation extends Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (<AppContainer />);
     }
 }