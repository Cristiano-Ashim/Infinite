import Button from './../button/Button';
import './formStyles.css';
import {useState} from 'react';

export interface FormProps {
    isLoggedIn: boolean;
    formHandler: () => void;
}

const Form = (props: FormProps) => {
    const [username, setUsername] = useState("");
    const buttonHandler = () => {
        if(props.isLoggedIn) {
            props.formHandler();
        } else {
            if (username.length != 0) {
                props.formHandler();
            } else {
                alert("Enter Username!");
            }
        }
    }
    const renderForm = () => {
        return (
            <>
                <input type="text" className="input" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className="input" />
                <Button title="Login" clickHandler={buttonHandler} />
            </>
        )
    }
    return (
        <div className="formContainer">
            {
                props.isLoggedIn ?
                    <Button title="Logout" clickHandler={props.formHandler}  />
                    :
                    renderForm()
            }
        </div>
    );
}

export default Form;