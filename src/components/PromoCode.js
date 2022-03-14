import React, { useState } from "react";
import styled from "styled-components";
import { CgTag } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { Constant } from "../constants";
import CheckoutModel from "./chechoutmodel/CheckoutModel";
const { Fonts, Colors } = Constant;

const PromoCode = () => {
  const [promoToggle, setPromoToggle] = useState(false);
  const [open, setOpen] = useState(false)

  const Toggle = () => {
    setPromoToggle(!promoToggle)
  }

  return (
    <Section>
      <div>
        <div className="container">
          <div>
            <CgTag color={Colors.secondaryColor} fontSize="1.8rem" />
          </div>
          <div className="promo_text">Add Promo Coden</div>
          <button>
            <IoIosArrowForward fontSize="1.3rem" onClick={Toggle} />
          </button>
        </div>
        <div className="search_container" style={promoToggle ? {display: 'inherit'}: null}>
          <input type="text" placeholder="Enter Promo Code"/>
          <button onClick={() => setOpen(true)}>Apply</button>
          {open && <CheckoutModel/>}
        </div>
      </div>
    </Section>
  );
};

export default PromoCode;
const Section = styled.section`
  /* background: red; */
  padding: 0 3rem;
  font-family: ${Fonts.primaryFont};
  > div {
    padding: .8rem 0;
    border-top: 0.1rem solid #ccc;
    border-bottom: 0.1rem solid #ccc;
    display: flex;
    gap: 1rem;
    .container {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.2rem;
      div {
        display: flex;
        align-items: center;
      }
      button {
        background: #fff;
        border: none;
        display: none;
        align-items: center;
        cursor: pointer;
      }
    }

    .search_container {
      height: 2rem;
      display: flex;
      gap: 1rem;
      input {
        width: 15rem;;
        height: 100%;
        border: none;
        border-bottom: 0.12rem solid ${Colors.secondaryColor};
        padding: 1rem;
        &:focus{
          outline: none;
        }
      }

      button {
        width: 5rem;
        height: 100%;
        background: ${Colors.secondaryColor};
        border: none;
        cursor: pointer;
        border-radius: .2rem
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem; 
  > div {
    width: 100%;
    flex-direction: column;
    .container {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.2rem;
      div {
        display: flex;
        align-items: center;
      }
      button {
        display: flex;
      }
      .promo_text {
        flex: 1;
      }
    }

    .search_container {
      display: none;
      width: 100%;
      input {
        width: 100%;;
        height: 100%;
        border: none;
      }
    }
  }

  }
`;
