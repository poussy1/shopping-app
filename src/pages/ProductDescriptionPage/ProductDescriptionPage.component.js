import { Component } from "react";
import Button from "../../compnents/Button";
import {
  Container,
  Col1,
  Col2,
  Col3,
  SampleImg,
  MainImg,
  StyledHeader,
  Sizes,
  Subheader,
  Size,
  Price,
  Description,
} from "./ProductDescriptionPage.styled.components";
class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  render = () => (
    <>
      <Container>
        <Col1>
          <SampleImg />
          <SampleImg />
          <SampleImg />
        </Col1>
        <Col2>
          <MainImg />
        </Col2>
        <Col3>
          <StyledHeader>
            Apollo
            <br />
            <span>Running short</span>
          </StyledHeader>
          <div>
            <Subheader>SIZE:</Subheader>
            <Sizes>
              <Size className={"selected-btn"}>XS</Size>
              <Button text="S" type="description-size-btn" />
              <Button text="M" type="description-size-btn selected" />
              <Button text="L" type="description-size-btn" />
            </Sizes>
          </div>
          <div className="price-container">
            <Subheader>PRICE:</Subheader>
            <Price>$ 20</Price>
          </div>
          <Button text="ADD TO CART" type="primary add-to-cart-btn " />
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </Description>
        </Col3>
      </Container>
    </>
  );
}

export default ProductDescriptionPage;
