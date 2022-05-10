import { Component } from "react";
import minus from "../../assets/minus.svg";
class MinusIcon extends Component {
  render = () => <img src={minus} alt="minus" className={this.props.classes} />;
}

export default MinusIcon;
