import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId
        }
        
    }
}


export const authAction = (email, password, mode) => dispatch => {
    //set the url
    let authUrl = null;
    if (mode === 'signup') {
        authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKKwgO3vNhb5mGnz2IujjaTGHBmapDVW8';
    } else if (mode === 'login') {
        authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKKwgO3vNhb5mGnz2IujjaTGHBmapDVW8';
    }
    // set the headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }
    axios.post(authUrl, authData, config)
        .then(
            (userCredential) => {
                //console.log(userCredential)
                if (userCredential.status === 200) {
                    dispatch(authSuccess(userCredential.data.idToken, userCredential.data.localId))
                }
            }
        )
        .catch((error) => {
            console.log(error)
            console.log(error.message)
        })

}
