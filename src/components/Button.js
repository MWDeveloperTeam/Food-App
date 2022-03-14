import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { Store } from "../Store";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const Button = ({toggle}) => {

  // const { toggle, setToggle } = useContext(Store);
// const [toggle, setToggle] = useState(false)

// const ToggleHandler = () => {
//   setToggle(true)
// }

  return (
    <Buttons>
      {console.log(toggle)}
      <Link to={toggle ? "/" : "/payment"}>
        <button className="button_container">
          <div>
            <span>
              <AiOutlineShoppingCart />
            </span>
            <span>Checkout</span>
          </div>
          <div>$70</div>
        </button>
      </Link>
    </Buttons>
  );
};

export default Button;

const Buttons = styled.section`
  a {
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
  }
  .button_container {
    width: 30rem;
    background-color: ${Colors.primaryColor};
    padding: 0.8rem 3rem;
    display: flex;
    cursor: pointer;
    border-radius: 0.4rem;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    div {
      &:first-child {
        flex: 1;
        /* background-color: red; */
        text-align: left;
        display: flex;
        gap: 1rem;
        align-items: center;
        svg {
          color: #ccc;
        }
      }
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 0rem 0.5rem;
    }
    .button_container {
      width: 100%;
      background-color: ${Colors.primaryColor};
      padding: 0.8rem 1rem;
      display: flex;
      cursor: pointer;
      border-radius: 0.4rem;
      border: none;
      color: #fff;
      font-size: 1.2rem;
      div {
        &:first-child {
          flex: 1;
          /* background-color: red; */
          text-align: left;
          display: flex;
          gap: 1rem;
          align-items: center;
          svg {
            color: #ccc;
          }
        }
      }
    }
  }
`;
