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

    const [value, setValue] = useState(0);  // Implicit Casting
    const [value2, setValue2] = useState<string>("a");  // Explicit Casting  -> prefer method
    // for object 
    const [value3, setValue3] = useState<Book>({
        name: "Java",
        price: 50,
    });  // Explicit Casting
    
    return (
        <div>
            <h3>{value}</h3>
            <h3>{value2}</h3>
            <h3>Name {value3.name} Rs. {value3.price}</h3>
            <button onClick={() => setValue(value + 1)}>{text}</button>     {/*Implicit Casting */}
            <button onClick={() => setValue2("b")}>{text}</button>          {/*Explicit Casting */}
            <button onClick={() => setValue3({name: "Javascript", price: 100})}>{text}</button>          {/*Explicit Casting */}
        </div>
    )
}

export default MyButton;