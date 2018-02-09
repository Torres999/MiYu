import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { sendGet } from '../../utils/RequestUtils'

const msg = sendGet({
    url: "/",
    param: "{}",
    success: aa
})

function aa(str) {
    this.state.titleText = str.name;
}

export default class Me extends Component {
    constructor(props) {
        super(props);//必须的，否则constructor报错
        this.state = {
            testText: '默认头像'
        }
    }

    render() {
        return (
            <View style={styles.container}>
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
            </View>
        )
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
});
