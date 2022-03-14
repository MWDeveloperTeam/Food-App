import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Logo from "../media/Logo.png";
import HomeBanner from "./HomeBanner";
import Favourite from "./Favourite";
import HomeNav from "./HomeNav";
import HomeFoodItems from "./HomeFoodItems";
import Orderslider from "./Orderslider";
import { Constant } from "../constants";
import BottomMenu from "./BottomMenu";
const { Fonts, Colors } = Constant;

const Home = () => {
  // const itemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const itemArray = [
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
    { item1: "Burgur", item2: "1.2", rating: 4.9, min: 10, ratingTitle: 'Contact' },
  ];

  return (
    <Fragment>
      <Section>
        <div className="nav_left_section">
          <div>
            <GoLocation />
          </div>
          <div>Dilvered to</div>
          <div>
            Home <IoIosArrowDown />
          </div>
        </div>

        <div className="nav_logo">
          <Link to="/slider">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="nav_right_section">
          <Link to="/">
            <IoNotificationsOutline />
          </Link>
        </div>
      </Section>
      <HomeBanner />
      <Favourite />
      <HomeNav />
      <Company>
        {itemArray.map((item, i) => (
          <HomeFoodItems
            key={i}
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png"
            title="Mc Donald'S"
            subtitle={[item]}
            icon1={<GoLocation />}
            icon3={<BsFillTelephoneFill />}
          />
        ))}
        ;
      </Company>
      <br />
      <br />
      <Orderslider />
      <BottomMenu />
    </Fragment>
  );
};

export default Home;

const Section = styled.section`
  width: 100%;
  height: 60px;
  background-color: ${Colors.primaryColor};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 25px;
  font-family: ${Fonts.primaryFont};

  .nav_left_section {
    /* background-color: red; */
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      color: ${Colors.terteryColor2};
      &:first-child {
        margin-right: 6px;
      }
      &:last-child {
        margin-left: 15px;
        color: ${Colors.secondaryColor};
      }
    }
  }

  .nav_logo {
    display: grid;
    place-items: center;
    img {
      width: 60px;
    }
  }

  .nav_right_section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 25px;
    a {
      color: #ccc;
    }
  }
  .food_item_container {
    background-color: red;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: 60% 40%;
    .nav_logo {
      display: none;
    }

    .nav_left_section {
      font-size: 0.8rem;
    }
  }
`;

const Company = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 0 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    display: block;
  }
`;
