import React, {useState} from "react";
import styled from "styled-components";
import { images } from "../ImagesApi";
import IncreDecrement from "./IncreDecrement";
import PromoCode from "./PromoCode";
import Delilver from "./Delilver";
import DeliveryMap from "./DeliveryMap";
import TotalPayment from "./TotalPayment";
import Button from "./Button";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const CheckoutCart = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleHandler = () => {
    setToggle(true);
  };
  return (
    <>
      {images.map((img, i) => (
        <Card key={i}>
          <div className="img_container">
            <img src={img.img} alt="" />
          </div>
          <div className="content_container">
            <h3>{img.itemName}</h3>
            <div className="price_couter_container">
              <h3>{img.price}$</h3>
              <IncreDecrement />
            </div>
          </div>
        </Card>
      ))}
      <PromoCode />
      <Delilver />
      <DeliveryMap />
      <TotalPayment />
      <Button toggle={toggle}/>
      <div style={{ height: "4rem" }}></div>
    </>
  );
};

export default CheckoutCart;

const Card = styled.div`
  width: 100%;
  height: auto;
  padding: 0 0 1rem 2rem;
  display: flex;
  gap: 1rem;
  font-family: ${Fonts.primaryFont};
  /* border-bottom: .1rem solid #ccc; */
  .img_container {
    max-width: 12rem;
    padding: 0.3rem;
    background: #f2f2f2;
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }

  .content_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    > h3 {
      color: #666666;
    }
    .price_couter_container {
      width: 100%;
      display: flex;
      gap: 5rem;
      h3 {
        color: ${Colors.secondaryColor};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 0.5rem 1rem 0.5rem;
    .img_container {
      max-width: 9rem;
    }
    .content_container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      > h3 {
        font-size: 0.96rem;
      }
      .price_couter_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 0rem;
        h3 {
          font-size: 0.96rem;
        }
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .img_container {
      max-width: 7rem;
    }
  } ;
`;
