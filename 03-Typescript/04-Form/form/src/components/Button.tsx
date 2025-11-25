import React, { useState } from "react";

interface MyButtonProps {
    // text: string;
    text: string | number | boolean; 
    onClick?: () => void;  //  ? -> make onclick optional
    something?: Boolean;
}

// interface for Object
interface Book {
    // name: string;
    name: string | number;
    price: number;
}

const MyButton: React.FC<MyButtonProps> = (props) => {

    const {text, onClick} = props;

    const [value, setValue] = useState<string | undefined>();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={handleNameChange} type="text" placeholder="Enter Your Name" value={value}/>
            <h1>{value}</h1>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyButton;