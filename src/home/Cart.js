/**
 * 首页折扣模块
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';

var TitleView = require('./CartTitle');
// 导入json数据
var Home_D5 = require('./XMG_Home_D5.json');

class Cart extends Component{
    render() {
        return (
            <View style={styles.container}>
                <TitleView
                    leftIcon="gw"
                    leftTitle="购物车"

                />
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.itemViewStyle}>
                            <Image source={require('../images/p5.png')} style={styles.imageStyle} />
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.itemViewStyle}>
                                    <Text style={styles.clothNameStyle}>百塔高领针织衫</Text>
                                    <Text style={styles.clothPayStyle}>$98</Text>
                                </View>
                                <View style={styles.itemViewStyle}>
                                    <Text style={styles.shopNameStyle}>优衣库旗舰店</Text>
                                </View>
                                <View style={styles.itemViewStyle}>
                                    <Text style={styles.shopNameStyle}>均码</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                <View style={styles.inputStyle}>                                
                                 <TextInput  style={styles.input1}  editable={false} value='-' />
                                 <TextInput  style={styles.middleInput}  />
                                 <TextInput  value='+' style={styles.input2}  editable={false} />
                                 </View>
                                 <View style={styles.itemViewStyle}>
                                    <Text style={styles.delete}>×</Text>
                                </View>
                                 </View>
                            </View>
                        </View>

                        <View style={styles.itemViewStyle2}>
                            <Image source={require('../images/p5.png')} style={styles.imageStyle} />
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.itemViewStyle}>
                                    <Text style={styles.clothNameStyle}>百塔高领针织衫2</Text>
                                    <Text style={styles.clothPayStyle}>$98</Text>
                                </View>
                                <View style={styles.itemViewStyle}>
                                    <Text style={styles.shopNameStyle}>优衣库旗舰店</Text>
                                </View>
                                <View style={styles.itemViewStyle}>
                                    <Text style={styles.shopNameStyle}>L</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.itemViewStyle2}>
                            <Image source={require('../images/p5.png')} style={styles.imageStyle} />
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.itemViewStyle}>
                                    <Text style={styles.clothNameStyle}>百塔高领针织衫3</Text>
                                    <Text style={styles.clothPayStyle}>$98</Text>
                                </View>
                                <View style={styles.itemViewStyle}>
                                    <Text style={styles.shopNameStyle}>优衣库旗舰店</Text>
                                </View>
                            </View>
                        </View>


                     
                    </View>
                </ScrollView>
            </View>
        );
    }


}



const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    scrollViewStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
    },
    itemViewStyle: {
        //margin: 8,
        flexDirection: 'row',
      
    },
    imageStyle: {
        width: 120,
        height: 100,
        borderRadius: 8,
    },
    clothNameStyle: {
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 5,
        color: 'black',
        width:185
       
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 60,
    },
    clothPayStyle: {
        textAlign: 'right',
        marginTop: 5,
       // marginLeft: 55,
        color: 'black',
        justifyContent: 'space-around', 
    
    },
    itemViewStyle2: {
       // margin: 8,
        flexDirection: 'row',
        marginTop: 25
    },
    shopNameStyle: {
        textAlign: 'center',
        marginTop: 5,
        marginLeft: 10,
        color: 'gray',
        fontSize:10, 
    },
      input1: {
        textAlign: 'center',
        height: 30,  
        borderWidth: 1,
        borderColor: '#ccc',
        width:25,
        marginLeft: 10,
        padding:0,
        marginTop: 8,
      },
      middleInput: {
        textAlign: 'center',
        height:30,
        borderWidth:1,
        borderColor: '#ccc',
        width:45,
        borderLeftWidth:0,
        borderRightWidth:0,
        padding:0,
        marginTop: 8,
    },
    input2: {
        textAlign: 'center',
        height:30,  
        borderWidth: 1,
        borderColor: '#ccc',
        width:25,
        padding:0,
        marginTop: 8,
      },
      delete:{
          fontSize:40,
          color:'#E0E0E0'
      },
      inputStyle:{
        flexDirection: 'row',
        width:180,
      }
});

// 输出
module.exports = Cart;