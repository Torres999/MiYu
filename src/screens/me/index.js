import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StatusBar,
    ScrollView,
    RefreshControl, ImageBackground, Image, TouchableOpacity
} from 'react-native';
import { color, size, styles } from '../../theme';
import { Divider,CommonContainerView } from '../../components';
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
            <View style={styles.container}>
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
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        onPress={() => this.props.navigation.navigate('SelfInfo')}
                    >
                        <View style={[styles.flexDirectionRow, styles.containerHeadView, {justifyContent: 'flex-start', flex: 1}]}>
                            <Image style={[styles.avatar, {margin: 8}]} source={imageSource.companyAvatar}/>
                            <View>
                                <Text style={{
                                    fontSize: size.font.xs,
                                    textAlign: 'left',
                                    marginBottom: 5,
                                }}>
                                    陪你度过漫长岁月
                                </Text>
                                <Text style={{
                                    fontSize: size.font.xs,
                                    textAlign: 'left',
                                    marginTop: 5,
                                }}>
                                    性别：男
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.flexDirectionRow, [styles.containerHeadView, {justifyContent: 'flex-end'}], styles.Icon]}>
                            <Icon name="chevron-right" size={22} color={color.icon.rightArrow}
                                  style={{marginRight: 12, opacity: 0.2}}/>
                        </View>
                    </TouchableOpacity>


                    <Divider height={15}/>
                    <CommonContainerView icon={{name:"opencart"}}
                                         text='收藏'
                                         onPress={() => this.props.navigation.navigate('MyZone')}/>


                    <Divider height={15}/>
                    <CommonContainerView icon={{name:"pagelines"}}
                                         text='我的蜜境'
                                         onPress={() => this.props.navigation.navigate('MyZone')}/>


                    <Divider height={1}/>
                    <CommonContainerView icon={{name:"cog"}}
                                         text='设置'
                                         onPress={() => {}}/>


                    <Divider height={15}/>
                    <CommonContainerView icon={{name:"pencil"}}
                                         text='意见反馈'
                                         onPress={() => this.props.navigation.navigate('Feedback')}/>


                    <Divider height={15}/>
                    <View style={[styles.flexDirectionRow, styles.containerView]}>
                        <Icon name="paperclip" size={22} color={color.icon.rightArrow}
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
                        <Icon name="repeat" size={22} color={color.icon.rightArrow}
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