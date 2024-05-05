import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CounterStateType, StateDataType, counterState } from './counterState'
import { fetchCounter } from "./operations";

const counterSlice = createSlice({
    name: 'counter',
    initialState:  counterState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCounter.pending, (state: CounterStateType) => {
            state.isLoading = true
            console.log('pending')
        })
        .addCase(fetchCounter.fulfilled, (state: CounterStateType, action: PayloadAction<StateDataType>) => {
            state.data = action.payload; 
            state.isLoading = false
            state.error = false
           
           // console.log(action.payload)
        })
        .addCase(fetchCounter.rejected, (state: CounterStateType, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload
            console.log(action.payload, 'error')
        })
}})

export default counterSlice.reducer;