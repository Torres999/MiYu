import React, { Component } from 'react';
import {
    Image,
    Platform,
    StatusBar
} from 'react-native';
import * as Screens from './src/screens/';
import imageSource from './src/img';
import { color, size, styles } from './src/theme';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from 'react-native-tab-navigator';

import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<{}> {
    constructor(props) {
        super(props);//必须的，否则constructor报错
        StatusBar.setHidden(true);
    }

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
        StatusBar.setHidden(true);
    }

    state = {
        selectedTab: 'me',
    };

    render() {
        return (
            <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    tabStyle={styles.tabNavigatorItemStyle}
                    selected={this.state.selectedTab === 'find'}
                    title="密境"
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.titleStyle}
                    renderIcon={() => <Icon name="user-secret" size={22} color={color.font.gray} style={styles.Icon}/>}
                    renderSelectedIcon={() => <Icon name="user-secret" size={22} color={color.font.brown}/>}
                    onPress={() => this.setState({selectedTab: 'find'})}>
                    <Screens.Find/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabNavigatorItemStyle}
                    selected={this.state.selectedTab === 'dialog'}
                    title="密话"
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.titleStyle}
                    renderIcon={() => <Icon name="comments" size={22} color={color.font.gray} style={styles.Icon}/>}
                    renderSelectedIcon={() => <Icon name="comments" size={22} color={color.font.brown}/>}
                    // badgeText="99" //TODO
                    onPress={() => this.setState({selectedTab: 'dialog'})}>
                    <Screens.Dialog/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabNavigatorItemStyle}
                    selected={this.state.selectedTab === 'friend'}
                    title="密友"
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.titleStyle}
                    renderIcon={() => <Icon name="users" size={22} color={color.font.gray} style={styles.Icon}/>}
                    renderSelectedIcon={() => <Icon name="users" size={22} color={color.font.brown}/>}
                    onPress={() => this.setState({selectedTab: 'friend'})}>
                    <Screens.Friend/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabNavigatorItemStyle}
                    selected={this.state.selectedTab === 'me'}
                    title="我"
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.titleStyle}
                    renderIcon={() => <Icon name="user" size={22} color={color.font.gray} style={styles.Icon}/>}
                    renderSelectedIcon={() => <Icon name="user" size={22} color={color.font.brown}/>} // TODO 如果使用空心的user
                    //renderIcon={() => <Image source={imageSource.me}/>}
                    //renderSelectedIcon={() => <Image source={imageSource.me_selected}/>}
                    onPress={() => this.setState({selectedTab: 'me'})}>
                    <Screens.Me/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}