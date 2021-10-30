import { Component } from "react";
import Header from "../../modules/Header";
import Title from "../../compnents/Title";
import Content from "../../modules/Content/Content.component";
import styled from "styled-components";
import bag from "../../assets/bag.png";
import Menu from "../../compnents/Menu";
import "./ProductListingPage.style.scss";
import CartIcon from "../../compnents/Icons/CartIcon";
import DropDownMenu from "../../compnents/DropDownMenu/DropDownMenu.component";
const Container = styled.div`
  padding: 0px 101px;
`;

class ProductListingPage extends Component {
  render = () => (
    <Container>
      <Header
        leftComponents={[
          <Menu items={["women", "men", "kids"]} activeItem="women" />,
        ]}
        middleComponent={<img src={bag} alt="bag" />}
        rightComponents={[
          <DropDownMenu items={["₹ INR", "$ USD", "€ EUR"]} />,
          <CartIcon classes="cart-icon" />,
        ]}
      />
      <Title className="title">Category name</Title>
      <Content />
    </Container>
  );
}

export default ProductListingPage;
