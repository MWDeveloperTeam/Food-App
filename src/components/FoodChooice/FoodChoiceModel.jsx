import React from "react";
import styled from "styled-components";
import { Constant } from "../../constants";
import { FaTimes } from "react-icons/fa";
import image from "../../media/listContent.jpg";

const { Fonts, Colors, Flex, CardListStyle } = Constant;

const FoodChoiceModel = ({ close }) => {
  const testapi = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Section >
      <div className="model">
        <div className="model_header">
          <button onClick={close}>
            <FaTimes />
          </button>
          <div className="Title">
            <h2>add speacial instructions</h2>
          </div>
        </div>
        <div className="extraWrapper">
          <div className="extraContentWrapper">
            {testapi.map((test, i) => (
              <div className="extraContentCard" key={i}>
                <img src={image} alt={test} />
                <div className="extraContent">
                  <div className="ContentName">
                    <h3>extra tomatoes</h3>
                    <p>price per item</p>
                  </div>
                  <div className="contentprice">$3.00</div>
                </div>
              </div>
            ))}
          </div>
          <div className="amount_wrapper">
            <div className="amount_div">
              <p>amount item</p> <p>9</p>
            </div>
            <div className="price_div">
              <p>total price</p>
              <p>$65.5</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FoodChoiceModel;
const Section = styled.section`
  height: 90vh;
  width: 100vw;
  background-color: rgba(51, 51, 51, 0.473);
  position: fixed;
  top: 0;
  left: 0;
  font-family: ${Fonts.primaryFont};
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  padding: 0rem 15rem;
  .model {
    width: 100%;
    padding: 0rem 0 1rem 0;
    background: green;
    border-radius: 2rem 2rem 0 0;
    overflow-y: scroll;
    position: relative;
      background: #fff;

    &::-webkit-scrollbar {
      width: 0px;
    }
    .model_header {
      ${Flex};
      border-bottom: 2px solid ${Colors.terteryColor2};
      padding: 1rem;
      position: sticky;
      background: #fff;
      width: 100%;
      top : 0px;
      left: 0;
      z-index: 9;

      button {
        padding: 0.2em;
        font-size: 1.5rem;
        background: none;
        border: none;
        font-weight: 100;
        color: ${Colors.terteryColor};
      }
      .Title {
        flex: 1;
        padding: 0rem 0;
        h2 {
          text-align: center;
        }
      }
    }
    .extraWrapper {
      padding: 1rem 1rem;
      .extraContentWrapper {
        .extraContentCard {
          ${Flex};
          gap: 1rem;
          ${CardListStyle};

          img {
            width: 10rem;
            border-radius: inherit;
          }
          .extraContent {
            width: calc(100% - 10rem);
            justify-content: space-between;
            ${Flex};
            /* background: red; */
            padding: 1rem 0;
            .contentprice {
              font-size: 1.3rem;
              font-weight: 500;
            }
          }
        }
      }
      .amount_wrapper {
        padding: 1rem;
        .amount_div,
        .price_div {
          ${Flex};
          justify-content: space-between;
          font-size: 1.3rem;
          p:nth-child(2) {
            font-weight: 600;
          }
        }
        .price_div {
          p:nth-child(2) {
            color: ${Colors.primaryColor};
          }
        }
      }
    }
  }
  @media (max-width: 1023px) {
    padding: 0rem 7rem;
  }

  @media (max-width: 767px) {
    padding: 8rem 2rem 0 2rem;

    .model {
      padding: 0.1rem 0;
      .model_header {
        padding: 0.6rem 1rem;
        top : -2px;

        button {
          font-size: 1.5rem;
        }
        .Title {
          padding: 0rem 0;
          h2 {
            text-align: center;
            font-size: 1.3rem;
          }
        }
      }
      .extraWrapper {
        padding: 1rem 0.5rem;
        .extraContentWrapper {
          .extraContentCard {
            box-shadow: none;

            img {
              width: 6rem;
            }
            .extraContent {
              width: calc(100% - 6rem);
              /* background: red; */
              padding: 0.5rem 0;
              .ContentName{
                h3{
                  font-size: 1rem;
                }
                p{
                  font-size: .8rem;
                }
              }
              .contentprice {
                font-size: 1.1rem;
              }
            }
          }
        }
        .amount_wrapper {
          padding: .5rem 1rem;
          .amount_div,
          .price_div {
            font-size: 1.1rem;
            p:nth-child(2) {
              font-weight: 600;
            }
          }
          
        }
      }
    }
  }
  @media (max-width: 423px) {
    padding: 8rem 0rem 0 0;

    .model {
      padding: 0.1rem 0;
      .model_header {
        padding: 0.5rem 1rem;

        button {
          font-size: 1.2rem;
        }
        .Title {
          padding: 0rem 0;
          h2 {
            text-align: center;
            font-size: 1rem;
          }
        }
      }
      .extraWrapper {
        padding: 0rem 0rem;
        .extraContentWrapper {
          .extraContentCard {
            box-shadow: none;

            img {
              width: 5rem;
            }
            .extraContent {
              width: calc(100% - 5rem);
              /* background: red; */
              padding: 0rem 0;
              .ContentName{
                h3{
                  font-size: .9rem;
                }
                p{
                  font-size: .7rem;
                }
              }
              .contentprice {
                font-size: 1rem;
              }
            }
          }
        }
        .amount_wrapper {
          padding: .0rem .5rem;
          .amount_div,
          .price_div {
            font-size: .9rem;
            p:nth-child(2) {
              font-weight: 600;
            }
          }
          
        }
      }
    }
  }
`;
