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