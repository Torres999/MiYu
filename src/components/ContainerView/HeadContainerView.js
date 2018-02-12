import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color, size, styles } from '../../theme';

export default class HeadContainerView extends React.Component {
    render() {
        const {
            onPress,
            headImg,
            name,
            sex
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
                <View style={[styles.flexDirectionRow, styles.containerHeadView, {
                    justifyContent: 'flex-start',
                    flex: 1
                }]}>
                    <Image style={[styles.avatar, {margin: 8}]} source={headImg}/>
                    <View>
                        <Text style={{
                            fontSize: size.font.sm,
                            textAlign: 'left',
                            marginBottom: 5,
                        }}>
                            {name}
                        </Text>
                        <Text style={{
                            fontSize: size.font.sm,
                            textAlign: 'left',
                            marginTop: 5,
                        }}>
                            性别：{sex}
                        </Text>
                    </View>
                </View>
                <View
                    style={[styles.flexDirectionRow, [styles.containerHeadView, {justifyContent: 'flex-end'}], styles.Icon]}>
                    <Icon name="chevron-right" size={22} color={color.icon.rightArrow}
                          style={{marginRight: 12, opacity: 0.3}}/>
                </View>
            </TouchableOpacity>
        )
    }
};