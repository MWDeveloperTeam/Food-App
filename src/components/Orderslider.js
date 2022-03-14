import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OrdersliderCard from "./OrdersliderCard";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const Favourite = () => {
  const [ slider, setslider ] = useState([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
  return (
    <Section>
      <div className="favourite_header">
        <h3>Order Again</h3>
        <Link to="" className="see_all">
          See All
        </Link>
      </div>
      <div className="home_card_slider">
        <div>{slider.map((slide, i) => <OrdersliderCard key={i} />)}</div>
      </div>
    </Section>
  );
};

export default Favourite;

const Section = styled.section`
  width: 100%;
  padding-bottom: 3rem;
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
    /* background-color: red; */
    div {
      &::-webkit-scrollbar {
        width: 15px;
        height: 0px;
        background-color: ${Colors.secondaryColor};
      }
    }

    padding: 0 1.5rem;

    > div {
      display: flex;
      overflow: auto;
      gap: 20px;
    }
  }
`;
