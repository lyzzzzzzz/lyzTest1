import React, { Component } from 'react';
import { View ,Button} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer ,navigation} from 'react-navigation';

import LoginScreen from './login/LoginScreen';
import HomeScreen from './index'
import DiorScreen from './home/DiorDetail'
import YSLScreen from "./home/YslDetail" 
import MacScreen from "./home/MacDetail"
import ChanelScreen from "./home/ChanelDetail"
//登陆跳转
const LoginStack = createStackNavigator({
    LoginScreen: LoginScreen,
}, { initialRouteName: "LoginScreen" ,
});
//主页
const HomeStack = createStackNavigator({
    HomeScreen: HomeScreen,
    DiorScreen:DiorScreen,
    YSLScreen:YSLScreen,
    MacScreen:MacScreen,
    ChanelScreen:ChanelScreen,
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
    Login: LoginStack,
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