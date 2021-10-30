import { Component } from "react";
import "./Card.style.scss";
import blouse from "../../assets/product.jpeg";
class Card extends Component {
  render = () => (
    <div className={`card-container ${this.props.classes}`}>
      <img src={blouse} alt="product-image" className="product-img" />
      <div className="product-title">Appolo runing short</div>
      <div className="product-price">$78</div>
    </div>
  );
}

export default Card;
