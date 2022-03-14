import React, { useState } from "react";
import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { Constant } from "../../constants";

const {  Colors, Flex, CardListStyle } = Constant;

const PayPal = ({ hfor, title, img, cardname }) => {
  const[radioCheck, setRadioCheck] = useState(false)
const checkData = ()=> {
  setRadioCheck(!radioCheck)
}
  return (
    <Section htmlFor={hfor}>
      <div className="paymentImage">
        <img src={img} alt="" />
      </div>
      <div className="paymentContent">
        <h3>{title}</h3>
        <p>fast and secure way to send money</p>
      </div>
      <div className="paymentCheck">
        <input type="radio" name={cardname} id={hfor} onChange={checkData}/>
        {radioCheck && <BsFillCheckCircleFill/>}
      </div>
    </Section>
  );
};

export default PayPal;
const Section = styled.label`
  ${CardListStyle};
  padding: 0.5rem 1rem;
  background-color: ${Colors.lightTerteryColor};
  border-radius: 50rem;
  box-shadow: none;
  ${Flex};
  gap: 1rem;
  .paymentImage {
    ${Flex};
    
    img{
      width:2rem;
    }
  }
  .paymentContent {
    flex: 1;
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
      color: ${Colors.terteryColor};
    }
  }
  .paymentCheck {
    padding: 1rem;
    input {
      
      display: none;
    }
  }
  @media (max-width: 767px){
  padding: 0.5rem 1rem;
  gap: 1rem;
  .paymentImage {
    
    img{
      width: 1.2rem;
    }
  }
  .paymentContent {
    flex: 1;
    h3 {
      font-size: .7rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
  .paymentCheck {
    padding: 1rem;
    input {
      
      display: none;
    }
  }

  }
  @media (max-width: 355px){
    padding: 0.5rem .5rem;
  gap: 1rem;
  .paymentImage {
    
    img{
      width: 1rem;
    }
  }
  .paymentContent {
    flex: 1;
    h3 {
      font-size: .7rem;
    }
    p {
      font-size: 0.5rem;
    }
  }
  .paymentCheck {
    padding: .1rem;
    input {
      
      display: none;
    }
  }
  }
`;
