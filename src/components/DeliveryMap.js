import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const DeliveryMap = () => {
  return (
    <Section>
      <div>
        <div className="map_container">
          <img
            src="https://cdn.talkesport.com/wp-content/uploads/Map-img.jpeg"
            alt=""
          />
        </div>
        <div className="content_container">
          <div>
            <span>Delivery to :Home</span>
            <span>Change</span>
          </div>
          <div>
            <span>
              <GoLocation />
            </span>
            <span>Kremshore Budgam</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DeliveryMap;

const Section = styled.section`
  padding: 0 3rem;
  font-family: ${Fonts.primaryFont};
  > div {
    padding: 0.8rem 0;
    border-bottom: 0.1rem solid #ccc;
    display: flex;
    gap: 1rem;
    .map_container {
      width: 8rem;
      img {
        width: 100%;
        border-radius: 0.8rem;
      }
    }

    .content_container {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      padding-top: 1rem;
      width: 25rem;
      div {
        width: inherit;
        &:first-child {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          span {
            &:last-child {
              color: ${Colors.secondaryColor};
            }
          }
        }
        &:last-child {
          display: flex;
          gap: 0.5rem;
          color: #666;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    > div {
      padding: 0.8rem 0;
      display: flex;
      gap: 1rem;
      .map_container {
        width: 5rem;
        img {
          width: inherit;
        }
      }

      .content_container {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        padding-top: 1rem;
        width: 100%;
        div {
          width: inherit;
          font-size: 0.8rem;
          &:first-child {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            span {
              &:last-child {
                color: ${Colors.secondaryColor};
                
              }
            }
          }
          &:last-child {
            display: flex;
            gap: 0.5rem;
            color: #666;
          }
        }
      }
    }
  }
`;
