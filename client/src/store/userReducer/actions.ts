import { UserModel } from "../../data/types";

// actionTYpes for user reducer
export enum UserActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}

// action for user reducer
export interface UserAction {
    type: UserActionTypes;
    payload?: UserModel;
}

// state for user reducer
export interface UserState extends UserModel {
    isLogin: boolean;
}

// action creators for user reducer
export const login = (payload: UserModel): UserAction => ({
    type: UserActionTypes.LOGIN,
    payload
});

export const logout = (): UserAction => ({
    type: UserActionTypes.LOGOUT
});