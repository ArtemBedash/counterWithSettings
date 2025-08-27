
type ProgressBarProps = {
    count: number;
    max: number;
    min:number
}


export const ProgressBar = ({count,max}:ProgressBarProps) => {
    return (
        <div style={{ width: `100%` }}>
            {/*<div style={{backgroundColor: `blueviolet`,width:`${(count - min) / (max - min)*100}%`,height:`10px`}} ></div>*/}
            <div style={{backgroundColor: `blueviolet`,width:`${(count/max)*100}%`,height:`10px`}} ></div>

        </div>
    );
};

