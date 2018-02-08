import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';


export default class Friend extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    添加
                </Text>
                <Text style={styles.welcome}>
                    新朋友
                </Text>
                <Text style={styles.welcome}>
                    列表
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});