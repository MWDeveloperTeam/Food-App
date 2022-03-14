import React from "react";
import styled from "styled-components";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const Delilver = () => {
  return (
    <Section>
      <div className="delivery_content_container">
        <div>
          <span>Item Total</span>
          <span>$50</span>
        </div>
        <div>
          <span>Discount</span>
          <span>$10</span>
        </div>
        <div>
          <span>Delivery Free</span>
          <span>Free</span>
        </div>
      </div>
    </Section>
  );
};

export default Delilver;

const Section = styled.section`
  padding: 0 3rem;
  font-family: ${Fonts.primaryFont};
  font-weight: 500;
  .delivery_content_container {
    padding: 0.8rem 0;
    border-bottom: 0.1rem solid #ccc;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    > div {
      width: 33rem;
      /* background-color: red; */
      display: flex;
      justify-content: space-between;
      &:last-child {
        color: ${Colors.primaryColor};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 0.5rem;
    .delivery_content_container {
      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
