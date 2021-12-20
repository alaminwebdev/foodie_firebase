import * as actionTypes from "./actionTypes";
import axios from "axios";
import { defaultOrder, loadOrder } from "./actionCreators";

export const adminAction = (email, password) => {
    //dispatch(adminLogin(email, password))
    return {
        type: actionTypes.ADMIN_ACTION,
        payload: {
            email: email,
            password: password,
        },
    };
};
export const adminSuccess = (token) => {
    return {
        type: actionTypes.ADMIN_CHECK,
        payload: token,
    };
};
export const adminLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("email");
    return {
        type: actionTypes.ADMIN_LOGOUT,
    };
};

export const adminCheck = () => (dispatch) => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
        dispatch(adminLogout());
    } else {
        dispatch(adminSuccess(token));
    }
};

const itemConcat = (info) => {
    return {
        type: actionTypes.ADD_DISH,
        payload: info,
    };
};

export const addIntro = (name, label, description) => {
    const newItem = {
        name: name,
        label: label,
        description: description,
    };
    //newComment.ref = 'new text';
    return (dispatch) => {
        dispatch(itemConcat(newItem));
    };
};

const varientConcat = (varients) => {
    return {
        type: actionTypes.ADD_VARIENT,
        payload: varients,
    };
};

export const addVarient = (varients) => {
    //newComment.ref = 'new text';
    return (dispatch) => {
        dispatch(varientConcat(varients));
    };
};
const priceConcat = (price) => {
    return {
        type: actionTypes.ADD_PRICE,
        payload: price,
    };
};

export const addPrice = (price) => {
    //newComment.ref = 'new text';
    return (dispatch) => {
        dispatch(priceConcat(price));
    };
};
const imageConcat = (imageUrl) => {
    return {
        type: actionTypes.ADD_IMAGE,
        payload: imageUrl,
    };
};

export const addImage = (imageUrl) => {
    return (dispatch) => {
        dispatch(imageConcat(imageUrl));
    };
};

export const resetMenu = () => {
    return {
        type: actionTypes.RESET_MENU,
    };
};

export const fetchAllOrder = () => (dispatch) => {
    //fetch for custom burger

    // prettier-ignore
    axios.get(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/customorders.json`)
        .then((response) => {
            //console.log(response)
            dispatch(loadOrder(response.data));
        })
        .catch((error) => {
            console.log(error.message);
        });
    //fetch for default burger
    // prettier-ignore
    axios.get(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/orders.json`)
        .then((response) => {
            //console.log(response)
            dispatch(defaultOrder(response.data));
        })
        .catch((error) => {
            console.log(error.message);
        });
};
