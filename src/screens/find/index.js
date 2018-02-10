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

import Icon from 'react-native-vector-icons/FontAwesome';

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>密境 Details Screen</Text>
            </View>
        );
    }
}

class FindScreen extends React.Component {
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
                    分类
                </Text>
                <Text style={styles.welcome}>
                    -- 月排行 --
                </Text>
                <Text style={styles.welcome}>
                    -- 周排行密友 --
                </Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default class Find extends Component {
    render() {
        return <Navigator/>;
    }
}

const Navigator = StackNavigator(
    {
        Find: {
            screen: FindScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: color.font.brown,
                },
                headerTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                },
                headerTitle: '密境',
                //headerBackTitle: '',设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
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
                headerTitle: '密境-子页面',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.ms,
                },
            }
        },
    },
    {
        initialRouteName: 'Find',
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
