import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../theme';


export default class MyZoneScreen extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>我的蜜境</Text>
            </View>
        );
    }
}