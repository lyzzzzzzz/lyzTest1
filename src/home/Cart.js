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
import { State } from 'react-native-gesture-handler';



export default Cart;

class Cart extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
             address:'广东省肇庆市怀集县凤岗镇桃花村委会vvvvvvvvvv',
             name:'李雅真',
             phone:'17724272471'
         };
    }


    render() {
        return (
            <View >
                <View style={{ width: '100%', height: 50, backgroundColor: '#FFACAC', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>购物车</Text>
                </View>


                <ScrollView showsHorizontalScrollIndicator={false} >
                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', }}>


                        <View style={styles.addr}>
                            <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#571D0C', fontSize: 17, marginLeft: 5 }}>收货地址</Text>
                            </View>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#F0F0F0' }}></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%',}}>
                                <View style={{ width: '80%', height: 90, flexDirection:'column',justifyContent:'space-around',marginLeft: 5}}>
                                <Text style={{fontSize:16,color: '#571D0C'}}>{this.state.address}</Text>
                                <Text style={{fontSize:15}}>{this.state.name}</Text>
                                <Text style={{fontSize:15}}>{this.state.phone}</Text>
                                </View>
                                <View style={{ width: '15%', height:50,flexDirection:'row',alignItems:'center',justifyContent:'flex-end' }}>
                                <Image source={require('../images/editAddr.png')}></Image>
                                </View>
                            </View>

                        </View>

                        {/* 

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
                                        <TextInput style={styles.input1} editable={false} value='-' />
                                        <TextInput style={styles.middleInput} />
                                        <TextInput value='+' style={styles.input2} editable={false} />
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
                        </View> */}

                        {/* <View style={styles.itemViewStyle2}>
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
                        </View> */}



                    </View>
                </ScrollView>
            </View>
        );
    }


}



const styles = StyleSheet.create({

    addr: {
        width: '95%',
        height: 130,
        backgroundColor: 'white',
        marginTop: 10,
        elevation: 2,
        marginBottom: 10,
        flexDirection: 'column',
    },
    scrollViewStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
    },
    itemViewStyle: {
        width: '95%',
        flexDirection: 'row',
        elevation: 5
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
        width: 185

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
        fontSize: 10,
    },
    input1: {
        textAlign: 'center',
        height: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 25,
        marginLeft: 10,
        padding: 0,
        marginTop: 8,
    },
    middleInput: {
        textAlign: 'center',
        height: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 45,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        padding: 0,
        marginTop: 8,
    },
    input2: {
        textAlign: 'center',
        height: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 25,
        padding: 0,
        marginTop: 8,
    },
    delete: {
        fontSize: 40,
        color: '#E0E0E0'
    },
    inputStyle: {
        flexDirection: 'row',
        width: 180,
    }
});

// 输出
module.exports = Cart;