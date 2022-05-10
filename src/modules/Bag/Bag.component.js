import { Component } from "react";
import "./Bag.style.scss";
import BagItem from "../../compnents/BagItem";
import Button from "../../compnents/Button";
import { withRouter } from "react-router-dom";
const dummy_products = [
  {
    description: "Apollo Running Short",
    price: "$50.00",
    sizes: [
      { size: "S", available: true },
      { size: "M", available: false },
      { size: "L", available: false },
      { size: "XL", available: true },
    ],
  },
  {
    description: "Jupiter Wayfarer",
    price: "$75.00",
    sizes: [
      { size: "S", available: true },
      { size: "M", available: false },
    ],
  },
];
class Bag extends Component {
  constructor(props) {
    super(props);
    this.checkoutClickHandler = this.checkoutClickHandler.bind(this);
  }
  checkoutClickHandler() {
    console.log(this);
    this.props.history.push("/cart");
  }

  render() {
    return (
      <div className="bag-wrapper">
        <header>
          My Bag,<span> 2 items</span>
        </header>
        <section>
          <ul>
            {dummy_products.map((product, i) => (
              <li key={i}>
                <BagItem
                  description={product.description}
                  price={product.price}
                  sizes={product.sizes}
                />
              </li>
            ))}
          </ul>
          <footer>
            <label>total</label>
            <span>$100</span>
          </footer>
        </section>
        <footer>
          <Button text="view bag" type="secondary" />
          <Button
            text="checkout"
            type="primary"
            onClick={this.checkoutClickHandler}
          />
        </footer>
      </div>
    );
  }
}

export default withRouter(Bag);
