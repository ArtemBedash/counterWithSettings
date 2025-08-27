import {createAction, createReducer} from "@reduxjs/toolkit";
import {storage} from "../helper/storage.ts";


export type InitialStateType = {
    value: number,
    valueMax: number,
    min: number,
    max: number,
}


const initialState: InitialStateType =

    storage.get<InitialStateType>('data', {
        value: 0,
        valueMax: 0,
        min: 0,
        max: 10,

    })

export const changeValueMaxScreen = createAction<{ valueMax: number }>('counter/changeValueMaxScreenAC');
export const changeCountAC = createAction<{ value: number }>('counter/changeCountAC');
export const resetCountAC = createAction('counter/resetCountAC');
export const changeMaxAC = createAction<{ maxValue: number }>('counter/resetMaxAC');
export const changeMinAC = createAction<{ minValue: number }>('counter/changeMinAC');
export const countReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeCountAC, (state, action) => {

            state.value = action.payload.value;

        }).addCase(resetCountAC, state => {

        state.value = state.min
    }).addCase(changeMaxAC, (state, action) => {

        state.max = action.payload.maxValue
    }).addCase(changeMinAC, (state, action) => {

        state.min = action.payload.minValue

    }).addCase(changeValueMaxScreen, (state, action) => {

        state.valueMax = action.payload.valueMax

    })

})