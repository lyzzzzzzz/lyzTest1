import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';
class GoodsDetail1 extends Component {

    static navigationOptions = {
        header:null,  //隐藏顶部导航栏
      };

    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{width:100,height:100,backgroundColor:'pink'}}>
                <Text>{this.props.shopName}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex:1,
    },
});

export default GoodsDetail1;