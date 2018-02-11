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
            <View style={styles.style}>
                <Text>密友 Details Screen</Text>
            </View>
        );
    }
}

class FriendScreen extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <StatusBar
                    hidden={false}
                    barStyle="light-content"
                    height={size.statusBar.height}
                />
                <Text style={styles.welcome}>
                    添加
                </Text>
                <Text style={styles.welcome}>
                    新朋友
                </Text>
                <Text style={styles.welcome}>
                    列表
                </Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default class Friend extends Component {
    render() {
        return <Navigator/>;
    }
}

const Navigator = StackNavigator(
    {
        Friend: {
            screen: FriendScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: color.font.brown,
                },
                headerTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.lg,
                },
                headerTitle: '密友',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.sm,
                },
            }
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: color.font.brown,
                },
                headerTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.lg,
                },
                headerTitle: '密友-子页面',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.sm,
                },
            }
        },
    },
    {
        initialRouteName: 'Friend',
    }
);