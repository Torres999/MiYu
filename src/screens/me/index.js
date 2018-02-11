import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StatusBar,
    ScrollView,
    RefreshControl, ImageBackground, Image
} from 'react-native';
import { color, size, styles } from '../../theme';
import { Divider } from '../../components';
import { StackNavigator } from "react-navigation";
import imageSource from '../../img';
import MyZoneScreen from './MyZone';
import FeedbackScreen from "./Feedback";
import SelfInfoScreen from "./SelfInfo";
import Icon from 'react-native-vector-icons/FontAwesome';

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
            testText: '头像',
            testRefresh: '....刷新前'
        }
    }

    render() {
        const {refreshing = false} = this.props;
        return (
            <View style={{flex: 1, backgroundColor: '#f5f5f5',}}>
                <StatusBar
                    hidden={false}
                    barStyle="light-content"
                    height={size.statusBar.height}
                />
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={this.onRefresh.bind(this)}
                        style={{backgroundColor: 'transparent'}}
                        title="获取数据中..."
                        colors={[color.loading]}
                        tintColor={color.loading}
                    />}>

                    <Divider height={15}/>
                    <View style={styles.containerView}>
                        <Image style={[styles.avatar, {margin: 8}]} source={imageSource.companyAvatar}/>
                        <View>
                            <Text style={{
                                fontSize: size.font.xs,
                                textAlign: 'left',
                                marginBottom: 5,
                            }} onPress={() => this.props.navigation.navigate('SelfInfo')}>
                                陪你度过漫长岁月
                            </Text>
                            <Text style={{
                                fontSize: size.font.xs,
                                textAlign: 'left',
                                marginTop: 5,
                            }} onPress={() => this.props.navigation.navigate('SelfInfo')}>
                                性别：男
                            </Text>
                        </View>
                        <View style={[styles.Icon, {marginRight: 12}]}>
                            <Icon name="chevron-right" size={22} color={color.icon.test1}
                                  onPress={() => this.props.navigation.navigate('SelfInfo')}/>
                        </View>
                    </View>


                    <Divider height={15}/>
                    <View style={[styles.flexDirectionRow, styles.containerView]}>
                        <Icon name="paperclip" size={22} color={color.icon.test1}
                              style={[styles.Icon, styles.containerIcon]}/>
                        <Text style={styles.containerFont}
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
                            点我：{this.state.testText}
                        </Text>
                    </View>


                    <Divider height={15}/>
                    <View style={[styles.flexDirectionRow, styles.containerView]}>
                        <Icon name="user-secret" size={22} color={color.icon.test1}
                              style={[styles.Icon, styles.containerIcon]}/>
                        <Text style={styles.containerFont} onPress={() => this.props.navigation.navigate('MyZone')}>
                            我的蜜境
                        </Text>
                    </View>

                    <Divider height={1}/>
                    <View style={[styles.flexDirectionRow, styles.containerView]}>
                        <Icon name="cog" size={22} color={color.icon.test1}
                              style={[styles.Icon, styles.containerIcon]}/>
                        <Text style={styles.containerFont}>
                            设置
                        </Text>
                    </View>


                    <Divider height={15}/>
                    <View style={[styles.flexDirectionRow, styles.containerView]}>
                        <Icon name="pencil" size={22} color={color.icon.test1}
                              style={[styles.Icon, styles.containerIcon]}/>
                        <Text style={styles.containerFont} onPress={() => this.props.navigation.navigate('Feedback')}>
                            意见反馈
                        </Text>
                    </View>


                    <Divider height={15}/>
                    <View style={[styles.flexDirectionRow, styles.containerView]}>
                        <Icon name="repeat" size={22} color={color.icon.test1}
                              style={[styles.Icon, styles.containerIcon]}/>
                        <Text style={styles.containerFont}>
                            下拉更新,{this.state.testRefresh}
                        </Text>
                    </View>
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
                headerTitle: '我',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
        SelfInfo: {
            screen: SelfInfoScreen,
            navigationOptions: {
                headerTitle: '个人信息',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
        MyZone: {
            screen: MyZoneScreen,
            navigationOptions: {
                headerTitle: '我的蜜境',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
        Feedback: {
            screen: FeedbackScreen,
            navigationOptions: {
                headerTitle: '意见反馈',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
    },
    {
        initialRouteName: 'Me',
    }
);