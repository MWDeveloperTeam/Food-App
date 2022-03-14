import React from "react";
import styled from "styled-components";
import CommonNav from "./CommonNav";
import { FaTimes } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { Constant } from "../constants";
import HomeFoodItems from "./HomeFoodItems";
const { Fonts, Colors } = Constant;

const FilterRestaurant = () => {
  const itemArray = [
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 5.0,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 4.9,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 5.0,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 5.0,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 4.1,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 4.8,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 5.0,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 5.0,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 4.9,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 4.8,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 4.1,
      min: 30,
      ratingTitle: "Free",
    },
    {
      title: "Burgur",
      location: 'Kremshore Budgam 191111',
      item1: "Burger",
      item2: "Fast Food",
      item3: "Coffee",
      rating: 4.2,
      min: 30,
      ratingTitle: "Free",
    },
  ];
  return (
    <Section>
      <div>
        <CommonNav fucn={() => console.log()} pagelink='/'/>
      </div>
      <div className="filter_container">
        <div>Filter :</div>
        <div>
          Burgur <FaTimes />
        </div>
        <div>
          High Price <FaTimes />
        </div>
        <div>
          5 Start <FaTimes />
        </div>
      </div>
      <div className="filter_card_container">
        {itemArray.map((item, i) => (
          <HomeFoodItems
            key={i}
            img="https://b.zmtcdn.com/data/pictures/8/18138658/e01ffc3a4d1f4a76e63b3250299f4793.jpg"
            title="Burgur King"
            subtitle={[item]}
            commonIcon={<BsDot />}
            icon3={<AiFillDollarCircle />}
            loc={<HiOutlineLocationMarker/>}
          />
        ))}
      </div>
    </Section>
  );
};

export default FilterRestaurant;

const Section = styled.section`
  font-family: ${Fonts.primaryFont};
  margin-bottom: 4rem;
  .filter_container {
    padding: 0 3rem;
    width: 100%;
    display: flex;
    gap: 1rem;
    div {
      padding: 0.4em 1em;
      background-color: #e7e7e7;
      display: flex;
      align-items: center;
      gap: 1rem;
      border-radius: 0.3rem;
      color: #737373;
      &:first-child {
        background-color: transparent;
      }
      svg {
        cursor: pointer;
      }
    }
  }

  .filter_card_container {
    margin-top: 1rem;
    width: 100%;
    padding: 0 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    .filter_container {
      padding: 0 0.5rem;
      width: 100%;
      display: flex;
      gap: .3rem;
      font-size: 0.7rem;
      div {
        padding: 0.5em 0.5em;
        background-color: #ccc;
        display: flex;
        align-items: center;
        gap: 1rem;
        border-radius: 0.3rem;
        color: #737373;
        &:first-child {
          background-color: transparent;
        }
        svg {
          cursor: pointer;
        }
      }
    }

    .filter_card_container {
      margin-top: 1rem;
      width: 100%;
      padding: 0 0.5rem;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: initial;
      gap: 0rem;
      /* background-color: red; */
    }
  }
`;
