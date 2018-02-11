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

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>我 Details Screen</Text>
            </View>
        );
    }
}

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
            <View style={styles.viewStyle}>
                <StatusBar
                    hidden={false}
                    barStyle="light-content"
                    height={size.statusBar.height}
                />

                <ImageBackground
                    style={[styles.flexDirectionColumn, styles.headerWrap]}
                    source={imageSource.myHeaderBg}
                    imageStyle={[
                        {
                            resizeMode: 'cover'
                        },
                        styles.headerWrap
                    ]}
                >
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
                </ImageBackground>


                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={this.onRefresh.bind(this)}
                            style={{backgroundColor: 'transparent'}}
                            title="获取数据中..."
                            colors={[color.loading]}
                            tintColor={color.loading}
                        />
                    }
                >

                    <Divider height={10}/>
                    <Text style={styles.welcome}>
                        下拉更新,{this.state.testRefresh}
                    </Text>
                </ScrollView>
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
                headerTitle: '我-子页面',
                headerBackTitleStyle: {
                    color: color.font.yellow,
                    alignSelf: 'center',
                    frontSize: size.font.sm,
                },
            }
        },
    },
    {
        initialRouteName: 'Me',
    }
);