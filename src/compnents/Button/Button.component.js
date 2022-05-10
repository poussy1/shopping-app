import { Component } from "react";
import "./Button.style.scss";
class Button extends Component {
  render = () => {
    console.log(this.props);
    return (
      <div className="button-container">
        <button
          disabled={this.props.disabled}
          className={`${this.props.type ? this.props.type : ""}`}
          onClick={() => (this.props.onClick ? this.props.onClick() : "")}
        >
          {this.props.icon && this.props.icon}
          <span>{this.props.text}</span>
        </button>
      </div>
    );
  };
}

export default Button;
