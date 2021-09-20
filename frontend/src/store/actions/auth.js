import AuthService from "../../services/authService"
import { LOGIN, REGISTER, LOGOUT, UPDATE_PROFILE } from '../types/index'

// export const login = (params, history) => dispatch => {
//     console.log(`Params:`, params)
//     history.push('/')
//     return dispatch({
//         type: LOGIN, 
//         payload: params
//     })
// }
export const login = (params, history) => async dispatch => {
    return await AuthService.login(params)
        .then(data => {
            console.log(`Data:`, data)
            dispatch({type: LOGIN, payload: data})
            history.push('/')
        })
        .catch(err => {
            console.log(`error`, err)
        })
        
}

export const register = (params, history) => async dispatch => {
    return await AuthService.register(params)
        .then(data => {
            console.log(`Data:`, data)
            dispatch({type: REGISTER, payload: data})
            history.push('/')
        })
        .catch(err => {
            console.log(`error`, err)
        })

}

export const logout = () => dispatch => {
    AuthService.logout()
    dispatch({ type: LOGOUT })
}

export const updateProfile = (params) => async dispatch => {
    return await AuthService.updateProfile(params)
        .then(data => {
            dispatch({ type: UPDATE_PROFILE, payload: data })
        })
        .catch(err => {
            throw err
        })
}