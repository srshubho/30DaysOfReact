import React from "react";

const ShoppingCart = props => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>Items: {props.items}</p>
    </div>
  );
};
// change code below this line

ShoppingCart.defaultProps = {
  items: 0
};

export default ShoppingCart;
