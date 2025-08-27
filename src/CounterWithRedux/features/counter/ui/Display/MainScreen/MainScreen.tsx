import {Button} from "../../../../../common/components/Button/Button.tsx";
import {ProgressBar} from "../../../../../common/components/ProgressBar/ProgressBar.tsx";
import {useAppSelector} from "../../../../../common/hooks/useAppSelector.ts";
import {changeCountAC, resetCountAC} from "../../../model/counterReducer.ts";
import type {Dispatch, SetStateAction} from "react";
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch.ts";
import {selectValue} from "../../../model/counterSelector.ts";


type MainScreenProps = {

    error: string,
    setError: Dispatch<SetStateAction<string>>,


}

export const MainScreen = ({error, setError}: MainScreenProps) => {


    const {count,countMax,max,min} = useAppSelector(selectValue)
    const dispatch = useAppDispatch()


    function changeCount() {
        setError('')
        if (count >= 0 && count < countMax) {

            const newValue = count + 1
            dispatch(changeCountAC({count: newValue}))
        }


    }

    function resetCount() {

        dispatch(resetCountAC())

    }

    return (
        <div className={"screen"}>
            <h1>Count: {count}</h1>
            <p>{error}</p>
            <ProgressBar/>
            <h2>Max: {countMax}</h2>

            <div>
                <Button classes={count === max || max < count ? "buttonBlocked" : "button"}
                        title={"increase"}
                        onClick={changeCount}
                        disabled={count === max || max < count}/>
                <Button classes={count === min ? "buttonBlocked" : "button"}
                        title={"reset"}
                        onClick={resetCount}
                        disabled={count === min}/>

            </div>

        </div>
    );
};

