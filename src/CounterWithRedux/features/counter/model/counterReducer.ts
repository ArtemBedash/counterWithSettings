import {createAction, createReducer} from "@reduxjs/toolkit";
import {storage} from "../../../common/helper/storage.ts";


export type InitialStateType = {
    count: number,
    countMin: number,
    countMax: number,
    min: number,
    max: number,
}


const initialState: InitialStateType =

    storage.get<InitialStateType>('data', {
        count: 0,
        countMin: 0,
        countMax: 10,
        min: 0,
        max: 10,

    })
export const changeCountMinAC = createAction<{ min: number }>('counter/changeCountMinAC');
export const changeValueMaxScreenAC = createAction<{ max: number }>('counter/changeValueMaxScreenAC');
export const changeCountAC = createAction<{ count: number }>('counter/changeCountAC');
export const resetCountAC = createAction('counter/resetCountAC');
export const changeMaxAC = createAction<{ max: number }>('counter/resetMaxAC');
export const changeMinAC = createAction<{ min: number }>('counter/changeMinAC');
export const countReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeCountAC, (state, action) => {

            state.count = action.payload.count;

        }).addCase(resetCountAC, state => {

        state.count = state.min
    }).addCase(changeMaxAC, (state, action) => {

        state.max = action.payload.max
    }).addCase(changeMinAC, (state, action) => {

        state.min = action.payload.min

    }).addCase(changeValueMaxScreenAC, (state, action) => {

        state.countMax = action.payload.max

    }).addCase(changeCountMinAC, (state, action) => {

        state.countMin = action.payload.min
    })

})