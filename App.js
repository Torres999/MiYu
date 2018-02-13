import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {Navigator} from './src/navigators';


export default class App extends Component<{}> {
    constructor(props) {
        super(props);//必须的，否则constructor报错
        StatusBar.setHidden(true);
    }

    componentDidMount() {
        SplashScreen.hide();
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <Navigator/>
        );
    }
}