import * as actionTypes from './actionTypes';
import axios from 'axios';



//base url
export const baseUrl = "http://localhost:3001/";

// action for dishes
const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes
    }
}

// Another Use of same return function Using () , to create a another dispatch action
const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING,
})


// Using Thunk Middleware to pass a multiple dispatch funtion inside an dispatch action 
export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());
        axios.get(baseUrl + "Dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
    }
}


// action for comment

const loadComment = comments => {
    return {
        type: actionTypes.LOAD_COMMENT,
        payload: comments
    }
}
const commentLoading = () => {
    return {
        type: actionTypes.COMMENT_LOADING
    }
}

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentLoading());
        axios.get(baseUrl + "Comments")
            .then(response => response.data)
            .then(comments => dispatch(loadComment(comments)))
    }
}


const commentConcat = comment => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: comment
    }
}

export const addComment = (dishId, author, rating, comment) => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    //newComment.ref = 'new text';
    return dispatch => {
        axios.post(baseUrl + "Comments", newComment)
            .then(response => response.data)
            .then(comment => dispatch(commentConcat(comment)))
    }
}



//action for custom burger builder

export const addIngredient = ingredientType => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: ingredientType
    }
}
export const removeIngredient = ingredientType => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: ingredientType
    }
}
export const updatePurchasable = () => {
    return {
        type: actionTypes.PURCHASABLE
    }
}
export const resetIngredient = () => {
    return {
        type: actionTypes.RESET_INGREDIENT
    }
}