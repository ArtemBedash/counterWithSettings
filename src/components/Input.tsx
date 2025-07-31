import type {ChangeEvent} from "react";

type InputProps = {

    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


export const Input = (props: InputProps) => {

    return (

        <input value={props.value} type={"number"} onChange={props.onChange} />
    );
};

