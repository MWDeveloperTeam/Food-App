import React, { useState } from "react";
import styled from "styled-components";
import CommonNav from "../CommonNav";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrAdd } from "react-icons/gr";
import { Constant } from "../../constants";
import { Rating } from "@material-ui/lab";
import ReviewModel from "./ReviewModel";

const { Colors, Flex, CardListStyle, Fonts, ButtonP } = Constant;
const Reviews = () => {

const [reviewModel, setreviewModel] = useState(false)

const closeMOdel = () => {
  setreviewModel(false)

}
const openModel = () => setreviewModel(true)
const exampleApi =[2,2.5,5,3.5,4]

  return (
    <Section>
      <CommonNav
        title="reviews"
        pagelink="/payment"
        icon={<IoNotificationsOutline />}
        fucn={()=> console.log()}
      />
      <div className="ratingWrapper">
        <h1>4.5</h1>
        <div className="ratingStarsDiv">
          <Rating size="small" value={4.5} precision={0.1} readOnly />
          <p>150 reviews</p>
        </div>
      </div>
      {exampleApi.map((data) =>
        <div className="personReviewWrapper" key={data}>
        <div className="imageDiv">
          <img
            src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740"
            alt=""
          />
        </div>
        <div className="contentDiv">
          <div className="personDiv">
            <p>maxime bratbo</p>
            <Rating readOnly value={data} precision={0.1} size="small" />
          </div>
          <div className="subtitle">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              tempore ipsa odit. Itaque nisi rem a eos doloremque dolore
              asperiores.
            </p>
            <p>show more</p>
          </div>
          <div className="iconDiv">
            <img
              src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-photo/front-view-chicken-burger-with-cheese-green-salad-wooden-desk-sandwich-fast-food-meal-food_140725-25937.jpg?w=740"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42411.jpg?w=740"
              alt=""
            />
          </div>
        </div>
      </div>
      )}
      
      <div className="addbutton" onClick={openModel}>
      <GrAdd color="#ffffff"/ >
      </div>
      {reviewModel && <ReviewModel closeMOdel={closeMOdel}/>}
    </Section>
  );
};

export default Reviews;
const Section = styled.div`
  padding: 1rem;
  .ratingWrapper {
    padding: 0.5rem 3rem;
    ${Flex}
    gap: 1rem;
    h1 {
      font-size: 3.5rem;
    }
    .ratingStarsDiv {
      p {
        color: ${Colors.terteryColor};
      }
    }
  }
  .personReviewWrapper {
    display: flex;
    gap: 2rem;
    padding: 1rem 3rem;
    .imageDiv {
      ${Flex};
      padding: 1rem 0;
      
      img {
        border: 2px solid ${Colors.primaryColor};
        width: 13rem;
        height: 13rem;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .contentDiv {
      width:calc(100% - 10rem);
      border-bottom: 1px solid #ccc;
      padding: 1rem 0;
      .personDiv {
        ${Flex};
        justify-content: space-between;
        padding: 1rem 0;
        p {
          font-weight: 600;
          font-size: 1.3rem;
        }
      }
      .subtitle {
        p {
          font-size: 1.1em;
          &:last-child {
            color: ${Colors.primaryColor};
            padding: 1rem 0;
            font-weight: 500;
            cursor: pointer;
            display: inline-block;
          }
        }
      }
      .iconDiv {
        ${Flex};
        gap: 1rem;

        img {
          width: 7rem;
          height: 5rem;
          border-radius: 0.5rem;
          object-fit: cover;
        }
      }
    }
  }
  .addbutton{
background: ${Colors.secondaryColor};
padding:  .9em .9em;
font-size: 1.3rem;
position: fixed;
bottom: 3rem;
right: 5rem;
border-radius: .5rem;
color: #fff;
${Flex};
justify-content: center;
svg{
  color:#fff;
}
  }
 

  @media (max-width: 760px){
    padding: 1rem;
  .ratingWrapper {
    padding: 1rem;
    h1 {
      font-size: 3.2rem;
    }
    .ratingStarsDiv {
      p {
        color: ${Colors.terteryColor};
      }
    }
  }
  .personReviewWrapper {
    gap: 1.5rem;
    padding: 1rem;
    .imageDiv {
      align-items: flex-start;
      justify-content: flex-start;
      img {
        border: 2px solid ${Colors.primaryColor};
        width: 8rem;
        height: 8rem;
      }
    }
    .contentDiv {
      width:calc(100% - 8rem);
      padding: .5rem 0;
      .personDiv {
        padding: .5rem 0;
        p {
          font-weight: 600;
          font-size: 1.2rem;
        }
      }
      .subtitle {
        p {
          font-size: .9rem;
          &:last-child {
            padding: .5rem 0;
            font-weight: 500;
          }
        }
      }
      .iconDiv {
        gap: 1rem;

        img {
          width: 5rem;
          height: 3rem;
        }
      }
    }
  }
  .addbutton{
padding:  .7em .7em;
font-size: 1.2rem;
bottom: 2rem;
right: 2rem;
border-radius: .5rem;

  }

  }
  @media (max-width:520px){

    padding: 0rem;
  .ratingWrapper {
    padding: .5rem 1rem;
    h1 {
      font-size: 3rem;
    }
    .ratingStarsDiv {
      p {
        color: ${Colors.terteryColor};
      }
    }
  }
  .personReviewWrapper {
    gap: 1rem;
    padding: .5rem 1rem;
    .imageDiv {

      img {
        width: 4rem;
        height: 4rem;
      }
    }
    .contentDiv {
      width:calc(100% - 4rem);
      padding: .5rem 0;
      .personDiv {
        padding: .5rem 0;
        p {
          font-weight: 600;
          font-size: .8rem;
        }
      }
      .subtitle {
        p {
          font-size: .7rem;
          &:last-child {
            padding: .5rem 0;
            font-weight: 500;
          }
        }
      }
      .iconDiv {
        gap: .5rem;

        img {
          width: 3rem;
          height: 2rem;
        }
      }
    }
  }
  .addbutton{
padding:  .7em .7em;
font-size: 1rem;
bottom: .5rem;
right: .5rem;
border-radius: .5rem;

  }
  }


`;
