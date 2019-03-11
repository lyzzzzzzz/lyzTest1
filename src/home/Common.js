/**
 * 共同模块
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入json数据
var Home_D5 = require('./XMG_Home_D5.json');



class Common extends Component{
    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={{color:"#C6C6C6",fontSize:16,marginBottom:10}}>精 / 选 / 推 / 荐</Text> */}
              
                <View
                    style={styles.scrollViewStyle}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </View>
                </View>
           
        );
    }

    // 返回所有item
    renderAllItem() {
        var itemArr = [];
        var shopData = Home_D5.data;
        for (var i = 0; i < shopData.length; i++) {
            var data = shopData[i];
            itemArr.push(
                <ShopCenterItem
                    key={i}
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                />
            )
        }
        return itemArr;
    }
}
//);

// 每一个商场
class ShopCenterItem extends Component{
    getDefaultProps() {
        return {
            shopImage: '',
            shopSale: '',
            shopName: '',
        }
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.itemViewStyle}>
                  
                    <Image source={{ uri: this.props.shopImage }} style={styles.imageStyle} />
                    {/* <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text> */}
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
//);

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20
    },
    scrollViewStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent:"space-around",
        alignItems:"center",
        flexWrap:"wrap"
       // padding: 10,
    },
    itemViewStyle: {
      width:140,
      height:135,
      backgroundColor:"white",
      marginTop:10,
      marginBottom:10,
     // borderRadius:5,
      elevation: 4,
      alignItems:"center"
    },
    imageStyle: {
        width: "100%",
        height: 100,
      
    },
    shopSaleStyle: {
        // 定位
        position: 'absolute',
        left: 0,
        bottom: 30,
        backgroundColor: 'red',
        color: 'white',
        padding: 3,
    },
    shopNameStyle: {
        textAlign: 'center',
        marginTop: 5,
        color:"#757575"
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 60,
    },
});

// 输出
module.exports = Common;