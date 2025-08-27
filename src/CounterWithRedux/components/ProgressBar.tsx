import {useAppSelector} from "../hooks/useAppSelector.ts";


export const ProgressBar = () => {

    const value = useAppSelector(state => state.counter.value)
    const max = useAppSelector(state => state.counter.max)
    const min = useAppSelector(state => state.counter.min)
    return (
        <div style={{width: `100%`}}>
            {/*<div style={{backgroundColor: `blueviolet`,width:`${(count - min) / (max - min)*100}%`,height:`10px`}} ></div>*/}
            <div style={{
                backgroundColor: `blueviolet`,
                width: `${(value - min) / (max - min) * 100}%`,
                height: `10px`
            }}></div>

        </div>
    );
};

