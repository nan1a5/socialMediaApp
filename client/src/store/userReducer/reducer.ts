import { UserAction, UserActionTypes, UserState } from "./actions";

// user reducer
const initialState: UserState = {
    isLogin: false,
    user_id: '',
    username: '',
    email: '',
    password: '',
    avatar: '',
    bio: ''
};

export const userReducer = (state:UserState = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                isLogin: true,
                user_id: action.payload?.user_id,
                username: action.payload?.username,
                email: action.payload?.email,
                password: action.payload?.password,
                avatar: action.payload?.avatar,
                bio: action.payload?.bio
            };
        case UserActionTypes.LOGOUT:
            return {
                ...initialState,
                isLogin: false,
            };
        default:
            return state;
    }
}