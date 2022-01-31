import axios from "../../axios/axios_data";
import {FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from "./actionType";

export function fetchUsers() {
    return async dispatch => {
        dispatch(fetchUsersStart())
        try {
            const response = await axios.get('users.json');
            const users = response.data;
            dispatch(fetchUsersSuccess(users))
        } catch (e) {
            console.log(e);
            dispatch(fetchUsersError(e))
        }
    }
}
export function searchUsers() {
    let searchItem = document.querySelector('.input').value;
    return async dispatch => {
        dispatch(fetchUsersStart())
        try {
            const response = await axios.get(`users/search?query=${searchItem}`);
            const users = response.data;
            dispatch(fetchUsersSuccess(users))
        } catch (e) {
            console.log(e);
            dispatch(fetchUsersError(e))
        }
    }
}

export function fetchUsersStart() {
    return{
        type: FETCH_USERS_START
    }
}

export function fetchUsersSuccess(users) {
    return{
        type: FETCH_USERS_SUCCESS,
        users
    }
}
export function fetchUsersError(e) {
    return{
        type: FETCH_USERS_ERROR,
        error:e
    }
}