import {useEffect, useState} from "react";
import {MainScreen} from "./MainScreen/MainScreen.tsx";
import {SettingsScreen} from "./SettingsScreen/SettingsScreen.tsx";
import {useAppSelector} from "../../../../common/hooks/useAppSelector.ts";
import {storage} from "../../../../common/helper/storage.ts";


export const Display = () => {


    const valueState = useAppSelector(state => state.counter);
    const [error, setError] = useState<string>("")


    useEffect(() => {
        storage.set("data", valueState)

    }, [valueState])

    return (
        <div className="App">


            <SettingsScreen

                setError={setError}
            />

            <MainScreen
                error={error}
                setError={setError}

            />


        </div>
    )
};

export default Display;