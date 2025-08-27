import {Input} from "./Input.tsx";
import {type ChangeEvent, type Dispatch, type SetStateAction} from "react";
import {Button} from "./Button.tsx";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {changeCountAC, changeMaxAC, changeMinAC, changeValueMaxScreen} from "../app/counterReducer.ts";
import {selectValue} from "../app/counterSelector.ts";

type SettingsScreenProps = {

    setError: Dispatch<SetStateAction<string>>,
}


export const SettingsScreen = ({setError}: SettingsScreenProps) => {

    const values = useAppSelector(selectValue)
    const dispatch = useAppDispatch()

    function onChangeHandlerMin(e: ChangeEvent<HTMLInputElement>) {
        const newValue = Number((e.target.value));
        setError('')
        if (newValue >= 0 && newValue < values.max) {

            dispatch(changeMinAC({minValue: newValue}))

        }

        if (newValue >= values.max) {

            setError("Min value must be lower than Max Value")

        }

    }

    function onChangeHandlerMax(e: ChangeEvent<HTMLInputElement>) {

        const newValue = Number((e.target.value))
        setError('')
        if (newValue > values.min) {

            dispatch(changeMaxAC({maxValue: newValue}))
            localStorage.setItem('max', newValue.toString())
        }

        if (newValue <= values.min) {

            setError("Max value must be higher than Min value")

        }

    }

    function onClickHandlerValues(min: number, max: number) {
        setError('')
        const newValueMin = min
        const newValueMax = max
        console.log(newValueMin)
        dispatch(changeCountAC({value: newValueMin}))
        dispatch(changeValueMaxScreen({valueMax: newValueMax}))


    }


    return (
        <div className={"settings-screen"}>


            <label className={"label"}>Set min value: {" "}
                <Input
                    value={values.min}
                    onChange={onChangeHandlerMin}

                />
            </label>
            <label className={"label"}>Set max value: {" "}

                <Input

                    value={values.max}
                    onChange={onChangeHandlerMax}


                />
            </label>


            <Button title={"Set"} classes={"button"} onClick={() => onClickHandlerValues(values.min, values.max)}/>
        </div>
    );
};

