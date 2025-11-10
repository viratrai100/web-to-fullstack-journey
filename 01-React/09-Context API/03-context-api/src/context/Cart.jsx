import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

// best practice
export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
};

export const CartProvider = (props) => {

    const [items, setItems] = useState([]);
    return (
        <CartContext.Provider value={ {items, setItems}}>
            {/* {props.childern} */}
            {props.children}
        </CartContext.Provider>
    )
}