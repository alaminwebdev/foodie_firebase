import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logOut } from "../../../redux/authActionCreators";
import { adminLogout } from "../../../redux/adminActionCreators";

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut()),
        //adminLogout: () => dispatch(adminLogout()),
    };
};

const Logout = (props) => {
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        props.logOut();
        //props.adminLogout();
    });
    return (
        <div>
            <Redirect to="/login" />
        </div>
    );
};

export default connect(null, mapDispatchToProps)(Logout);
