import React from "react";

interface MyButtonProps {
    // text: string;
    text: string | number | boolean; 
    onClick?: () => void;  //  ? -> make onclick optional
    something?: Boolean;
}

// FC  -> Functional Component

// const MyButton = (props: {text: string}) => {
const MyButton: React.FC<MyButtonProps> = (props) => {

    const {text, onClick} = props
    return <button onClick={onClick}>{text}</button>
    // return <button onClick={props.onClick}>{props.text}</button>
}

export default MyButton;