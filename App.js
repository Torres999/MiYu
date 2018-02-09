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
    // Text,
    View,
    StatusBar
} from 'react-native';
import * as Screens from './src/screens/';
import imageSource from './src/img';
import { color, size } from './src/theme';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from 'react-native-tab-navigator';

import Icon from 'react-native-vector-icons/FontAwesome';

// import 'react';
// import Svg, {
//     Circle,
//     Ellipse,
//     G,
//     LinearGradient,
//     RadialGradient,
//     Line,
//     Path,
//     Polygon,
//     Polyline,
//     Rect,
//     Symbol,
//     Text,
//     Use,
//     Defs,
//     Stop
// } from 'react-native-svg';
// class SvgExample extends Component {
//     render() {
//         return (
//             <Svg
//                 height="100"
//                 width="200"
//             >
//                 <Text
//                     x="100"
//                     y="75"
//                     stroke="#251000"
//                     fill="#600"
//                     textAnchor="middle"
//                 >密境</Text>
//             </Svg>
//         );
//     }
// }

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
        selectedTab: 'find'
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
                    renderIcon={() => <Image source={imageSource.find}/>}
                    renderSelectedIcon={() => <Image source={imageSource.find_selected}/>}
                    onPress={() => this.setState({selectedTab: 'find'})}>
                    <Screens.Find/>
                    {/*<SvgExample/>*/}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabNavigatorItemStyle}
                    selected={this.state.selectedTab === 'dialog'}
                    title="密话"
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.titleStyle}
                    renderIcon = {() => <Image source={imageSource.home} style={styles.Icon} />}
                    renderSelectedIcon={() => <Image source={imageSource.home_selected} style={styles.Icon}/>}
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
                    renderIcon={() => <Image source={imageSource.friend}/>}
                    renderSelectedIcon={() => <Image source={imageSource.friend_selected}/>}
                    onPress={() => this.setState({selectedTab: 'friend'})}>
                    <Screens.Friend/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabNavigatorItemStyle}
                    selected={this.state.selectedTab === 'me'}
                    title="我"
                    selectedTitleStyle={styles.selectedTitleStyle}
                    titleStyle={styles.titleStyle}
                    renderIcon = {() => <Icon name="user" size={22} color={color.font.gray} style={styles.Icon} />}
                    renderSelectedIcon={() => <Icon name="user" size={22} color={color.font.brown} />}// TODO 如果使用空心的user
                    //renderIcon={() => <Image source={imageSource.me}/>}
                    //renderSelectedIcon={() => <Image source={imageSource.me_selected}/>}
                    onPress={() => this.setState({selectedTab: 'me'})}>
                    <Screens.Me/>
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
        fontSize: size.font.min,
        marginBottom: 5,
        color: color.font.gray
    },
    selectedTitleStyle: {
        // color: '#44A1FD'
        color: color.font.orange
    },
    tabNavigatorItemStyle: {
        // backgroundColor: color.primary,
        backgroundColor: color.font.yellow,
    },
});
