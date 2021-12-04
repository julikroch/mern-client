import { useReducer } from "react"
import authReducer from "./authReducer"
import authContext from "./authContext"
import axiosClient from '../../config/axios'
import {
    USER_SUCCESS,
    USER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
} from "../../types"

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const userRegister = async (data) => {
        try {
            const response = await axiosClient.post('/api/users', data)
            dispatch({
                type: USER_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            const alert = {
                msg: error.response.data.msg
            }
            dispatch({
                type: USER_ERROR,
                payload: alert
            })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                userRegister: state.userRegister
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState