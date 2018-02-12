import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color, styles } from '../../theme';

export default class CommonContainerView extends React.Component {
    render() {
        const {
            onPress,
            icon,
            text
        } = this.props;
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
                onPress={onPress}
            >
                <View style={[styles.flexDirectionRow, styles.containerView, {justifyContent: 'flex-start', flex: 1}]}>
                    <Icon name={icon.name} size={22} color={color.icon.rightArrow}
                          style={[styles.Icon, styles.containerIcon]}/>
                    <Text style={styles.containerFont}>
                        {text}
                    </Text>
                </View>
                <View
                    style={[styles.flexDirectionRow, [styles.containerView, {justifyContent: 'flex-end'}], styles.Icon]}>
                    <Icon name={'chevron-right'} size={22} color={color.icon.rightArrow}
                          style={{marginRight: 12, opacity: 0.2}}/>
                </View>
            </TouchableOpacity>
        )
    }
};