import { combineReducers } from 'redux';
import * as actionTypes from "./actionTypes";
import {initialContactForm } from './allForm';
import { createForms } from 'react-redux-form';



const dishReducer = (dishState = { isLoading:false, dishes:[] }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return{
                ...dishState,
                isLoading:true,
                dishes:[]
            }
        case actionTypes.LOAD_DISHES:
            return{
                ...dishState,
                isLoading:false,
                dishes:action.payload
            }
        default:
            return dishState
    }
    
}
const commentReducer = (commentState = { isLoading:true, comments:[]} , action) => {
    //console.log(action);
    switch (action.type) {
        case actionTypes.COMMENT_LOADING:
            return{
                ...commentState,
                isLoading:true,
                comments:[]
            }
        case actionTypes.LOAD_COMMENT:
            return{
                ...commentState,
                isLoading:false,
                comments:action.payload
            }
        case actionTypes.ADD_COMMENT:
            //new comment received in payload 
            let comment = action.payload
            //comment.id = commentState.length;
            //console.log(comment);
            return{
                ...commentState,
                comments : commentState.comments.concat(comment)
            }
        default:
            return commentState
    }
}

// reducer 
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        formValue : initialContactForm
    })
})