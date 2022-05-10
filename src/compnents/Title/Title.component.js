import { Component } from "react";
import "./Title.style.scss";
class Title extends Component {
  render = () => (
    <div className="title-container">
      <h2 {...this.props}>{this.props.children}</h2>
    </div>
  );
}

export default Title;
