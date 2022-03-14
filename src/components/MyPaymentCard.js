import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "../styles/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonNav from "./CommonNav";
import visacard from "../media/visacard.jpg";
import rupaycard from "../media/rupaycard.png";
import mastercard from "../media/mastercard.png";
import { MdAddCircle } from "react-icons/md";
import Button from "./Button";
import { Constant } from "../constants";
import { Link } from "react-router-dom";
const { Fonts, Colors } = Constant;

const MyPaymentCard = () => {
  return (
    <Section>
      <CommonNav
        title="My Card"
        color_right_icon={Colors.primaryColor}
        icon={<MdAddCircle />}
        fucn={() => console.log()}
        pagelink="/payment"
      />
      <div>
        <Slider dots centerMode>
          <CardSlider>
            <div>
              <img src={visacard} alt="" />
            </div>
          </CardSlider>
          <CardSlider>
            <div>
              <img src={rupaycard} alt="" />
            </div>
          </CardSlider>
          <CardSlider>
            <div>
              <img src={rupaycard} alt="" />
            </div>
          </CardSlider>
          <CardSlider>
            <div>
              <img src={rupaycard} alt="" />
            </div>
          </CardSlider>
          <CardSlider>
            <div>
              <img src={mastercard} alt="" />
            </div>
          </CardSlider>
        </Slider>
      </div>
      <div className="payment_input_container">
        <div>
          <div>
            <p>CARDHOLDER NAME</p>
            <input type="text" />
          </div>
          <div>
            <p>CARD NUMBER</p>
            <div>
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
            </div>
          </div>

          <div>
            <p>
              <span>EXPIRATION DATE</span>
              <span>CVV/CVC</span>
            </p>
            <div>
              <input type="number" />
              <input type="number" />
              <input type="password" />
            </div>
          </div>

          <div>
            <div>
              <input type="text" placeholder="Add Face Id" />
            </div>
          </div>

          <div>
            <input type="checkbox" name="credential" id="credential" />
            <label htmlFor="credential">Save my credentials</label>
          </div>
        </div>
          <div className="add_card_button">
            <Link to='/mycart'>
            <button>Add Card</button>
            </Link>
          </div>
      </div>
      <div style={{ height: "2rem" }}></div>
    </Section>
  );
};

export default MyPaymentCard;

const Section = styled.section`
  font-family: ${Fonts.primaryFont};
  > div {
    padding: 1rem 3rem;

    .add_card_button {
      margin-top: 0.6rem;
     a{
       width: 100%;
       button {
        width: 100%;
        height: 2.5rem;
        border: none;
        background-color: ${Colors.primaryColor};
        border-radius: 0.3rem;
        color: #fff;
        font-size: 1.3rem;
        cursor: pointer;
        transition: 0.2s linear;
        &:hover {
          background-color: ${Colors.secondaryColor};
        }
      }
     }
    }
  }

  .payment_input_container {
    padding: 2rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    > div {
      width: 44rem;
      div {
        width: 100%;
        &:first-child {
          width: 100%;
          margin-bottom: 0.5rem;
          p {
            margin-bottom: 0.5rem;
            color: #aaa;
          }
          input {
            text-transform: uppercase;
            width: 100%;
            height: 2.5rem;
            border: 0.1rem solid grey;
            background-color: #f2f2f2;
            padding: 1rem;
            border-radius: 0.3rem;
            &::placeholder {
              color: #bbb;
            }
            &:focus {
              outline: none;
            }
          }
        }
        &:nth-child(2) {
          width: 100%;
          margin-bottom: 0.5rem;
          p {
            margin-bottom: 0.5rem;
            color: #aaa;
          }
          div {
            display: flex;
            gap: 1rem;
            input {
              width: 25%;
              height: 2.5rem;
              border: 0.1rem solid grey;
              background-color: #f2f2f2;
              padding: 1rem;
              border-radius: 0.3rem;
              &:focus {
                outline: none;
              }
            }
          }
        }

        &:nth-child(3) {
          margin-bottom: 0.5rem;
          p {
            margin-bottom: 0.5rem;
            color: #aaa;
            display: flex;
            justify-content: space-between;
          }
          div {
            display: flex;
            gap: 1rem;
            input {
              width: calc(100% / 3);
              height: 2.5rem;
              border: 0.1rem solid grey;
              background-color: #f2f2f2;
              padding: 1rem;
              border-radius: 0.3rem;
              &:focus {
                outline: none;
              }
            }
          }
        }

        &:nth-child(4) {
          margin-bottom: 0.5rem;
          margin-top: 1.5rem;
          div {
            input {
              width: 100%;
              height: 2.5rem;
              border: 0.1rem solid grey;
              background-color: #f2f2f2;
              padding: 1rem;
              border-radius: 0.3rem;
              &:focus {
                outline: none;
              }
            }
          }
        }

        &:nth-child(5) {
          margin-bottom: 0.5rem;
          margin-top: 1.5rem;
          /* background-color: red; */
          display: flex;
          gap: 1rem;
          align-items: center;
          input {
            accent-color: ${Colors.secondaryColor};
            width: 1.1rem;
            height: 1.1rem;
          }
          label {
            color: #aaa;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    > div {
      padding: 0.5rem;
    }

    .payment_input_container {
      padding: 2rem 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      > div {
        width: 100%;
        padding: 0 1rem;
      }
    }
  }
`;

const CardSlider = styled.div`
  /* background-color: red; */
  div {
    display: flex;
    justify-content: center;
    img {
      width: 20rem;
    }
  }

  @media (max-width: 768px) {
    div {
      display: flex;
      justify-content: center;
      padding: 0 0.5rem;
      img {
        width: 100%;
      }
    }
  }
`;
