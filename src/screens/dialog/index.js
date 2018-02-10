import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    StatusBar
} from 'react-native';
import { color,size } from '../../theme';
import { StackNavigator } from "react-navigation";

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>密话 Details Screen</Text>
            </View>
        );
    }
}

class DialogScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
                headerStyle: {
                    backgroundColor: color.font.brown,
                },
                headerTitleStyle: {
                    color: color.font.yellow,
                    alignSelf : 'center',
                },
                headerTitle: '密话',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf : 'center',
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
                    alignSelf : 'center',
                },
                headerTitle: '密话-子页面',
                headerBackTitle: '返回',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf : 'center',
                    fontSize: size.font.ms,
                },
            }
        },
    },
    {
        initialRouteName: 'Dialog',
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
});
