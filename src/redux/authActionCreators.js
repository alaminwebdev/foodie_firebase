import * as actionTypes from './actionTypes';
import axios from 'axios';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebaseConfig';

export const authAction = (email, password, mode) => {
    //console.log(email, password)

}