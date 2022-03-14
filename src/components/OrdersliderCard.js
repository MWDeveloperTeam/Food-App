import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { Constant } from "../constants";
import Card_image from "../media/Card_image.jpg";
const { Fonts, Colors } = Constant;

const FavouriteCard = () => {
  return (
    <Section>
      <div className="card_main">
        <div className="card_img">
          <img src={Card_image} alt="" />
        </div>
        <div className="card_title">
          <h3>Burger Meel</h3>
          <span>See</span>
        </div>
        <div className="card_subtitle">
          <ul>
            <li>Burger King</li>
          </ul>
        </div>
        <div className="card_actions">
          <div>
            <span>$5.5</span>
          </div>
          <div>
            <span>
              <FaShoppingCart />
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FavouriteCard;

const Section = styled.section`
  width: 100%;

  .card_main {
    align-self: auto;
    width: 350px;
    /* min-width: 200px; */
    height: 310px;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 32px 64px rgba(0, 0, 0, 0.07);
    padding: 0.4rem;
    font-family: ${Fonts.primaryFont};
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    .card_img {
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 1rem;
      }
    }

    .card_title {
      padding: 0 0.5rem;
      display: flex;
      justify-content: space-between;
      font-size: .7rem;
      span {
        padding: .1rem .5rem;
        background-color: ${Colors.secondaryColor};
        border-radius: 1rem;
        color: #333;
      }
    }
    .card_subtitle {
      ul {
        display: flex;
        gap: 25px;
        list-style: none;
        color: ${Colors.terteryColor};
        padding-left: 0.5rem;
        font-size: 0.8rem;
      }
    }
    .card_actions {
      padding: 0 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${Colors.primaryColor};
      font-size: 0.8rem;
      > div {
        &:last-child {
          span {
            background-color: ${Colors.primaryColor};
            /* opacity: .3; */
            padding: 0.3rem 0.3rem;
            border-radius: 0.1rem;
            color: #fff;
          }
        }
        span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }
  }
`;
