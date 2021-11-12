import * as actionTypes from './actionTypes';
import axios from 'axios';


const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId
        }
        
    }
}

export const authLoading =()=>{
    return{
        type: actionTypes.AUTH_LOADING,
        //payload:isLoading
    }
}

export const authFailed = errorMessage =>{
    return{
        type: actionTypes.AUTH_FAILED,
        payload:errorMessage
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
    //call authLoading 
    dispatch(authLoading())
    axios.post(authUrl, authData, config)
        .then(
            (userCredential) => {
                //console.log(userCredential)
                if (userCredential.status === 200) {

                    //set token into localStorage 
                    localStorage.setItem('token', userCredential.data.idToken);
                    localStorage.setItem('userId', userCredential.data.localId);
                    const expirationTime = new Date( new Date().getTime() + userCredential.data.expiresIn * 1000) ;
                    localStorage.setItem('expirationTime', expirationTime);
                    //dispatch action
                    dispatch(authSuccess(userCredential.data.idToken, userCredential.data.localId))
                }
            }
        )
        .catch((error) => {
            //console.log(error.response)
            //console.log(error.response.data.error.message)
            dispatch(authFailed(error.response.data.error.message))
        })

}


export const logOut =()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationTime');
    return{
        type:actionTypes.AUTH_LOGOUT
    }

}

export const authCheck = () => dispatch =>{
    const token = localStorage.getItem('token')
    if (!token) {
       //logout
       dispatch(logOut())
    }else{
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            //logout 
            dispatch(logOut())
        }else{
            //login
            const userId = localStorage.getItem('userId')
            dispatch(authSuccess(token, userId));
        }
    }
}


