import { Component } from "react";
import BagItem from "../../compnents/BagItem";
import { CartTitle } from "./CartPage.styled.component";
import "./CartPage.style.scss";
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
    selectedSize: "XL",
  },
  {
    description: "Jupiter Wayfarer",
    price: "$75.00",
    sizes: [
      { size: "S", available: true },
      { size: "M", available: false },
    ],
    selectedSize: "S",
  },
];
class CartPage extends Component {
  constructor(props) {
    super(props);
    this.props.closeBagModal();
  }
  render() {
    return (
      <div className="cart-container">
        <CartTitle>CART</CartTitle>
        <ul>
          {dummy_products.map((product, i) => (
            <li key={i}>
              <BagItem
                description={product.description}
                price={product.price}
                sizes={product.sizes}
                selectedSize={product.selectedSize}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CartPage;
