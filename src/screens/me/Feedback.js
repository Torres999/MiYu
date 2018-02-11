import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../theme';


export default class FeedbackScreen extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>意见反馈</Text>
            </View>
        );
    }
}