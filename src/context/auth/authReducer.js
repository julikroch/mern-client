import {
    USER_SUCCESS,
    USER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
} from "../../types"

export default (state, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                authenticated: true,
                message: null
            }

        case USER_ERROR:
            return {
                ...state,
                token: null,
                message: action.payload
            }
        default:
            return state
    }
}