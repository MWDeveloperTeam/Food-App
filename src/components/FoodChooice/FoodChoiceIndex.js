import React, { useState } from "react";
import styled from "styled-components";
import { Constant } from "../../constants";
import choiceBannerImg from "../../media/choiceBanner.jpg";
import {
  AiFillStar,
  AiOutlineClockCircle,
  AiFillDollarCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import FoodChoiceModel from "./FoodChoiceModel";
import CommonNav from "../CommonNav";
import { Link } from "react-router-dom";

const { Fonts, Colors, Flex, ButtonP } = Constant;

const FoodChoiceIndex = () => {
  const [foodModel, setFoodModel] = useState(false);

  const showFoodModel = () => {
    setFoodModel(!foodModel);
  };

  return (
    <Section>
      <div className="choice" style={foodModel ? { overflow: "hidden" } : null}>
        <CommonNav
          fucn={() => console.log()}
          // title={navTitle}
          // icon={<IoNotificationsOutline />}
          pagelink="/open"
        />
        <div className="choice_Banner">
          <img src={choiceBannerImg} alt="" />
        </div>
        <div className="choice_Content">
          <div className="head">
            <div className="recipe_name">
              <h1>chicken burger</h1> <h1>$15.00</h1>
            </div>
            <div className="recipe_rating">
              <div className="star">
                <AiFillStar className="starIcon" /> 4.9(150)
              </div>

              <div className="recipie_time">
                <AiOutlineClockCircle className="recipie_time_icon" /> 30 min
              </div>
              <div className="recipie_delivery">
                <AiFillDollarCircle className="recipie_delivery_icon" /> free
                delivery
              </div>
            </div>
            <div className="ingredients_tabs_div">
              <ul>
                <li>details</li>
                <li className="active">ingradients</li>
                <li>review</li>
              </ul>
            </div>
            <div className="top_Choice">
              <div className="topChoiceHead">
                <span>choice of top burger</span>
                <span>required</span>
              </div>
              <div className="choiceOptions">
                <input type="radio" name="choice" id="choice1" />
                <label htmlFor="choice1">extra savory sauce</label>
              </div>
              <div className="choiceOptions">
                <input type="radio" name="choice" id="choice2" />
                <label htmlFor="choice2">extra cheese</label>
              </div>
              <div className="choiceOptions">
                <input type="radio" name="choice" id="choice3" />
                <label htmlFor="choice3">extra tomatos</label>
              </div>
            </div>
            <div className="Special_instructions" onClick={showFoodModel}>
              <AiOutlinePlusCircle />
              <span>add special instructions</span>
            </div>
            {foodModel && <FoodChoiceModel close={showFoodModel} />}
            <div
              className="add_To_Cart"
              style={
                foodModel
                  ? {
                      position: "fixed",
                      zIndex: "999",
                      background: "#fff",
                      bottom: "0px",
                      left: "0px",
                      width: "100%",
                      height: "10vh",
                    }
                  : null
              }
            >
              <AiOutlineMinusCircle className="plus_icon" />
              <span>2</span>
              <AiOutlinePlusCircle className="minus_icon" />
              <Link to='/mycart'>
                <button>
                  add to cart <span>$25.00</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FoodChoiceIndex;
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  font-family: ${Fonts.primaryFont};
  text-transform: capitalize;
  .choice_Banner {
    width: 100%;
    height: 30rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* transform: translate(); */
    }
  }
  .choice_Content {
    background-color: #fff;
    padding: 2rem 5rem;
    .head {
      .recipe_name {
        ${Flex}
        justify-content: space-between;
        text-transform: capitalize;

        h1 {
          font-size: 2rem;
          padding: 0.5rem 0;
          &:last-of-type {
            color: ${Colors.secondaryColor};
          }
        }
      }
      .recipe_rating {
        ${Flex};
        gap: 2rem;
        .star,
        .recipie_time,
        .recipie_delivery {
          ${Flex};
          gap: 0.4rem;
        }

        .star {
          .starIcon {
            font-size: 1.4rem;
            color: ${Colors.secondaryColor};
          }
        }
        .recipie_time_icon,
        .recipie_delivery_icon {
          color: ${Colors.primaryColor};
          font-size: 1.4rem;
        }
      }
      .ingredients_tabs_div {
        ul {
          ${Flex};
          justify-content: center;
          padding: 1rem 0;
          li {
            list-style: none;
            padding: 0.5rem 1rem;
            text-transform: capitalize;
            color: ${Colors.terteryColor};
          }
          .active {
            color: ${Colors.terteryColor2};
          }
        }
      }
      .top_Choice {
        padding: 1rem 0;
        .topChoiceHead {
          ${Flex};
          justify-content: space-between;
          padding: 1rem 0;
          font-size: 1.2rem;
          span:last-child {
            background-color: ${Colors.lightPrimaryColor};
            padding: 0.2rem 1.2rem;
            border-radius: 1rem;
            color: ${Colors.secondaryColor};
          }
        }
        .choiceOptions {
          padding: 0.2rem 0;
          ${Flex};
          input {
            margin-right: 1rem;
            accent-color: ${Colors.secondaryColor};
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      }
      .Special_instructions {
        ${Flex};
        justify-content: center;
        color: ${Colors.secondaryColor};
        font-size: 1.2rem;
        gap: 1rem;
        cursor: pointer;
        background: #f2f2f2;
        padding: 0.7rem;
        border-radius: 0.5rem;
      }
      .add_To_Cart {
        ${Flex};
        justify-content: center;
        padding: 1rem 0.5rem;
        gap: 1rem;
        font-size: 1.5rem;
        color: ${Colors.secondaryColor};
        & > span {
          color: ${Colors.helperColor};
          font-size: 1.2rem;
        }
        .minus_icon,
        .plus_icon {
          cursor: pointer;
        }
        button {
          ${Flex};
          gap: 3rem;
          font-size: 1.2rem;
          ${ButtonP}
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .choice_Banner {
      height: 20rem;
    }
    .choice_Content {
      padding: 1.5rem 2rem;
      .head {
        .recipe_name {
          h1 {
            font-size: 1.5rem;
          }
        }
        .recipe_rating {
          gap: 2rem;
          .star,
          .recipie_time,
          .recipie_delivery {
            gap: 0.4rem;
          }

          .star {
            .starIcon {
              font-size: 1.4rem;
            }
          }
          .recipie_time_icon,
          .recipie_delivery_icon {
            font-size: 1.4rem;
          }
        }
        .ingredients_tabs_div {
          ul {
            padding: 1rem 0;
            li {
              padding: 0.5rem 1rem;
            }
            .active {
              color: ${Colors.terteryColor2};
            }
          }
        }
        .top_Choice {
          .topChoiceHead {
            padding: 0.7rem 0;
            font-size: 1rem;
            span:last-child {
              padding: 0.2rem 1rem;
              border-radius: 0.5rem;
            }
          }
          .choiceOptions {
            padding: 0.2rem 0;
            input {
              width: 1.2rem;
              height: 1.2rem;
            }
          }
        }
        .Special_instructions {
          font-size: 1.2rem;
          gap: 1rem;
        }
        .add_To_Cart {
          padding: 1rem 0.5rem;
          gap: 1rem;
          font-size: 1.5rem;
          color: ${Colors.secondaryColor};
          & > span {
            color: ${Colors.helperColor};
            font-size: 1.2rem;
          }
          .minus_icon,
          .plus_icon {
            cursor: pointer;
          }
          button {
            ${Flex};
            gap: 3rem;
            padding: 0.5em 1.5em;
            font-size: 1.2rem;
            text-transform: capitalize;
            border-radius: 1rem;
            border: none;
            background-color: ${Colors.primaryColor};
            color: #fff;
            cursor: pointer;
            &:active {
              background-color: rgba(10, 135, 145, 0.8);
            }
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .choice_Banner {
      height: 15rem;
    }
    .choice_Content {
      padding: 1rem 1rem;
      .head {
        .recipe_name {
          h1 {
            font-size: 1.2rem;
          }
        }
        .recipe_rating {
          font-size: 0.85rem;
          gap: 1.5rem;
          .star,
          .recipie_time,
          .recipie_delivery {
            gap: 0.4rem;
          }

          .star {
            .starIcon {
              font-size: 1.2rem;
            }
          }
          .recipie_time_icon,
          .recipie_delivery_icon {
            font-size: 1.2rem;
          }
        }
        .ingredients_tabs_div {
          ul {
            padding: 1rem 0;
            li {
              padding: 0rem 1rem;
            }
            .active {
              color: ${Colors.terteryColor2};
            }
          }
        }
        .top_Choice {
          padding: 0.5rem 0;
          .topChoiceHead {
            padding: 0.7rem 0;
            font-size: 1rem;
            span:last-child {
              padding: 0.2rem 1rem;
              border-radius: 0.5rem;
            }
          }
          .choiceOptions {
            padding: 0.5rem 0;
            font-size: 0.85rem;
            input {
              width: 1.1rem;
              height: 1.1rem;
            }
          }
        }
        .Special_instructions {
          font-size: 1.1rem;
          gap: 1rem;
        }
        .add_To_Cart {
          padding: 1rem 0rem;
          gap: 1rem;
          font-size: 1.2rem;
          & > span {
            font-size: 1.2rem;
          }
          .minus_icon,
          .plus_icon {
            cursor: pointer;
          }
          button {
            gap: 3rem;
            padding: 0.5em 1.5em;
            font-size: 1rem;
            border-radius: 1rem;
          }
        }
      }
    }
  }
  @media (max-width: 420px) {
    .choice_Banner {
      height: 10rem;
    }
    .choice_Content {
      padding: 1rem 1rem;
      .head {
        .recipe_name {
          h1 {
            font-size: 1rem;
          }
        }
        .recipe_rating {
          font-size: 0.65rem;
          gap: 1rem;
          .star,
          .recipie_time,
          .recipie_delivery {
            gap: 0.4rem;
          }

          .star {
            .starIcon {
              font-size: 1rem;
            }
          }
          .recipie_time_icon,
          .recipie_delivery_icon {
            font-size: 1rem;
          }
        }
        .ingredients_tabs_div {
          ul {
            padding: 1rem 0;
            li {
              padding: 0rem 1rem;
              font-size: 0.75rem;
            }
            .active {
              color: ${Colors.terteryColor2};
            }
          }
        }
        .top_Choice {
          padding: 0.5rem 0;
          .topChoiceHead {
            padding: 0.7rem 0;
            font-size: 0.85rem;
            span:last-child {
              padding: 0.1rem 0.5rem;
              border-radius: 0.5rem;
            }
          }
          .choiceOptions {
            padding: 0.5rem 0;
            font-size: 0.85rem;
            input {
              width: 1.1rem;
              height: 1.1rem;
            }
          }
        }
        .Special_instructions {
          font-size: 1rem;
          gap: 0.5rem;
        }
        .add_To_Cart {
          padding: 1rem 0rem;
          gap: 1rem;
          font-size: 1rem;
          & > span {
            font-size: 1rem;
          }
          .minus_icon,
          .plus_icon {
            cursor: pointer;
          }
          button {
            gap: 0.5rem;
            padding: 0.5em 1.5em;
            font-size: 0.9rem;
            border-radius: 1rem;
          }
        }
      }
    }
  }
`;
