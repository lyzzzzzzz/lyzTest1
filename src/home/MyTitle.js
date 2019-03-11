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
export default class MyTitle extends Component{
//var TitleCell = React.createClass({
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
                        <Image source={require('../images/dingdan.png')}  style={{width:23,height:23,marginRight:5}} />
                        <Text style={styles.text}>{this.props.leftTitle}</Text>                      
                    </View>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.text2}>{this.props.rightTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
//);
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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
    color:'black',
   },
    text2:{
        fontSize:12, 
        textAlign:'center',
        color:'gray',
    }
});
 
// 输出
module.exports = MyTitle;