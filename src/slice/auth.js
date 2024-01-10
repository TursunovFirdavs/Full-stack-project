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
        signUserStart: state => {
            state.isLoading = true
        },
        signUserSuccess: (state, action) => {
            state.isLogin = true
            state.isLoading = false
            state.user = action.payload

        },
        signUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }


        // LOGIN
//         loginUserStart: state => {
//             state.isLoading = true
//         },
//         loginUserSuccess: state => {
//             state.isLogin = true
//             state.isLoading = false

//         },
//         loginUserFailure: state => {
//             state.isLoading = false
//             state.error = 'error'
//         },
//         // REGISTER
//         registerUserStart: state => {
//             state.isLoading = true
//         },
//         registerUserSuccess: state => {
//             state.isLogin = true
//             state.isLoading = false
//         },
//         registerUserFailure: state => {
//             state.isLoading = false
//             state.error = 'error'
//         },
    }
})

// export const { loginUserStart, loginUserFailure, loginUserSuccess, registerUserStart, registerUserFailure, registerUserSuccess } = authSlice.actions
export const { signUserStart, signUserSuccess, signUserFailure } = authSlice.actions
export default authSlice.reducer