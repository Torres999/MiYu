// import SelfTabNavigator from './SelfTabNavigator';
import MyZoneScreen from '../screens/me/MyZone';
import FeedbackScreen from "../screens/me/Feedback";
import SelfInfoScreen from "../screens/me/SelfInfo";
import MeScreen from "../screens/me";


import { StackNavigator } from "react-navigation";
import { color, size, styles } from '../theme';
import * as React from "react";
import { AppTabNavigator } from './AppTabNavigator'

const Navigator = StackNavigator(
    {
        Tab: {screen: AppTabNavigator},
        Product:{screen: MeScreen}
    },
    {
        me_Me: {
            screen: MeScreen,
            navigationOptions: {
                headerTitle: '我',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
        me_SelfInfo: {
            screen: SelfInfoScreen,
            navigationOptions: {
                headerTitle: '个人信息',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
        me_MyZone: {
            screen: MyZoneScreen,
            navigationOptions: {
                headerTitle: '我的蜜境',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerBackTitleStyle: styles.headerBackTitleStyle,
            }
        },
        me_Feedback: {
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
        initialRouteName: 'me_Me',
    }
);

module.exports = {
    // SelfTabNavigator,
    Navigator
}

