// import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { size } from '../../theme';

// create a component
class Divider extends Component {

    render() {
        const {height = 2, width = size.window.width, color = '#f5f5f5', style = {}} = this.props;
        const sty = {height, width, backgroundColor: color};
        return (
            <View style={[style, styles.container, sty]}/>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'relative',
        flex: 1
    }
});

// make this component available to the app
export default Divider;
