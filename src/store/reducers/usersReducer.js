import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
} from '../actions/actionType'


const initialState = {
    users:[],
    loading: true,
};


export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                loading: false
            };
        case FETCH_USERS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };

        default:
            return state
    }
}