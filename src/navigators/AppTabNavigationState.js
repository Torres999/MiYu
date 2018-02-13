import { View } from "react-native";
import { addNavigationHelpers } from "react-navigation";
import * as React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AppWithNavigationState extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <AppNavigator navigation={
                    addNavigationHelpers({
                        dispatch: this.props.navigator,
                        state: this.props.nav
                    })
                }/>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav
    }
};

function macthDispatchToProps(dispatch) {
    return bindActionCreators({
        navigator: navigator,
        initHotshowAction: initHotshow,
        fetchLoading: fetchLoading
    }, dispatch);
}

let style = StyleSheet.create({
    footImage: {
        width: 25,
        height: 25
    },
});


export default connect(mapStateToProps, macthDispatchToProps)(AppWithNavigationState);