import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import Card_image from "../media/Card_image.jpg";
import { Constant } from "../constants";
import { Link } from "react-router-dom";
const { Fonts, Colors } = Constant;

const FavouriteCard = () => {
  return (
    <Section>
      <Link to='/open' className="card_main">
        <div className="card_img">
          <img src={Card_image} alt="" />
        </div>
        <div className="card_title">
          <h3>Burger King</h3>
        </div>
        <div className="card_subtitle">
          <ul>
            <li>Burger</li>
            <li>American Food</li>
            <li>Desh Food</li>
          </ul>
        </div>
        <div className="card_actions">
          <div>
            <span>
              <AiFillStar className="rating_icon" /> 4.9 (151)
            </span>
          </div>
          <div>
            <span>
              <GoLocation /> (150m)
            </span>
            <span>
              <BiTimeFive /> (15)
            </span>
          </div>
        </div>
      </Link>
    </Section>
  );
};

export default FavouriteCard;

const Section = styled.section`
  /* width: 100%; */

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
      padding-left: 0.5rem;
      font-size: .8rem;
    }
    .card_subtitle {
      ul {
        display: flex;
        gap: 25px;
        list-style: none;
        color: ${Colors.terteryColor};
        padding-left: 0.5rem;
        font-size: .8rem;
      }
    }
    .card_actions {
      padding: 0 0.5rem;
      display: flex;
      justify-content: space-between;
      color: ${Colors.terteryColor};
      font-size: 0.7rem;
      > div {
        display: flex;
        gap: 10px;
        .rating_icon {
          color: ${Colors.secondaryColor};
          font-size: 1.2rem;
        }
        &:last-child {
          span {
            background-color: #feecd1;
            color: red;
            /* opacity: .3; */
            padding: 0.1rem 0.5rem;
            border-radius: 0.8rem;
            color: ${Colors.secondaryColor};
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

  @media only screen and (max-width: 768px) {
    .card_main {
      width: 270px;
      height: 250px;
      .card_img {
        img {
          height: 170px;
        }
      }
      .card_subtitle {
        ul {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
