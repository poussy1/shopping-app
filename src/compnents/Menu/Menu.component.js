import { Component } from "react";
import "./Menu.style.scss";
class Menu extends Component {
  render = () => (
    <nav className="menu-container">
      <ul>
        {this.props.items?.length > 0 &&
          this.props.items.map((item) => (
            <li className={item === this.props.activeItem && "active"}>
              {item}
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Menu;
