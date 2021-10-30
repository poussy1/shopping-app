import { Component } from "react";
import arrowUp from "../../assets/arrow-up.svg";
class CartIcon extends Component {
  render = () => (
    <img src={arrowUp} alt="cart" className={this.props.classes} />
  );
}

export default CartIcon;
