import { Component } from "react";
import emptyCart from "../../assets/empty-cart.svg";
class CartIcon extends Component {
  render = () => (
    <img
      onClick={this.props.onClick}
      src={emptyCart}
      alt="cart"
      className={this.props.classes}
    />
  );
}

export default CartIcon;
