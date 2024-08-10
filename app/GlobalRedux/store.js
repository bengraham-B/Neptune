"use client";

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './Features/Counter/counterSlice';
import authReducer from './Auth/authASlice'
import inspectionReducer from './Inspection/inspectionSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        inspection: inspectionReducer
    }
});

export default store;
