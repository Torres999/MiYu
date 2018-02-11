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
                <Text>密境 Details Screen</Text>
            </View>
        );
    }
}

class FindScreen extends React.Component {
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
                headerTitle: '密境',
                //headerBackTitle: '',设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                headerTitle: '密境-子页面',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
    },
    {
        initialRouteName: 'Find',
    }
);