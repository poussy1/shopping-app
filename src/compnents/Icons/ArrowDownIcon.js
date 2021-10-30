import { Component } from "react";
import arrowDown from "../../assets/arrow-down.svg";
class CartIcon extends Component {
  render = () => (
    <img src={arrowDown} alt="cart" className={this.props.classes} />
  );
}

export default CartIcon;
