import React from "react";
import { Link } from "react-router-dom";
import { Constant } from "../constants";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { IoOptionsSharp } from "react-icons/io5";
import breakfast from "../media/breakfast.png";
import burger from "../media/burger.png";
import coffee from "../media/coffee.png";
import drink from "../media/drink.png";
import pizza from "../media/pizza.png";
const { Fonts, Colors } = Constant;

const HomeBanner = () => {
  return (
    <Section>
      <div className="banner_search">
        <Link to="">
          <FiSearch className="search_icons"/>
        </Link>
        <input type="search" placeholder="Search..." />
        <IoOptionsSharp className="search_option" />
      </div>
      <div className="banner_nav">
        <Link to="/commonnav">
          <img src={breakfast} alt="" />
          <div>Breakfast</div>
        </Link>
        <Link to="/mycart">
          <img src={burger} alt="" />
          <div>Burger</div>
        </Link>
        <Link to="/counter">
          <img src={pizza} alt="" />
          <div>Pizza</div>
        </Link>
        <Link to="">
          <img src={coffee} alt="" />
          <div>Coffee</div>
        </Link>
        <Link to="">
          <img src={drink} alt="" />
          <div>Drink</div>
        </Link>
      </div>
    </Section>
  );
};

export const Search = () => {
  return (
    <SearchBox onSubmit={(e) => e.preventDefault()}>
      <div className="banner_search">
        <Link to="">
          <FiSearch className="search_icons" />
        </Link>
        <input type="search" placeholder="Search..." />
        <IoOptionsSharp className="search_option" />
      </div>
    </SearchBox>
  );
};

export default HomeBanner;

const Section = styled.section`
  width: 100%;
  height: 350px;
  background-color: ${Colors.primaryColor};
  border-radius: 0% 0% 50% 50% / 0% 0% 15% 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    width: 15px;
    height: 0px;
    background-color: ${Colors.secondaryColor};
  }
  padding-top: 4rem;
  gap: 5rem;
  font-family: ${Fonts.primaryFont};
  .banner_search {
    width: 70%;
    height: 15%;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: center;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
    }
    .search_icons {
      font-size: 1.5rem;
      color: #aaa;
    }
    .search_option {
      font-size: 1.5rem;
      color: ${Colors.secondaryColor};
    }
    input {
      width: 95%;
      height: 2.5rem;
      background-color: transparent;
      padding: 1rem;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }

  .banner_nav {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0 1rem;
    > a {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 0.3s linear;
      &:hover {
        transform: translateY(-10px);
      }
      img {
        width: 2.5rem;
        margin-bottom: 1rem;
      }
      > div {
        color: ${Colors.terteryColor2};
        font-size: 1rem;
        letter-spacing: 0.08rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    height: 200px;
    padding-top: 2rem;
    gap: 2rem;
    .banner_search {
      width: 90%;
    }

    .banner_nav {
      gap: 0.9rem;
      a {
        img {
          width: 1.5rem;
        }
        > div {
          font-size: 0.8rem;
          letter-spacing: 0.05rem;
        }
      }
    }
  }
`;

const SearchBox = styled.form`
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  padding: 1rem;
.banner_search {
    width: 70%;
    height:2.5rem;
    background-color: #f2f2f2;
    padding: 1rem;
    display: flex;
    justify-content: center;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
    }
    .search_icons {
      font-size: 1.5rem;
      color: #aaa;
    }
    .search_option {
      font-size: 1.5rem;
      color: ${Colors.secondaryColor};
    }
    input {
      width: 95%;
      height: 2.5rem;
      background-color: transparent;
      padding: 1rem;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 2rem;
    padding: .5rem 0;
    .banner_search {
      width: 90%;
    }
  }
`
