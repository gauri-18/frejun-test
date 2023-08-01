import { combineReducers } from "redux";
import SignInReducer from "./reducers/SignInReducer";
import PostReducer from "./reducers/PostReducer";

const rootReducer = combineReducers({
    signIn: SignInReducer,
    post: PostReducer
});

export default rootReducer;