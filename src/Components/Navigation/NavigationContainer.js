import React from "react";
import {connect} from "react-redux";
import Navigation from "./Navigation";


const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;