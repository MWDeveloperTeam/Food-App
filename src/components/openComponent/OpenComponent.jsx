import React, { useState } from "react";
import styled from "styled-components";
import bannerImage from "../../media/openBanner.jpg";
import { BsFillBookmarkFill, BsDot, BsFillStopwatchFill } from "react-icons/bs";
import { AiFillStar, AiFillDollarCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaRegShareSquare } from "react-icons/fa";
import { Constant } from "../../constants";
import { Link } from "react-router-dom";
import CardList from "./CardList";
import SelectFood from "../selectFoodModal/SelectFood";
import CommonNav from "../CommonNav";

const { Fonts, Colors, Flex,  } = Constant;
const OpenComponent = () => {
  const exampleApi = [1,2,3,4,5,6] 

  const [count, setcount] = useState(false);
  const getCardValue = (value) =>{
    setcount(value)

    
  }


  return (
    <Section >
      <div className="open_banner">
      <CommonNav style={{position:'absolute'}} iconColor="#000" pagelink="/" icon={<BsSearch/>} icon1={<FaRegShareSquare/>} fucn={()=> console.log()}/>
        <img src={bannerImage} alt="" />
      </div>
      <div className="open_container">
        <div className="container_heading_div">
          <div className="head">
            <h1>Mcdonald's</h1>
            <Link to="/">
              <BsFillBookmarkFill />
            </Link>
          </div>
          <div className="content_navigate_indicator">
            <Link to="/">$$</Link>
            <BsDot />
            <Link to="/">Burger</Link> <BsDot />
            <Link to="/">american food</Link> <BsDot />
            <Link to="/">deshi food</Link>
          </div>
          <div className="reviews_div">
            <AiFillStar className="starIcon" />
            <span>4.9</span>
            <span>200+</span>
            <span>Ratings</span>
          </div>
          <div className="delivery_div">
            <div className="free_delivery">
              <AiFillDollarCircle className="delivery_dollar_icon" />
              <span>free delivery</span>
            </div>
            <div className="thirty_min">
              <BsFillStopwatchFill className="thirty_min_icon" />
              <span>thirty min</span>
            </div>
            <div className="take_away" >take away</div>
          </div>
        </div>
        <div className="food_choice">
          <ul>
            <li>
              <Link to="/">foryou</Link>
            </li>
            <li>
              <Link to="/">burgers</Link>
            </li>
            <li>
              <Link to="/">meels</Link>
            </li>
            <li>
              <Link to="/">chicken</Link>
            </li>
            <li>
              <Link to="/">soup</Link>
            </li>
          </ul>
        </div>
        <div className="open_container_card">
        {
        exampleApi.map((ex,i) =>
        <CardList value={getCardValue} key={i}/>

        )
        }
         
          
        </div>
      </div>
      {count && <SelectFood value={getCardValue}/>}
    </Section>
  );
};

export default OpenComponent;
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  font-family: ${Fonts.primaryFont};
  .open_banner {
    width: 100%;
    height: 30rem;
    img {
      height: inherit;
      width: inherit;
      object-fit: cover;
    }
  }
  .open_container {
    position: relative;
    top: -3rem;
    background-color: #fff;
    border-radius: 3rem 3rem 0 0 ;
    padding: 2rem;

    .container_heading_div {
      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: ${Fonts.primaryFont};
        font-size: 2rem;
        text-transform: capitalize;

        a {
          color: ${Colors.secondaryColor};
        }
        h1 {
          color: #000;
        }
      }
      .content_navigate_indicator {
        display: flex;
        align-items: center;
        padding: 1rem 0;
        color: #666;
        a {
          margin: 0 0.3rem;
          text-transform: capitalize;
          color: #666;
        }
      }
      .reviews_div {
        padding: 0.3rem 0;
        ${Flex}
        span {
          color: #444;
          margin: 0 0.3rem;
          font-size: 1.1rem;
          &:first-of-type {
            font-weight: 600;
          }
        }
        .starIcon {
          color: ${Colors.secondaryColor};
          font-size: 1.7rem;
        }
      }
      .delivery_div {
        display: flex;
        align-items: center;
        gap: 3rem;
        padding: 1rem 0;
        div {
          padding: 0.3rem 0;
          width: fit-content;
          text-transform: capitalize;
          font-size: 1.1rem;
          ${Flex}
          &:last-of-type {
            padding: 0.5rem 2rem;
            color: ${Colors.secondaryColor};
            background-color: ${Colors.lightPrimaryColor};
            border-radius: 0.5rem;
          }
        }
        .free_delivery {
          ${Flex}
          .delivery_dollar_icon {
            color: ${Colors.primaryColor};
            font-size: 1.4rem;
          }
          span {
            margin-left: 0.5rem;
          }
        }
        .thirty_min {
          .thirty_min_icon {
            font-size: 1.4rem;
            color: ${Colors.primaryColor};
          }
          span {
            margin-left: 0.5rem;
          }
        }
      }
    }
    .food_choice {
      padding: 1rem 2rem;
      background-color: ${Colors.lightPrimaryColor};
      border-radius: 3rem;
      overflow: auto;
      ul {
        ${Flex}
        gap: 1.5rem;
        li {
          list-style: none;
          text-transform: capitalize;
          font-size: 1.2rem;
          a {
            color: #000;
          }
        }
      }
    }
    .open_container_card {
      padding: 2rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
  }

  @media (max-width: 1024px) {
    .open_banner {
      height: 22rem;
    }
  }
  @media (max-width: 767px) {
    .open_banner {
      height: 15rem;
    }
    .open_container {
      top: -2rem;
      border-radius: 2rem;
      padding: 1.5rem 1rem;

      .container_heading_div {
        .head {
          font-size: 1.5rem;
        }
        .content_navigate_indicator {
          padding: 0.4rem 0;
        }
        .reviews_div {
          padding: 0.3rem 0;
          span {
            margin: 0 0.5rem;
            font-size: 1rem;
          }
          .starIcon {
            color: ${Colors.secondaryColor};
            font-size: 1.6rem;
          }
        }
        .delivery_div {
          gap: 1rem;
          padding: 1rem 0;
          div {
            padding: 0.3rem 0;
            font-size: 1rem;
            &:last-of-type {
              padding: 0.3rem 0.5rem;
            }
          }
          .free_delivery {
            .delivery_dollar_icon {
              font-size: 1.2rem;
            }
            span {
              margin-left: 0.2rem;
            }
          }
          .thirty_min {
            .thirty_min_icon {
              font-size: 1.2rem;
            }
            span {
              margin-left: 0.3rem;
            }
          }
        }
      }
      .food_choice {
        padding: 0.5rem 1rem;
        border-radius: 2.5rem;
        ul {
          gap: 1rem;
          li {
            font-size: 1rem;
          }
        }
      }
      .open_container_card {
        padding: 2rem 0;

        gap: 0.5rem;
      }
    }
  }
  @media (max-width: 423px) {
    .open_banner {
      height: 12rem;
    }
    .open_container {
      top: -0.5rem;
      border-radius: 1rem;
      padding: 1rem 0.5rem;
      .container_heading_div {
        .head {
          font-size: 1rem;
        }
        .content_navigate_indicator {
          font-size: 0.8rem;
        }
        .reviews_div {
          padding: 0.2rem 0;
          span {
            margin: 0 0.5rem;
            font-size: 0.7rem;
          }
          .starIcon {
            font-size: 1.2rem;
          }
        }
        .delivery_div {
          gap: 1rem;
          padding: 1rem 0;
          div {
            padding: 0.3rem 0;
            font-size: 0.8rem;
            &:last-of-type {
              padding: 0.3rem 0.5rem;
            }
          }
          .free_delivery {
            .delivery_dollar_icon {
              font-size: 1rem;
            }
          }
          .thirty_min {
            .thirty_min_icon {
              font-size: 1rem;
            }
          }
        }
      }
      .food_choice {
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        ul {
          li {
            font-size: 0.9rem;
          }
        }
      }
      .open_container_card {
        padding: 1rem 0;

        gap: 0.2rem;
      }
    }
  }
`;
