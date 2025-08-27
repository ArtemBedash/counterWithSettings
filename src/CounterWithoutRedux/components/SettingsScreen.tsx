import {Input} from "./Input.tsx";
import {type ChangeEvent, type Dispatch, type SetStateAction} from "react";
import {Button} from "./Button.tsx";

type SettingsScreenProps = {

    min: number,
    max: number,
    error: string,
    changeCount: () => void,
    setValue: Dispatch<SetStateAction<number>>,
    setMinValue: Dispatch<SetStateAction<number>>,
    setMax: Dispatch<SetStateAction<number>>,
    setError: Dispatch<SetStateAction<string>>,
}


export const SettingsScreen = ({min, setMinValue, setValue, max, setMax, setError}: SettingsScreenProps) => {


    function onChangeHandlerMin(e: ChangeEvent<HTMLInputElement>) {
        const newValue = Number((e.target.value));
        setError('')
        if (newValue >= 0 && newValue < max) {

            setMinValue(newValue)
            // setValue(newValue)
            localStorage.setItem('min', newValue.toString())
        }

        if (newValue >= max) {

            setError("Min value must be lower than Max Value")

        }

    }

    function onChangeHandlerMax(e: ChangeEvent<HTMLInputElement>) {

        const newValue = Number((e.target.value))
        setError('')
        if (newValue > min) {

            setMax(newValue);
            localStorage.setItem('max', newValue.toString())
        }

        if (newValue <= min) {

            setError("Max value must be higher than Min value")

        }

    }

    function onClickHandlerValues(min:number) {
        setError('')

        const newValue = min
        console.log(newValue)
        setValue(newValue)


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



            <Button title={"Set"} classes={"button"} onClick={()=>onClickHandlerValues(min)}/>
        </div>
    );
};

