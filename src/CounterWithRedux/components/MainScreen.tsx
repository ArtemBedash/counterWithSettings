import {Button} from "./Button.tsx";
import {ProgressBar} from "./ProgressBar.tsx";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {changeCountAC, resetCountAC} from "../app/counterReducer.ts";
import type {Dispatch, SetStateAction} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {selectValue} from "../app/counterSelector.ts";


type MainScreenProps = {

    error: string,
    setError: Dispatch<SetStateAction<string>>,


}

export const MainScreen = ({error, setError}: MainScreenProps) => {


    const values = useAppSelector(selectValue)
    const dispatch = useAppDispatch()


    function changeCount() {
        setError('')
        if (values.value >= 0 && values.value < values.max) {

            const newValue = values.value + 1
            dispatch(changeCountAC({value: newValue}))
        }


    }

    function resetCount() {

        dispatch(resetCountAC())

    }

    return (
        <div className={"screen"}>
            <h1>Count: {values.value}</h1>
            <p>{error}</p>
            <ProgressBar/>
            <h2>Max: {values.valueMax}</h2>

            <div>
                <Button classes={values.value === values.max || values.max < values.value ? "buttonBlocked" : "button"}
                        title={"increase"}
                        onClick={changeCount}
                        disabled={values.value === values.max || values.max < values.value}/>
                <Button classes={values.value === values.min ? "buttonBlocked" : "button"}
                        title={"reset"}
                        onClick={resetCount}
                        disabled={values.value === values.min}/>

            </div>

        </div>
    );
};

