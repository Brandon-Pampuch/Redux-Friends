import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

export const LOGIN_START = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export const loginUser = (creds) => (dispatch) =>{

    dispatch({type: LOGIN_START})
    return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
     
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err));
};

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getData = () => (dispatch) =>{
    dispatch({type:GET_DATA_START})
    return axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
       
        dispatch({type: GET_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => console.log(err))
}

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const addFriend = (newFriend) => (dispatch) =>{
   
    console.log("new_friend",newFriend)
    dispatch({type: ADD_FRIEND_START})
    axiosWithAuth()
    .post('http://localhost:5000/api/friends', newFriend)
    .then(res => {
        console.log("response data from action", res)
        dispatch({type: ADD_FRIEND_SUCCESS, payload: res.data})
   
    })
    .catch(err => console.log(err))
}


