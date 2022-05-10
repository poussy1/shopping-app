import { Component } from "react";

import "./Header.style.scss";
class Header extends Component {
  render = () => (
    <div className="header-container">
      <section>{this.props.leftComponents.map((el) => el)}</section>
      <section>{this.props.middleComponent}</section>
      <section>{this.props.rightComponents.map((el) => el)}</section>
    </div>
  );
}

export default Header;
