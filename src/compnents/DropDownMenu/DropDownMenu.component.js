import { Component } from "react";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import ArrowUpIcon from "../Icons/ArrowUpIcon";
import "./DropDownMenu.style.scss";

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render = () => (
    <div className="dropdown-container">
      <button onClick={this.handleClick}>
        <span>$</span>
        {this.state.expanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>
      <ul>
        {this.props.items?.length > 0 &&
          this.state.expanded &&
          this.props.items.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default DropDownMenu;
