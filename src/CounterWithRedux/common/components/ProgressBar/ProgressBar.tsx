import {useAppSelector} from "../../hooks/useAppSelector.ts";


export const ProgressBar = () => {

    const {count, countMax, countMin} = useAppSelector(state => state.counter)

    return (
        <div style={{width: `100%`}}>
            {/*<div style={{backgroundColor: `blueviolet`,width:`${(count - min) / (max - min)*100}%`,height:`10px`}} ></div>*/}
            <div style={{
                backgroundColor: `blueviolet`,
                width: `${(count - countMin) / (countMax - countMin) * 100}%`,
                height: `10px`
            }}></div>

        </div>
    );
};

