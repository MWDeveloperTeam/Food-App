import React, { useState } from "react";
import styled from "styled-components";
import { Constant } from "../../constants";
import { IoMdClose } from "react-icons/io";
import { Rating } from "@material-ui/lab";

const { Colors, Flex, CardListStyle, Fonts, ButtonP } = Constant;

const ReviewModel = ({ closeMOdel }) => {
  const [ratingVal, setRatingVal] = useState(0);

  console.log(ratingVal);
  const close = (e) => {
    if (e.target.className === `modelwrapper`) {
      closeMOdel();
    } else {
      return;
    }
  };

  return (
    <Section>
      <div className="modelwrapper" onClick={close}>
        <div className="reviewModel">
          <div className="heading_Div">
            <h2>add review</h2>
            <button onClick={closeMOdel}>
              <IoMdClose />
            </button>
          </div>
          <div className="rating_div">
            <span>your rating :</span>
            <Rating
              controlled="true"
              precision={0.5}
              name="simple-controlled"
              size="medium"
              value={ratingVal}
              onChange={(event, newValue) => {
                setRatingVal(newValue);
              }}
            />
          </div>
          <div className="review_div">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="write your review..."
            ></textarea>
            <br />
            <button onClick={() => closeMOdel()}>add review</button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ReviewModel;
const Section = styled.section`
  .modelwrapper {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(51, 51, 51, 0.573);
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(4px);
    ${Flex};
    justify-content: center;
    z-index: 999;
    .reviewModel {
      ${CardListStyle}
      background-color: #fff;
      width: 47rem;

      .heading_Div {
        ${Flex};
        justify-content: center;
        padding: 1rem;
        ${Flex}
        /* background-color: red; */
        h2 {
          flex: 1;
          text-align: center;
        }
        button {
          padding: 0.5em 0.5em;
          font-size: 1.1rem;
          ${Flex};
          justify-content: center;
          border-radius: 0.5rem;
          border: none;
          background-color: ${Colors.primaryColor};
          color: #fff;
        }
      }
      .rating_div {
        padding: 1rem 0;
        ${Flex};
        gap: 1rem;
      }
      .review_div {
        width: 45rem;
        padding: 1rem 0;
        textarea {
          width: inherit;
          padding: 1rem;
          font-size: 1.1rem;
          border-radius: 0.7rem;
        }
        button {
          padding: 0.5em 1.5em;
          font-size: 1.1rem;
          ${Flex};
          justify-content: center;
          border-radius: 0.5rem;
          border: none;
          background-color: ${Colors.primaryColor};
          color: #fff;
        }
      }
    }
  }
  @media (max-width: 760px) {
    .modelwrapper {
      padding: 0.8rem;
      .reviewModel {
        width: 100%;
        .heading_Div {
          padding: 1rem;
          h2 {
            text-align: center;
          }
          button {
            font-size: 1.1rem;
          }
        }
        .rating_div {
          padding: 1rem 0;
          gap: 1rem;
        }
        .review_div {
          width: 100%;
          padding: 1rem 0;
          textarea {
            padding: 1rem;
            font-size: 1.1rem;
          }
          button {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
  @media (max-width: 520px) {
    .modelwrapper {
      padding: 0.8rem;
      .reviewModel {
        width: 100%;
        .heading_Div {
          padding: 0.5rem;
          h2 {
            text-align: left;
            font-size: 1.2rem;
          }
          button {
            font-size: 0.9rem;
          }
        }
        .rating_div {
          padding: 0.5rem 0;
          gap: 0.5rem;
        }
        .review_div {
          padding: 0.5rem 0;
          textarea {
            padding: 0.5rem;
            font-size: 0.9rem;
          }
          button {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;
