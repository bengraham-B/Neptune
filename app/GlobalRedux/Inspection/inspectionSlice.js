"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: []
}

export const inspectionSlice = createSlice({
    name: "inspection",
    initialState,
    reducers: {
        setInspectionRecords: (state, action) => {
            // console.log("REDUX INSPECTION", action.payload)

            state.value = action.payload
            console.log("REDUX INSPECTION", state.value)

        }
    }
})

export const { setInspectionRecords } = inspectionSlice.actions
export default inspectionSlice.reducer;