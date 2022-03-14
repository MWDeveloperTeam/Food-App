import React from "react";
import styled from "styled-components";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const TotalPayment = () => {
  return (
    <Section>
      <div className="total_payment_container">
        <h1>
          <span>Total</span>
          <span>$70</span>
        </h1>
      </div>
    </Section>
  );
};

export default TotalPayment;

const Section = styled.section`
  padding: 0 3rem;
  font-family: ${Fonts.primaryFont};
  font-weight: 500;

  .total_payment_container {
    padding: 0.8rem 0;
    /* border-bottom: 0.1rem solid #ccc; */
    width: 33rem;
    h1 {
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    .total_payment_container {
      padding: 0.8rem 0;
      /* border-bottom: 0.1rem solid #ccc; */
      width: 100%;
      h1 {
        display: flex;
        justify-content: space-between;
        font-size: 1.5rem;
      }
    }
  }
`;
