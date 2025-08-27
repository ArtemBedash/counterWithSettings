import type {RootState} from "./store.ts";
import type {InitialStateType} from "./counterReducer.ts";


export const selectValue = (state: RootState):InitialStateType => state.counter;
