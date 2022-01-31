import axios from "../../axios/axios_data";
import {FETCH_BOTS_START, FETCH_BOTS_SUCCESS, FETCH_BOTS_ERROR} from "./actionType";

export function fetchBots() {
    return async dispatch => {
        dispatch(fetchBotsStart());
        try {
            const response = await axios.get('bots.json');
            const bots = response.data;
            dispatch(fetchBotsSuccess(bots))
        } catch (e) {
            console.log(e);
            dispatch(fetchBotsError(e))
        }
    }
}
export function searchBots() {
    let searchItem = document.querySelector('.input').value;
    return async dispatch => {
        dispatch(fetchBotsStart())
        try {
            const response = await axios.get(`users/search?query=${searchItem}`);
            const bots = response.data;
            dispatch(fetchBotsSuccess(bots))
        } catch (e) {
            console.log(e);
            dispatch(fetchBotsError(e))
        }
    }
}

export function fetchBotsStart() {
    return{
        type: FETCH_BOTS_START
    }
}

export function fetchBotsSuccess(bots) {
    return{
        type: FETCH_BOTS_SUCCESS,
        bots
    }
}
export function fetchBotsError(e) {
    return{
        type: FETCH_BOTS_ERROR,
        error:e
    }
}