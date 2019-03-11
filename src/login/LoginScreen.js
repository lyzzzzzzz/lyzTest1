import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';

export default class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    };

    toIndex = () => {
        this
            .props
            .navigation
            .navigate('HomeScreen')
    }



    render() {
        return (
            <View>
                <Text onPress={this.toIndex}>LoginScreen page</Text>
            </View>
        );
    }

}
