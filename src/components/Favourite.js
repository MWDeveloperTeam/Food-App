import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavouriteCard from "./FavouriteCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const Favourite = () => {
  const left_arrow = (e) => {
    let left = e.target.nextSibling;
    // console.log(left);
    left.scrollBy(600, 0);
  };
  const right_arrow = (e) => {
    let right = e.target.previousSibling;
    console.log(right);
    right.scrollBy(-600, 0);
  };
  return (
    <Section>
      <div className="favourite_header">
        <h4>Favourite</h4>
        <Link to="" className="see_all">
          See All
        </Link>
      </div>
      <div className="home_card_slider">
        <span className="left_arrow" onClick={left_arrow} name="hello">
          <IoIosArrowBack />
        </span>
        <div className="inner_slider">
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
        </div>
        <span className="right_arrow" onClick={right_arrow}>
          <IoIosArrowForward />
        </span>
      </div>
    </Section>
  );
};

export default Favourite;

const Section = styled.section`
  width: 100%;
  .favourite_header {
    width: 100%;
    padding: 10px 30px;
    font-family: ${Fonts.primaryFont};
    display: flex;
    justify-content: space-between;
    .see_all {
      color: ${Colors.secondaryColor};
    }
  }

  .home_card_slider {
    /* padding: 0 0rem; */
    display: flex;
    align-items: center;
    .inner_slider {
      display: flex;
      width: 100%;
      overflow: auto;
      gap: 1rem;
      transition: all 5s linear !important;

      &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
        background-color: ${Colors.secondaryColor};
      }
    }
    .left_arrow {
      font-size: 1.5rem;
      padding: 0.2rem;
      cursor: pointer;
      transform: translate(20px);
      background-color: #00000093;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: #fff;
      box-shadow: 0 1px 10px grey;
      svg {
        pointer-events: none;
      }
    }
    .right_arrow {
      font-size: 1.5rem;
      padding: 0.2rem;
      cursor: pointer;
      transform: translate(-20px);
      background-color: #00000093;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: #fff;
      box-shadow: 0 1px 10px grey;
      svg {
        pointer-events: none;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .favourite_header {
      padding: 10px 0.7rem;
    }

    .home_card_slider {
      padding: 15px 0rem;
      gap: 0.3rem;
      .inner_slider {
        .left_arrow {
          padding: 0;
          display: none;
        }
      }
    }
  }
`;
