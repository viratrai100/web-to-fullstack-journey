import React, { useState } from "react";

import { useCounter } from "../provider/Counter";

interface MyButtonProps {
    // text: string;
    text: string | number | boolean; 
    onClick?: () => void;  //  ? -> make onclick optional
    something?: Boolean;
}

const MyButton: React.FC<MyButtonProps> = (props) => {

    const context = useCounter()

    return (
        <div>
            <h1 onClick={(e) => context?.setCount(context?.value + 1)} >{context?.value}</h1>
        </div>
    )
}

export default MyButton;