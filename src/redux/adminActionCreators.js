import * as actionTypes from './actionTypes';
import axios from 'axios';

const itemConcat = info => {
    return {
        type: actionTypes.ADD_DISH,
        payload: info
    }
}

export const addIntro = (name, label, description) => {
    const newItem = {
        name: name,
        label: label,
        description: description,
    }
    //newComment.ref = 'new text';
    return dispatch => {
        dispatch(itemConcat(newItem))
    }
}

const varientConcat = varients => {
    return {
        type: actionTypes.ADD_VARIENT,
        payload: varients
    }
}

export const addVarient = (varients) => {
    //newComment.ref = 'new text';
    return dispatch => {
        dispatch(varientConcat(varients))
    }
}
const priceConcat = price => {
    return {
        type: actionTypes.ADD_PRICE,
        payload: price
    }
}

export const addPrice = (price) => {
    //newComment.ref = 'new text';
    return dispatch => {
        dispatch(priceConcat(price))
    }
}
const imageConcat = imageUrl => {
    return {
        type: actionTypes.ADD_IMAGE,
        payload: imageUrl
    }
}

export const addImage = imageUrl => {
    return dispatch => {
        dispatch(imageConcat(imageUrl))
    }
}