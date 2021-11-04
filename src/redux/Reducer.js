import { combineReducers } from 'redux';
import * as actionTypes from "./actionTypes";
import { initialContactForm } from './allForm';
import { createForms } from 'react-redux-form';
import { initialState } from './buildReducer';

// reducer for deafult dish menu
const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishState
    }

}
const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    //console.log(action);
    switch (action.type) {
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        case actionTypes.LOAD_COMMENT:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }
        case actionTypes.ADD_COMMENT:
            //new comment received in payload 
            let comment = action.payload
            //comment.id = commentState.length;
            //console.log(comment);
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }
        default:
            return commentState
    }
}

// reducer for custom burger builder
//console.log(ingredientPrice ,initialState)

const burgerbuildReducer = (buildState = initialState, action) => {
    const ingredients = [...buildState.ingredients]
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    item.amount++;
                }
            }
            return {
                ...buildState,
                ingredients: ingredients,
                totalPrice: buildState.totalPrice + buildState.ingredientPrice[action.payload]
            }
        case actionTypes.REMOVE_INGREDIENT:
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) {
                        return buildState;
                    } else {
                        item.amount--;
                    }
                }
            }
            return {
                ...buildState,
                ingredients: ingredients,
                totalPrice: buildState.totalPrice - buildState.ingredientPrice[action.payload]
            }
        case actionTypes.PURCHASABLE:
            //this will allow when all item are selected
            // for (const item of ingredients) {
            //     if (item.amount == 0) {
            //         this.setState({
            //             purchasable: false
            //         })
            //     } else {
            //         this.setState({
            //             purchasable: true
            //         })
            //     }
            // }
            //this will allow when at least one item are selected
            const sum = ingredients.reduce((sum, item) => {
                return sum + item.amount;
            }, 0)
            return {
                ...buildState,
                purchasAble: sum > 0

            }
        default:
            return buildState
    }

}



// main reducer 
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    customBurger: burgerbuildReducer,
    ...createForms({
        formValue: initialContactForm
    })
})