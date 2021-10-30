import { Component } from "react";

import "./Header.style.scss";
class Header extends Component {
  render = () => (
    <div className="container">
      <div>{this.props.leftComponents.map((el) => el)}</div>
      <div>{this.props.middleComponent}</div>
      <div className="right-component">
        {this.props.rightComponents.map((el) => el)}
      </div>
    </div>
  );
}

export default Header;
