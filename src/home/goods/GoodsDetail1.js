import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView,
    TextInput
} from 'react-native';
import Swiper from 'react-native-swiper';
var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;
class GoodsDetail1 extends Component {

    static navigationOptions = {
        header: null,  //隐藏顶部导航栏
    };

    constructor(props) {
        super(props);
        this.state = {
            produst: [{ money: '112', name: '柔润肌理实力补水.B5透明质酸补水乳液   120ml', detail: 'sssssssssssssssssssssssssssssiii' }]
        };
    }
    render() {
        return (
            <View style={styles.container}>
               <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: screenW, height: screenH * 0.4, backgroundColor: 'pink' }}>
                    <Swiper
                        style={styles.swiper}          //样式
                        height={200}                   //组件高度
                        loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                        // autoplay={true}                //自动轮播
                        // autoplayTimeout={3}                //每隔4秒切换
                        horizontal={true}              //水平方向，为false可设置为竖直方向
                        paginationStyle={{ bottom: 10 }} //小圆点的位置：距离底部10px
                        showsButtons={false}           //为false时不显示控制按钮
                        showsPagination={true}       //为false不显示下方圆点
                        dot={<View style={{           //未选中的圆点样式
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 14,
                            height: 14,
                            borderRadius: 4,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }} />}
                        activeDot={<View style={{    //选中的圆点样式
                            backgroundColor: '#007aff',
                            width: 14,
                            height: 14,
                            borderRadius: 4,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }} />}

                    >
                        <Image source={require('../../images/p5.png')} style={styles.img} />
                        <Image source={require('../../images/p2.jpg')} style={styles.img} />
                        <Image source={require('../../images/p3.jpg')} style={styles.img} />
                        <Image source={require('../../images/p4.jpg')} style={styles.img} />
                    </Swiper>
                </View>

<View style={{ backgroundColor: 'white'}}>
    {/* <h2>￥{this.state.produst.money}</h2> */}
    <Text style={{color:'red',fontSize:20,fontWeight:'bold',marginLeft:10,}}>￥{this.state.produst[0].money}</Text>
    <Text style={{fontSize:18,color:'black',fontFamily:'宋体',marginLeft:10,}}>{this.state.produst[0].name}</Text>
</View>

<View style={{width: screenW, backgroundColor: 'white',marginTop:10}}>
  <Text style={{fontSize:16}}>B5玻尿酸大家都熟悉了，是AHC的王牌，更是AHC的天下，基础护肤重要的一步——补水，这款富含玻尿酸和维他命的乳液，可以保持皮肤润泽细嫩光滑，
      高效保湿补水，提供肌肤所需的营养。还可以舒缓敏感，味道也是淡淡的不浓郁不含香精不含添加剂，敏感肌肤看过来一定要入手！B5玻尿酸大家都熟悉了，是AHC的王牌，更是AHC的天下，基础护肤重要的一步——补水，这款富含玻尿酸和维他命的乳液，可以保持皮肤润泽细嫩光滑，
      高效保湿补水，提供肌肤所需的营养。还可以舒缓敏感，味道也是淡淡的不浓郁不含香精不含添加剂，敏感肌肤看过来一定要入手！B5玻尿酸大家都熟悉了，是AHC的王牌，更是AHC的天下，基础护肤重要的一步——补水，这款富含玻尿酸和维他命的乳液，可以保持皮肤润泽细嫩光滑，
      高效保湿补水，提供肌肤所需的营养。还可以舒缓敏感，味道也是淡淡的不浓郁不含香精不含添加剂，敏感肌肤看过来一定要入手！</Text>
   
</View>
</ScrollView> 
    <View style={{width:screenW,height:50,backgroundColor:'#FFACAC',display:'flex',flexDirection:'row'}}>
   <View style={{height:'100%',width:'60%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
     <Image source={require('../../images/add1.png')}></Image>
     <TextInput editable={false} value={'1'} style={{width:60,height:"100%",fontSize:20,color:'white',textAlign:'center'}}></TextInput>
     <Image source={require('../../images/jian.png')}></Image>
   </View>
   <View style={{width:'40%',backgroundColor:'skyblue',height:'100%',display:'flex',flexDirection:'row',alignItems: 'center',  justifyContent: 'center',}}>
   <Text style={{fontSize:18,color:'white'}}>加入购物车</Text>
   </View>
    </View>   
   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor:'#F1F5F7'
    },
});

export default GoodsDetail1;