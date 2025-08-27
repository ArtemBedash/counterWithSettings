import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {countReducer} from "./counterReducer.ts";


const rootReducer = combineReducers({

    counter: countReducer


})


export const store = configureStore({

    reducer: rootReducer

})


// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch