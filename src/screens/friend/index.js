import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    StatusBar
} from 'react-native';
import { color, size } from '../../theme';
import { StackNavigator } from "react-navigation";

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>密友 Details Screen</Text>
            </View>
        );
    }
}

class FriendScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
                },
                headerTitle: '密友',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.ms,
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
                },
                headerTitle: '密友-子页面',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.ms,
                },
            }
        },
    },
    {
        initialRouteName: 'Friend',
    }
);

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
    navigatorHeaderStyle: {
        backgroundColor: color.font.brown,
    },
    navigatorHeaderTitleStyle: {
        color: color.font.orange
    },
});

