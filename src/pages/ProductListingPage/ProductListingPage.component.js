import { Component } from "react";
import Title from "../../compnents/Title";
import Content from "../../modules/Content/Content.component";
import styled from "styled-components";
import "./ProductListingPage.style.scss";
const Container = styled.div`
  padding: 0px 101px;
`;

class ProductListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  render() {
    return (
      <>
        <Container>
          <Title className="category-title">Category name</Title>
          <Content />
        </Container>
      </>
    );
  }
}

export default ProductListingPage;
