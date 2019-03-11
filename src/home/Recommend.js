/**
 * 首页折扣模块
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

// 导入json数据
var Common = require('./Common')

class Recommend extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: "#C6C6C6", fontSize: 16, marginBottom: 10 }}>精 / 品 / 推 / 荐</Text>
                <Common />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20
    },
});


// 输出
module.exports = Recommend;
