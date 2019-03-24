/**
 * 共同模块
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import ShopCenterItem from './ShopCenterItem'
class Common extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                  "detailurl": "GoodsDetail1",
                  "promotionIcon": "",
                  "name": "优衣库",
                //  "img": "../images/6zhe.jpg",
                "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg",
                  "showtext": {
                    "text": "6折优惠",
                    "count": 84,
                    "color": ""
                  },
                  "longitude": 113.327086,
                  "latitude": 23.131909,
                  "smid": 4374715,
                  "promotionText": "送福利 商品低至1.5折"
                },
                {
                  "detailurl": "GoodsDetail2",
                  "promotionIcon": "",
                  "name": "爱衣服",
                  "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg",
                  //"img": "../images/6zhe.jpg",
                  "showtext": {
                    "text": "8折优惠",
                    "count": 55,
                    "color": ""
                  },
                  "longitude": 113.26605,
                  "latitude": 23.17151,
                  "smid": 50606658,
                  "promotionText": "春来花开 满100最高减60"
                },
                {
                  "detailurl": "GoodsDetail3",
                  "promotionIcon": "",
                  "name": "安奈儿",
                  "img": "http://p0.meituan.net/codeman/2ad0711b7ffa9433bdc2577e7896082937607.jpg",
                  //"img": "../images/6zhe.jpg",
                  "showtext": {
                    "text": "6折优惠",
                    "count": 61,
                    "color": ""
                  },
                  "longitude": 113.269668,
                  "latitude": 23.1818,
                  "smid": 75813274,
                  "promotionText": "新春送福利 购物满额有好礼"
                },
                {
                  "detailurl": "GoodsDetail4",
                  "promotionIcon": "",
                  "name": "太平鸟",
                 "img": "http://p0.meituan.net/codeman/d675f4ad9b7ece9f0593db298beb082d31800.jpg",
                 // "img": "../images/6zhe.jpg",
                  "showtext": {
                    "text": "8折优惠",
                    "count": 48,
                    "color": ""
                  },
                  "longitude": 113.232008,
                  "latitude": 23.397758,
                  "smid": 41692498,
                  "promotionText": "48家品牌优惠中：瑞可爷爷的店每满30减5，全单9折（买单立享）"
                }
              ],
        }
      }

    render() {























        return (
            <View style={styles.container}>
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

    // abc = (screen) => {
    //     this.props.efg(screen);
    // }

    // 返回所有item
    renderAllItem() {
        var itemArr = [];
        var shopData = this.state.data;
        for (var i = 0; i < shopData.length; i++) {
            var data = shopData[i];
            console.log(data.detailurl)
            itemArr.push(
                <ShopCenterItem
                    key={i}
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailUrl={data.detailurl}
                    abc={this.props.efg}
                />
            )
        }
        return itemArr;
    }
}

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
    shopSaleStyle: {
        // 定位
        position: 'absolute',
        left: 0,
        bottom: 30,
        backgroundColor: 'red',
        color: 'white',
        padding: 3,
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 60,
    },
});

// 输出
module.exports = Common;