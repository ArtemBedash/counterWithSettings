import {useEffect, useState} from "react";
// import {getRandomInt} from "../utils/getRandom.ts";
import {MainScreen} from "./MainScreen.tsx";
import {SettingsScreen} from "./SettingsScreen.tsx";

export const Display = () => {

    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [value, setValue] = useState<number>(minValue);
    const [error, setError] = useState<string>("")

    function changeCount() {
        setError('')
        if (value >= 0 && value < maxValue) {

            setValue(value + 1)
        }


    }

    function resetCount() {

        setValue(minValue)
        // max.current = getRandomInt(1, 10)


    }

    useEffect(() => {

        const minStorage = Number(localStorage.getItem('min'))
        const maxStorage = Number(localStorage.getItem('max'))
        setMaxValue(maxStorage)
        setMinValue(minStorage)


    }, [])

    return (
        <div className="App">


            <SettingsScreen setValue={setValue}
                            min={minValue}
                            changeCount={changeCount}
                            setMinValue={setMinValue}
                            max={maxValue}
                            setMax={setMaxValue}
                            setError={setError}
                            error={error}
            />

            <MainScreen resetCount={resetCount}
                        changeCount={changeCount}
                        min={minValue}
                        value={value}
                        max={maxValue}
                        error={error}

            />


        </div>
    )
};

export default Display;