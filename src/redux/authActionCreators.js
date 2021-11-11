import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authAction = (email, password, mode) => {
    //console.log(email, password)

    //set the url
    const signupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKKwgO3vNhb5mGnz2IujjaTGHBmapDVW8';

    const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKKwgO3vNhb5mGnz2IujjaTGHBmapDVW8';

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

    

    if (mode === 'signup') {
        axios.post(signupUrl, authData, config)
            .then(
                (userCredential) => {
                    //const user = userCredential.user;
                    //const email = userCredential.user.email;
                    const userInfo = userCredential._tokenResponse;
                    console.log(userCredential)
                    //console.log(userInfo)
                }
            )
            .catch((error) => {
                console.log(error)
                console.log(error.message)
            })


    } else if (mode === 'login') {

        axios.post(loginUrl, authData, config)
            .then(
                (userCredential) => {
                    //const user = userCredential.user;
                    //const email = userCredential.user.email;
                    const userInfo = userCredential._tokenResponse;
                    console.log(userCredential.data)
                    //console.log(userInfo)
                }
            )
            .catch((error) => {
                console.log(error)
                console.log(error.message)
            })

    }

}