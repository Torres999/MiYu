import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StatusBar
} from 'react-native';
import { color, size, styles } from '../../theme';
import { StackNavigator } from "react-navigation";

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>密话 Details Screen</Text>
            </View>
        );
    }
}

class DialogScreen extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <StatusBar
                    hidden={false}
                    barStyle="light-content"
                    height={size.statusBar.height}
                />
                <Text style={styles.welcome}>
                    查找
                </Text>
                <Text style={styles.welcome}>
                    Welcome to MIYU!消息
                </Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default class Dialog extends Component {
    render() {
        return <Navigator/>;
    }
}

const Navigator = StackNavigator(
    {
        Dialog: {
            screen: DialogScreen,
            navigationOptions: {
                headerTitle: '密话',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                headerTitle: '密话-子页面',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
    },
    {
        initialRouteName: 'Dialog',
    }
);