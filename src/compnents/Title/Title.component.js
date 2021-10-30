import { Component } from "react";
import "./Title.style.scss";
class Title extends Component {
  render = () => <h2 {...this.props}>{this.props.children}</h2>;
}

export default Title;
