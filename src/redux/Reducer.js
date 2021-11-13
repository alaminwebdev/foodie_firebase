import { combineReducers } from 'redux';
import * as actionTypes from "./actionTypes";
import { initialContactForm } from './allForm';
import { createForms } from 'react-redux-form';



const authInitialState = {
    token: null,
    userId: null,
    authLoading: false,
    authMessage: null
}

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
                authLoading: false
            }
        case actionTypes.AUTH_LOGOUT:
            //console.log(action.payload)
            return {
                ...authState,
                token: null,
                userId: null,
            }
        case actionTypes.AUTH_LOADING:
            //console.log(action.payload)
            return {
                ...authState,
                authLoading: true,

            }
        case actionTypes.AUTH_FAILED:
            //console.log(action.payload)
            return {
                ...authState,
                authLoading: false,
                authMessage: action.payload

            }
        default:
            return authState
    }

}


// reducer for deafult dish menu
const dishReducer = (dishState = { isLoading: false, dishes: [], cartItems: [] }, action) => {
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
        case actionTypes.ADD_TO_CART:
            let newCart = action.payload;

            //dishState.cartItems.concat(newCart)
            //localStorage.setItem("cartItems", JSON.stringify(dishState.cartItems))
            return {
                ...dishState,
                cartItems: dishState.cartItems.concat(newCart),
            }

        case actionTypes.ADD_TO_LOCALSTORAGE:
            localStorage.setItem("cartItems", JSON.stringify(dishState.cartItems))
            return {
                ...dishState,
            }

        case actionTypes.FETCH_CART:
            let cartItems = action.payload;
            if (cartItems == null) {
                return dishState
            } else {
                return {
                    ...dishState,
                    cartItems: cartItems
                }
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

const initialState = {
    ingredients: [
        { type: 'salad', amount: 0 },
        { type: 'cheese', amount: 0 },
        { type: 'meat', amount: 0 }
    ],
    ingredientPrice: {
        salad: 20,
        cheese: 40,
        meat: 90
    },

    totalPrice: 80,
    purchasAble: false,

    orders: [],
    orderLoading: true,
    orderError: false,
}


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
            //this will allow when at least one item are selected
            const sum = ingredients.reduce((sum, item) => {
                return sum + item.amount;
            }, 0)
            return {
                ...buildState,
                purchasAble: sum > 0

            }
        case actionTypes.RESET_INGREDIENT:
            return {
                ...buildState,
                ingredients: [
                    { type: 'salad', amount: 0 },
                    { type: 'cheese', amount: 0 },
                    { type: 'meat', amount: 0 }
                ],
                totalPrice: 80,
                purchasAble: false

            }
        case actionTypes.LOAD_ORDER:
            //console.log(action.payload)
            let orders = [];
            for (const orderKey in action.payload) {
                //console.log(action.payload[orderKey])
                orders.push({
                    ...action.payload[orderKey],
                    id: orderKey
                })
            }
            //console.log(orders)
            return {
                ...buildState,
                orders: orders,
                orderLoading: false
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
    authState: authReducer,
    ...createForms({
        formValue: initialContactForm
    })
})