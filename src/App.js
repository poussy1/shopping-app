import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import CartIcon from "./compnents/Icons/CartIcon";
import DropDownMenu from "./compnents/DropDownMenu/DropDownMenu.component";
import Bag from "./modules/Bag";
import Modal from "./compnents/Modal";
import ProductListingPage from "./pages/ProductListingPage";

import Header from "./modules/Header";
import bag from "./assets/bag.png";
import Menu from "./compnents/Menu";

import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import CartPage from "./pages/CartPage";
function App() {
  const [expanded, setExpanded] = React.useState(false);
  function closeBagModal() {
    setExpanded(false);
  }
  return (
    <div className="App">
      <Header
        leftComponents={[
          <Menu items={["women", "men", "kids"]} activeItem="women" />,
        ]}
        middleComponent={<img src={bag} alt="bag" />}
        rightComponents={[
          <DropDownMenu items={["₹ INR", "$ USD", "€ EUR"]} />,
          <CartIcon
            onClick={() => {
              setExpanded(!expanded);
            }}
            classes="cart-icon"
          />,
        ]}
      />

      <div id="portal" />
      <Modal isOpen={expanded}>
        <Bag />
      </Modal>
      <Route path="/product" component={ProductDescriptionPage} />
      <Route exact path="/" component={ProductListingPage} />
      <Route path="/cart">
        <CartPage closeBagModal={closeBagModal} />
      </Route>
    </div>
  );
}

export default App;
