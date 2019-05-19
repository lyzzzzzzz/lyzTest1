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
import KouhongDetail from './home/classify/KouhongDetail'
import Riegister from './login/Riegister'
import FendiDetail from './home/classify/FendiDetail'
import YanyingDetail from './home/classify/YanyingDetail'
import ZhexiaDetail from './home/classify/ZhexiaDetail'
import SaihongDetail from './home/classify/SaihongDetail'
import IndexSearch from './home/IndexSearch'
import UpdUserMsg from './home/UpdUserMsg'
import NavigationService from './NavigationService'
import My from './home/My'
import addrDetail from './home/shopCar/addrDetail'
//主页
const HomeStack = createStackNavigator({
    HomeScreen: HomeScreen,
    DiorScreen:DiorScreen,
    YSLScreen:YSLScreen,
    MacScreen:MacScreen,
    ChanelScreen:ChanelScreen,
    GoodsDetail1:GoodsDetail1,
    LoginScreen: LoginScreen,
    KouhongDetail:KouhongDetail,
    FendiDetail:FendiDetail,
    YanyingDetail:YanyingDetail,
    ZhexiaDetail:ZhexiaDetail,
    SaihongDetail:SaihongDetail,
    IndexSearch:IndexSearch,
    Riegister:Riegister,
    UpdUserMsg:UpdUserMsg,
    addrDetail:addrDetail,
    My:My
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
        backBehavior:'none',

    });

 const AppContainer = createAppContainer(RootStack);

 export default class RootNavigation extends Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (<AppContainer  ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef);
          }}/>);
     }
 }