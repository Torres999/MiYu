import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../theme';


export default class SelfInfoScreen extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>个人信息</Text>
            </View>
        );
    }
}