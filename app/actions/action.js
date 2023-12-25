import axios from 'axios';
import {Environment} from '../../environment';
import {SUCCESS,FAILED,LOADING,RESULT_CHECK_LOADING,RESULT_SUCCESS,RESULT_FAILED,QUIZ_FAILED,QUIZ_SUCCESS,QUIZ_LOADING,USER_SIGNIN_FAILED,USER_SIGNIN_LOADING,USER_SIGNIN_SUCCESS,
USER_DETAILS_FAILED,USER_DETAILS_LOADING,USER_DETAILS_SUCCESS,USER_HISTORY_FAILED,USER_HISTORY_LOADING,USER_HISTORY_SUCCESS,
USER_LEADERBOARD_FAILED,USER_LEADERBOARD_SUCCESS,USER_LEADERBOARD_LOADING,USER_ORDER_LOADING,USER_ORDER_SUCCESS,USER_ORDER_FAILED,SET_USER_SUCCESS,SET_USER_FAIL,SET_USER_LOADING,USER_PAYMENT_LOADING,USER_PAYMENT_SUCCESS,USER_PAYMENT_FAILED,GET_PRODUCTS_FAIL,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_LOADING} from './actionTypes';
// import signInWithGoogle from '../firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { urls } from '../utils/constants';
import { AxiosPromise } from 'axios';
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';
const base_url = urls.base_url

export const saveOrder = (orderDetails) =>{

    return async (dispatch) =>{
        try {
            dispatch({type:LOADING})
            console.log("QUESTION_id",ques_id)
            data={
                secret_key: 'any',
                user_id: 'kajhs'
            }
            const resp = await axios.get(`${base_url}${urls.order_service.save_order}`)
            console.log("resp in action>>",resp)
            if(resp.status ==200) {
                return dispatch({type:SUCCESS,payload:resp.data})
            }else {
                return dispatch({type:FAILED,payload:[]})
            }
        } catch (error) {
            console.log("resp in action>>",resp)
            return dispatch({type:FAILED,payload:[]})
        }
    }
}