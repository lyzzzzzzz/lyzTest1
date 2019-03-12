import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
class ShopCenterItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                this.props.abc(this.props.detailUrl)}}>
                <View style={styles.itemViewStyle}>
                    <Image source={{ uri: this.props.shopImage }} style={styles.imageStyle} />
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    itemViewStyle: {
      width:140,
      height:135,
      backgroundColor:"white",
      marginTop:10,
      marginBottom:10,
      elevation: 4,
      alignItems:"center"
    },
    imageStyle: {
        width: "100%",
        height: 100,
      
    },
    shopNameStyle: {
        textAlign: 'center',
        marginTop: 5,
        color:"#757575"
    },
   
});





export default ShopCenterItem;