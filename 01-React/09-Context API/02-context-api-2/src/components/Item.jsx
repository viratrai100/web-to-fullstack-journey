// import React, { useContext } from "react";
import React from "react";
// import { CartContext } from "../context/Cart";
import { useCart } from "../context/Cart";

const Item = (props) => {
//   const cart = useContext(CartContext);
  const cart = useCart();

  console.log("Cart", cart);

  return (
    <div className="item-card">
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
