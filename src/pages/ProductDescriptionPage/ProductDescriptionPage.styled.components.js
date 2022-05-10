import styled from "styled-components";
export const Container = styled.div`
  padding: 80px 201px 80px 100px;
  display: flex;
`;
export const Col1 = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
`;
export const Col2 = styled.div`
  flex: 4;
  padding: 0px 25px;
`;
export const Col3 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
export const SampleImg = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 33px;
  background-color: lightgrey;
`;

export const MainImg = styled.img`
  width: 610px;
  height: 511px;
  background-color: lightgrey;
`;
export const StyledHeader = styled.h1`
  margin-top: -5px;
`;
export const Sizes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Subheader = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
`;
export const Size = styled.div`
  width: 63px;
  height: 45px;
  line-height: 45px;
  border: 1px solid black;
  text-align: center;
`;
export const Price = styled.div`
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Description = styled.p`
  text-align: justify;
  text-justify: inter-word;
  line-height: 25.59px;
`;
