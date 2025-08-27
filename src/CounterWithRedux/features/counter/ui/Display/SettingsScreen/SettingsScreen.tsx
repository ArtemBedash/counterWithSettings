import {Input} from "../../../../../common/components/Input/Input.tsx";
import {type ChangeEvent, type Dispatch, type SetStateAction} from "react";
import {Button} from "../../../../../common/components/Button/Button.tsx";
import {useAppSelector} from "../../../../../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch.ts";
import {
    changeCountAC,
    changeCountMinAC,
    changeMaxAC,
    changeMinAC,
    changeValueMaxScreenAC
} from "../../../model/counterReducer.ts";
import {selectValue} from "../../../model/counterSelector.ts";

type SettingsScreenProps = {

    setError: Dispatch<SetStateAction<string>>,
}


export const SettingsScreen = ({setError}: SettingsScreenProps) => {

    const {max, min} = useAppSelector(selectValue)
    const dispatch = useAppDispatch()

    function onChangeHandlerMin(e: ChangeEvent<HTMLInputElement>) {
        const newValue = Number((e.target.value));
        setError('')
        if (newValue >= 0 && newValue < max) {

            dispatch(changeMinAC({min: newValue}))

        }

        if (newValue >= max) {

            setError("Min value must be lower than Max Value")

        }

    }

    function onChangeHandlerMax(e: ChangeEvent<HTMLInputElement>) {

        const newValue = Number((e.target.value))
        setError('')
        if (newValue > min) {

            dispatch(changeMaxAC({max: newValue}))
        }

        if (newValue <= min) {

            setError("Max value must be higher than Min value")

        }

    }

    function onClickHandlerValues(min: number, max: number) {
        setError('')
        const newValueMin = min
        const newValueMax = max
        dispatch(changeCountAC({count: newValueMin}))
        dispatch(changeValueMaxScreenAC({max: newValueMax}))
        dispatch(changeCountMinAC({min: newValueMin}))


    }


    return (
        <div className={"settings-screen"}>


            <label className={"label"}>Set min value: {" "}
                <Input
                    value={min}
                    onChange={onChangeHandlerMin}

                />
            </label>
            <label className={"label"}>Set max value: {" "}

                <Input

                    value={max}
                    onChange={onChangeHandlerMax}


                />
            </label>


            <Button title={"Set"} classes={"button"} onClick={() => onClickHandlerValues(min, max)}/>
        </div>
    );
};

