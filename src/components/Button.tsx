

type Props = {

    onClick?:() => void,
    classes?: string,
    disabled?: boolean,
    title?: string,


}

export const Button = ({ onClick,classes,disabled,title}: Props) => {
    return (

        <button className={classes} onClick={onClick} disabled={disabled}>{title}</button>
    );
};

