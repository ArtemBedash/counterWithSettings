import {Button} from "./Button.tsx";
import {ProgressBar} from "./ProgressBar.tsx";


type MainScreenProps = {
    value: number;
    min: number
    max: number;
    error: string,

    changeCount: () => void;
    resetCount: () => void;
}

export const MainScreen = ({value, max, min, changeCount, resetCount,error}: MainScreenProps) => {


    return (
        <div className={"screen"}>
            <h1>Count: {value}</h1>
            <p>{error}</p>
            <ProgressBar count={value} max={max} min={min}/>
            <h2>Max: {max}</h2>

            <div>
                <Button classes={value === max || max < value ? "buttonBlocked" : "button"}
                        title={"increase"}
                        onClick={changeCount}
                        disabled={value === max || max < value}/>
                <Button classes={value === min ? "buttonBlocked" : "button"}
                        title={"reset"}
                        onClick={resetCount}
                        disabled={value === min}/>

            </div>

        </div>
    );
};

