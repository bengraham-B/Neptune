"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LOGIN_REDUX: (state) => {state.value = "Ben Graham"},
        LOGOUT_REDUX: (state) => {state.value = null}
    }
})

export const {LOGIN_REDUX, LOGOUT_REDUX} = authSlice.actions
export default authSlice.reducer