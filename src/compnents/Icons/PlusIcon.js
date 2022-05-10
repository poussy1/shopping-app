import { Component } from "react";
import plus from "../../assets/plus.svg";
class PlusIcon extends Component {
  render = () => <img src={plus} alt="plus" className={this.props.classes} />;
}

export default PlusIcon;
