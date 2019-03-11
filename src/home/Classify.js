import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView,
    ImageBackground
} from 'react-native';
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

export default class Classify extends Component {

    render() {
        return (
            <ScrollView >
                <View style={{ flexDirection: "column", alignItems: "center", width: screenW, height: 670 }}>

                    <View style={{ width: "100%", height: 650, flexDirection: "column", justifyContent:'flex-start', alignItems: "center" }}>
                        <View style={{ width: "100%", height: 100}}>
                            <ImageBackground source={require('../images/topbar.png')} style={{ width: "100%", height: 100, flexDirection:'column',alignItems:"center"}}>
                            <Text style={{color:"white",fontSize:18,fontWeight:'bold',marginTop:20}}>分类</Text>
                            </ImageBackground>
                        </View>

                        <View style={{ width: "80%", height: 100}}>
                            <ImageBackground source={require('../images/kouhong.png')} style={{ width: "100%", height: 100, flexDirection:'column',justifyContent:"center",alignItems:"center" }}>
                            <Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>口红</Text>
                            </ImageBackground>
                        </View>
                        
                        <View style={{ width: "80%", height: 100,marginTop:15}}>
                            <ImageBackground source={require('../images/fendi.png')} style={{ width: "100%", height: 100, flexDirection:'column',justifyContent:"center",alignItems:"center" }}>
                            <Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>粉底</Text>
                            </ImageBackground>
                        </View>
                        <View style={{ width: "80%", height: 100, marginTop:15}}>
                            <ImageBackground source={require('../images/yanying.png')} style={{ width: "100%", height: 100,flexDirection:'column',justifyContent:"center",alignItems:"center" }}>
                          <Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>眼影</Text>
                            </ImageBackground>
                        </View>
                        <View style={{ width: "80%", height: 100, marginTop:15}}>
                            <ImageBackground source={require('../images/zhexia.png')} style={{ width: "100%", height: 100,flexDirection:'column',justifyContent:"center",alignItems:"center"  }}>
                            <Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>遮瑕</Text>
                            </ImageBackground>
                        </View>
                        <View style={{ width: "80%", height: 100,marginBottom:20,marginTop:15}}>
                            <ImageBackground source={require('../images/zhijiayou.png')} style={{ width: "100%", height: 100,flexDirection:'column',justifyContent:"center",alignItems:"center"  }}>
                            <Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>腮红</Text>
                                   </ImageBackground>
                        </View>
                       
                    </View>


              </View>
            </ScrollView>

        );
    }

}

const styles = StyleSheet.create({
    contain: {
        flexDirection: "column",
        alignItems: "center",
        width: screenW,

    },

});
