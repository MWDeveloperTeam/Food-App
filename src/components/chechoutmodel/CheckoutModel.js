import React from "react";
import styled from "styled-components";
import { HiCheck } from "react-icons/hi";
import { Constant } from "../../constants";
import { Link } from "react-router-dom";
const { Colors, Flex, CardListStyle, Fonts } = Constant;

const CheckoutModel = () => {
  return (
    <Section>
      <div className="model_container">
        <div className="tick_container">
          <HiCheck color="#ccc" />
        </div>
        <div className="title_contaner">
          <h3>you place the order successfully</h3>
        </div>
        <div className="subtle_div">
          <p>
            you placeed the order successfully. you will get your order within
            25 minutes. thanks for using our services, enjoy your food
          </p>
        </div>
        <div className="link_div">
          <Link to="/">keep browsing food</Link>
        </div>
      </div>
    </Section>
  );
};

export default CheckoutModel;
const Section = styled.section`
  background-color: rgba(51, 51, 51, 0.473);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  ${Flex};
  justify-content: center;
  font-family: ${Fonts.primaryFont};
  text-transform: capitalize;
  padding: 0 1rem;
  backdrop-filter: blur(1px);
  .model_container {
    max-width: 30rem;
    background: #fff;
    ${CardListStyle};
    position: relative;
    ${Flex};
    padding: 2rem 1rem;
    flex-direction: column;
    .tick_container {
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1em 1em;
      background-color: green;
      border-radius: 50%;
      ${Flex};
      justify-content: center;
      svg {
        font-size: 2.5rem;
      }
    }
    .title_contaner{
        padding: 1rem;
        color: ${Colors.terteryColor2};

    }
    .subtle_div{
        padding: 1rem;
        text-align: center;
        color: ${Colors.terteryColor};
    }
    .link_div{
        padding: 1rem;
        a{
            color: ${Colors.primaryColor};
        }

    }
  }
  @media (max-width: 470px){
   
  padding: 0 .5rem;
  .model_container {
    max-width: 30rem;
    padding: 1rem .5rem;
    .tick_container {
    
      svg {
        font-size: 1.5rem;
      }
    }
    .title_contaner{
        padding: 1rem .5rem;
        h3{
            font-size: .7rem;
        }

    }
    .subtle_div{
        padding: .5rem;
        p{
            font-size: .7rem;
        }
        
    }
    .link_div{
        padding: .5rem;
        a{
            font-size: .7rem;

        }

    }
  }  
  }
`;
