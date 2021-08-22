import './buttonStyles.css'
export interface ButtonProps {
    title: string;
    clickHandler?: () => void;
}

const Button = (props:ButtonProps) => {

    return (
        <>
            <button className="custom-button red" onClick={props.clickHandler}>
                {props.title}
            </button>
        </>
    );
}

export default Button;