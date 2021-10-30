import { Component } from "react";
import "./Content.style.scss";
import Card from "../../compnents/Card";
class Content extends Component {
  render() {
    return (
      <div className="content-container">
        <Card classes="card" />
        <Card classes="card" />
        <Card classes="card" />

        <Card classes="card" />
        <Card classes="card" />
        <Card classes="card" />
      </div>
    );
  }
}

export default Content;
