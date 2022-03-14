import React from "react";
import styled from "styled-components";
import { Card_css } from "./CommonCardCss";
import { BsFillBookmarkFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
// import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
// import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const HomeFoodItems = ({ img, title, subtitle, icon1, commonIcon, icon3,loc }) => {
  return (
    <Card>
      <Link to='/open'>
      <div className="food_item_container">
        <div className="card_items_img">
          <img src={img} alt="" />
        </div>
        <div className="card_content">
          <div className="company_title">
            <span>{title}</span>
            <span>
              <BsFillBookmarkFill color={Colors.secondaryColor} />
            </span>
          </div>

          {subtitle.map((sub, i) => (
            <React.Fragment key={i}>
              <div className="subtitle_container" key={i}>
                <div className="location_container">
                  <span>{loc} {sub.location}</span>
                </div>
                <div className="company_subtitle">
                  <span>
                    <GiForkKnifeSpoon className="company_icons" /> {sub.item1}
                  </span>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    {icon1} {commonIcon} {sub.item2}
                  </span>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    {commonIcon} {sub.item3}
                  </span>
                </div>
              </div>

              <div className="company_actions">
                <span>
                  <AiFillStar /> {sub.rating}
                </span>
                <span>
                  <BiTimeFive /> {sub.min} min.
                </span>
                <span>
                  {icon3} {sub.ratingTitle}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      </Link>
    </Card>
  );
};

export default HomeFoodItems;

const Card = styled.div`
  font-family: ${Fonts.primaryFont};
  .food_item_container {
    width: 20rem;
    ${Card_css};
    .card_items_img {
      width: 100%;
      img {
        width: 100%;
        border-radius: 0.4rem;
      }
    }
  }

  .card_content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    .company_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.5rem;
      span {
        font-size: 1rem;
        &:first-child {
        }
      }
    }
  }

  .subtitle_container {
    display: flex;
    flex-direction: column;
    .company_subtitle {
      padding: 0 0.5rem;
      display: flex;
      gap: 20px;
      color: ${Colors.terteryColor};
      font-size: 0.9rem;
    }

    .location_container {
      padding: 0 0.5rem;
      color: ${Colors.terteryColor};
      font-size: 0.9rem;
    }
  }

  .company_actions {
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    span {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: ${Colors.terteryColor};
      &:first-child {
        svg {
          color: ${Colors.secondaryColor};
          font-size: 1.3rem;
        }
      }
      &:last-child {
        svg {
          color: ${Colors.primaryColor};
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .food_item_container {
      width: 100%;
      margin-bottom: 15px;
      /* background-color: aqua; */
      flex-direction: row;
      height: 120px;
      .card_items_img {
        width: 150px;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .card_content {
        gap: 0.5rem;
        width: calc(100% - 150px);
      }

      .company_actions {
        justify-content: initial;
        gap: 0.5rem;
      }
    }
  }

  @media only screen and (max-width: 450px) {
    .food_item_container {
      margin-bottom: 15px;
      width: 100%;
      flex-direction: row;
      height: 100px;
      .card_items_img {
        width: 100px;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .card_content {
        gap: 0.5rem;
        width: calc(100% - 100px);
      }

      

      .subtitle_container {
        display: flex;
        flex-direction: column;
        .company_subtitle {
        font-size: 0.6rem;
        gap: 0px;
      }

        .location_container {
          padding: 0 0.5rem;
          color: ${Colors.terteryColor};
          font-size: 0.7rem;
        }
      }

      .company_actions {
        justify-content: space-between;
        font-size: 0.52rem;
      }
    }
  }
`;
