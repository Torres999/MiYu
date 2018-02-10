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
                <Text>我 Details Screen</Text>
            </View>
        );
    }
}

class MeScreen extends React.Component {
    constructor(props) {
        super(props);//必须的，否则constructor报错
        this.state = {
            testText: '默认头像'
        }
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar
                    hidden={false}
                    barStyle="light-content"
                    height={size.statusBar.height}
                />
                <Text style={styles.welcome}
                      onPress={
                          () => {
                              fetch('http://localhost:18080/')
                                  .then((response) => response.text())
                                  .then((responseText) => {
                                      this.setState({
                                          testText: JSON.parse(responseText).name,
                                      })
                                  })
                          }
                      }>
                    头像：{this.state.testText}
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
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default class Me extends Component {
    render() {
        return <Navigator/>;
    }
}

const Navigator = StackNavigator(
    {
        Me: {
            screen: MeScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: color.font.brown,
                },
                headerTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                },
                headerTitle: '我',
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
                headerTitle: '我-子页面',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    frontSize: size.font.ms,
                },
            }
        },
    },
    {
        initialRouteName: 'Me',
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
