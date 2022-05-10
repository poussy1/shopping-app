import { Component } from "react";

import { withRouter } from "react-router-dom";
import "./Card.style.scss";
import blouse from "../../assets/product.jpeg";
class Card extends Component {
  constructor(props) {
    super(props);
    this.goDescription = this.goDescription.bind(this);
  }
  goDescription() {
    console.log(this);
    this.props.history.push("/product");
  }
  render() {
    return (
      <div
        className={`product-card ${this.props.classes}`}
        onClick={this.goDescription}
      >
        <img src={blouse} alt="" />
        <h6>Appolo runing short</h6>
        <p>$78</p>
      </div>
    );
  }
}

export default withRouter(Card);
