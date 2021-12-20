import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";
import { adminReducer } from "./adminReducer";
import { burgerbuildReducer } from "./customBurgerReducer";
import { dishReducer } from "./defaultBurgerReducer";
import { cartReducer } from "./defaultBurgerReducer";
import { commentReducer } from "./defaultBurgerReducer";

const authInitialState = {
    token: null,
    userId: null,
    authLoading: false,
    authMessage: null,
};

// reducer for authentication
const authReducer = (authState = authInitialState, action) => {
    switch (action.type) {
        //auth case
        case actionTypes.AUTH_SUCCESS:
            //console.log(action.payload)
            return {
                ...authState,
                token: action.payload.token,
                userId: action.payload.userId,
                authLoading: false,
            };
        case actionTypes.AUTH_LOGOUT:
            //console.log(action.payload)
            return {
                ...authState,
                token: null,
                userId: null,
            };
        case actionTypes.AUTH_LOADING:
            //console.log(action.payload)
            return {
                ...authState,
                authLoading: true,
            };
        case actionTypes.AUTH_FAILED:
            //console.log(action.payload)
            return {
                ...authState,
                authLoading: false,
                authMessage: action.payload,
            };
        default:
            return authState;
    }
};

//reudcer for admin manage order functionality

// main reducer
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    cartState: cartReducer,
    customBurger: burgerbuildReducer,
    authState: authReducer,
    adminState: adminReducer,
});
