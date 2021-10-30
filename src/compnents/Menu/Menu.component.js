import { Component } from "react";

import "./Menu.style.scss";
class Menu extends Component {
  renderItems() {
    if (!this.props.items) {
      return null;
    }
    return this.props.items.map((item) => (
      <li className={item === this.props.activeItem && "active"}>{item}</li>
    ));
  }
  render = () => (
    <nav className="container">
      <ul>{this.renderItems()}</ul>
    </nav>
  );
}

export default Menu;
