import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
// ES5
export default class CartTitle extends Component{
    getDefaultProps(){
        return{
            leftIcon:'',
            leftTitle:'',
            rightTitle:'',
        }
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={require('../images/shop.jpg')}  style={{width:23,height:23,marginRight:5}} />
                        <Text style={styles.text}>{this.props.leftTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
//);
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFACAC',
        flexDirection:'row',
        height:44,
        justifyContent:'space-between',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
   text:{
    fontSize:17, 
    textAlign:'center',
    fontStyle:'italic',
    color:'black',
    textShadowColor:'skyblue',
    textShadowOffset:{width:5,height:5}
    },
});
 
// 输出
module.exports = CartTitle;