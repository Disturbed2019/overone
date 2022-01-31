import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import botsReducer from "./botsReducer";


export default combineReducers({
    users: usersReducer,
    bots: botsReducer,

})