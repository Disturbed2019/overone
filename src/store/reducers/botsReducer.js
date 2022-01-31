import {
    FETCH_BOTS_START,
    FETCH_BOTS_SUCCESS,
    FETCH_BOTS_ERROR
} from '../actions/actionType'


const initialState = {
    bots:[],
    loading: true,
};


export default function botsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BOTS_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_BOTS_SUCCESS:
            return {
                ...state,
                bots: action.bots,
                loading: false
            };
        case FETCH_BOTS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };

        default:
            return state
    }
}