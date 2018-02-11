import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StatusBar,
    ScrollView,
    RefreshControl, ImageBackground
} from 'react-native';
import { color, size, styles } from '../../theme';
import { Divider } from '../../components';
import { StackNavigator } from "react-navigation";
import imageSource from '../../img';
import MyZoneScreen from './MyZone';
import FeedbackScreen from "./Feedback";
import SelfInfoScreen from "./SelfInfo";

class MeScreen extends React.Component {
    onRefresh() {
        refreshing: true//TODO 好像没用
        this.setState({
            testRefresh: '刷新后......'
        })
    }

    constructor(props) {
        super(props);//必须的，否则constructor报错
        this.state = {
            testText: '默认头像',
            testRefresh: '刷新前'
        }
    }

    render() {
        const {refreshing = false} = this.props;
        return (
            <View>
                <StatusBar
                    hidden={false}
                    barStyle="light-content"
                    height={size.statusBar.height}
                />

                <Divider height={10}/>
                <View style={[styles.flexDirectionRow, {
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: '#F5FCFF'
                }]}>
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
                    <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('SelfInfo')}>
                        昵称／性别
                    </Text>
                </View>


                <Divider height={10}/>
                <View style={[styles.flexDirectionRow, {
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: '#F5FCFF'
                }]}>
                    <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('MyZone')}>
                        我的蜜境
                    </Text>
                </View>


                <Divider height={10}/>
                <View style={[styles.flexDirectionRow, {
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: '#F5FCFF'
                }]}>
                    <Text style={styles.welcome}>
                        添加是否需要验证
                    </Text>
                </View>


                <Divider height={10}/>
                <View style={[styles.flexDirectionRow, {
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: '#F5FCFF'
                }]}>
                    <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('Feedback')}>
                        意见反馈
                    </Text>
                </View>
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
                    fontSize: size.font.lg,
                },
                headerTitle: '我',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.sm,
                },
            }
        },
        SelfInfo: {
            screen: SelfInfoScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: color.font.brown,
                },
                headerTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.lg,
                },
                headerTitle: '个人信息',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.sm,
                },
            }
        },
        MyZone: {
            screen: MyZoneScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: color.font.brown,
                },
                headerTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.lg,
                },
                headerTitle: '我的蜜境',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.sm,
                },
            }
        },
        Feedback: {
            screen: FeedbackScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: color.font.brown,
                },
                headerTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.lg,
                },
                headerTitle: '意见反馈',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    fontSize: size.font.sm,
                },
            }
        },
    },
    {
        initialRouteName: 'Me',
    }
);