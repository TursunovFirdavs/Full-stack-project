import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isLogin: false,
    user: null,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // LOGIN
        loginUserStart: state => {state.isLoading = true},
        loginUserSuccess: state => {},
        loginUserFailure: state => {},
        // REGISTER
        registerUserStart: state => {
            state.isLoading = true
        },
        registerUserSuccess: state => {
            state.isLogin = true
            state.isLoading = false
        },
        registerUserFailure: state => {
            state.isLoading = false
            state.error = 'error'
        },
    }
})

export const { loginUserStart, registerUserStart, registerUserFailure, registerUserSuccess } = authSlice.actions
export default authSlice.reducer