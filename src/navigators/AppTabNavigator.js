import React, { Component } from 'react';
import * as Screens from '../screens';
import { color, size, styles } from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabNavigator } from "react-navigation";

export const AppTabNavigator = TabNavigator(
    {
        Find: {
            screen: Screens.Find,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '密境',
                tabBarIcon: <Icon name="user-secret" size={22} color={color.font.gray} style={styles.Icon}/>,
            }),
        },

        Dialog: {
            screen: Screens.Dialog,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '密话',
                tabBarIcon: <Icon name="comments" size={22} color={color.font.gray} style={styles.Icon}/>
            }),
        },

        Friend: {
            screen: Screens.Friend,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '密友',
                tabBarIcon: <Icon name="users" size={22} color={color.font.gray} style={styles.Icon}/>
            }),
        },

        Me: {
            screen: Screens.Me,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我',
                tabBarIcon: <Icon name="user" size={22} color={color.font.gray} style={styles.Icon}/>
            }),
        },
    },
    {
        tabBarPosition: 'bottom',
        initialRouteName: 'Me',
        // swipeEnabled: false,
        // animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#241000',
            inactiveTintColor: color.font.gray,
            style: {
                backgroundColor: '#ffffff',
                height: 55,
            },
            labelStyle: {
                fontSize: 11, // 文字大小
                paddingVertical: 2,
                marginTop: -1
            },
            iconStyle: {
                marginTop: -3
            },
            tabStyle: {
                backgroundColor: color.primary,
            },
        }

    }
);
