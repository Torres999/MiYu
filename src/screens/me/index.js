import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class Me extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    头像
                </Text>
                <Text style={styles.welcome}>
                    昵称／性别
                </Text>
                <Text style={styles.welcome}>
                    我的蜜境
                </Text>
                <Text style={styles.welcome}>
                    添加是否需要验证
                </Text>
                <Text style={styles.welcome}>
                    意见反馈
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
