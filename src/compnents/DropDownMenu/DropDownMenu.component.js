import { Component } from "react";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import ArrowUpIcon from "../Icons/ArrowUpIcon";
import "./DropDownMenu.style.scss";
class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }
  renderItems() {
    if (!this.props.items) {
      return null;
    }
    return this.props.items.map((item) => (
      <p class="dropdown-item" href="#">
        {item}
      </p>
    ));
  }
  render = () => (
    <div className="dropdown">
      <button onClick={this.handleClick}>
        <span className="button-text">$</span>
        {this.state.expanded ? (
          <ArrowUpIcon classes="icon" />
        ) : (
          <ArrowDownIcon classes="icon" />
        )}
      </button>
      <div className={this.state.expanded ? "expanded" : "hidden"}>
        <div className="dropdown-menu">{this.renderItems()}</div>
      </div>
    </div>
  );
}

export default DropDownMenu;
