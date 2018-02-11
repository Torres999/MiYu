import { StyleSheet } from 'react-native';
import color from './color';
import size from './size';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 11,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    titleStyle: {
        fontSize: 11,
        marginBottom: 5,
        color: color.font.gray
    },
    selectedTitleStyle: {
        color: color.font.orange
    },
    tabNavigatorItemStyle: {
        backgroundColor: color.font.yellow,
    },


    flexCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexDirectionColumn: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    flexDirectionRow: {
        flexDirection: 'row'
    },

    headerWrap: {
        height: 152,
        width: size.window.width
    },

    avatar: {
        height: 64
    },
    lightText: {
        fontSize: size.font.ms,
        lineHeight: size.font.xs,
        color: '#888'
    },
    leftText: {
        color: color.font.title,
        fontSize: size.font.sm
    },

    // list
    list: {
        borderTopWidth: size.border.width,
        borderTopColor: color.border.gray,
        borderBottomWidth: size.border.width,
        borderBottomColor: color.border.gray,
        backgroundColor: color.background.white,
        marginBottom: 10
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 44,
        paddingHorizontal: 16,
        width: size.window.width
    },

    itemBottomBorder: {
        borderBottomWidth: size.border.width,
        borderBottomColor: color.border.gray
    },

    arrow: {
        width: 7,
        height: 13,
        tintColor: '#A4AAB3'
    },
    text: {
        fontSize: size.font.xs,
        color: color.font.title,
        lineHeight: 20
    }
});

module.exports = {
    color,
    size,
    styles
};
