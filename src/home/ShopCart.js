import React,{ Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
var SCart= require('./Cart');

export default class ShopCart extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
    <SCart/>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'grey'
    },
    text:{
      fontSize:30,
      color:'black'
    }
});
