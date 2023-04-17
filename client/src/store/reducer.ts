import { combineReducers } from "redux";
import { userReducer } from "./userReducer/reducer";

// 合并reducers
const rootReducer = combineReducers({
    user: userReducer,
    // app: appReducer,
    // router: connectRouter(history),
});

export default rootReducer;