/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import imageSource from './src/img';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from 'react-native-tab-navigator';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!--dalin
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        )
    }
}

class Friend extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Profile
                </Text>
            </View>
        )
    }
}

export default class App extends Component<{}> {
    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

    state = {
        selectedTab: 'home'
    };

    render() {
        return (
            <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="对话"
                    selectedTitleStyle={styles.selectedTitleStyle}
                    renderIcon={() => <Image source={imageSource.home}/>}
                    renderSelectedIcon={() => <Image source={imageSource.home_selected}/>}
                    // badgeText="99" //TODO
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'friend'}
                    title="密友"
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.titleStyle}
                    renderIcon={() => <Image source={imageSource.friend}/>}
                    renderSelectedIcon={() => <Image source={imageSource.friend_selected}/>}
                    onPress={() => this.setState({selectedTab: 'friend'})}>
                    <Friend/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'find'}
                    title="发现"
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.titleStyle}
                    renderIcon={() => <Image source={imageSource.find}/>}
                    renderSelectedIcon={() => <Image source={imageSource.find_selected}/>}
                    onPress={() => this.setState({selectedTab: 'find'})}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'me'}
                    title="我"
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.titleStyle}
                    renderIcon={() => <Image source={imageSource.me}/>}
                    renderSelectedIcon={() => <Image source={imageSource.me_selected}/>}
                    onPress={() => this.setState({selectedTab: 'me'})}>
                    <Friend/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

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
    titleStyle: {
        fontSize: 10,
        marginBottom: 5,
    },
    selectedTitleStyle: {
        color: '#44A1FD'
    },
});
