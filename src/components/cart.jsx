import React from "react";
const cart = {
  src: require("../assets/cart.png"),
  width: "60px",
  height: "60px",
};

export class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <img src={cart.src} alt="" height={cart.height} width={cart.width} />
        <div className="badge">3</div>
      </div>
    );
  }
}
