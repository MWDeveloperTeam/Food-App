import React from "react";
import styled from "styled-components";
import { IoReload } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Constant } from "../../constants/index";
const { Fonts, Colors } = Constant;

const styles = {
width: '100%',
height: '80vh',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
fontSize: '2rem',
color: '#aaa'
}

const OrderCard = ({ orderDatas }) => {
  return (
    <>
      {orderDatas.length === 0 ? (
        <div style={styles}>
          <div style={{textAlign: 'center'}}>
            <div><AiOutlineShoppingCart fontSize={150}/></div>
            <div>Empty</div>
          </div>
        </div>
      ) : (
        <Card>
          {orderDatas.map((data, i) => (
            <div className="card_main" key={i}>
              <div className="content_wrapper">
                <div className="image_wrapper">
                  <img src={data.img} alt="" />
                </div>
                <div className="content_data_wrapper">
                  <div className="title_wrapper">
                    <span>{data.tabTitle}</span>
                    <span>${data.price}.00</span>
                  </div>
                  <div className="data_wrapper">
                    <span>{data.data}</span>
                  </div>
                </div>
              </div>
              <div className="action_wrapper">
                <button>
                  <IoReload /> Reorder
                </button>
                <button>Get Help</button>
              </div>
            </div>
          ))}
        </Card>
      )}
    </>
  );
};

export default OrderCard;

const Card = styled.div`
  padding-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  font-family: ${Fonts.primaryFont};
  border-radius: 0.4rem;
  .card_main {
    width: 20rem;
    padding: 0.4rem;
    background-color: #fff;
    box-shadow: 0 0.1rem 1rem #e5e5e5;
    .content_wrapper {
      /* background-color: red; */
      display: flex;
      gap: 0.5rem;
      width: 100%;
      .image_wrapper {
        width: 30%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.4rem;
        }
      }

      .content_data_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 70%;
        /* background-color: green; */
        color: #aaa;
        .title_wrapper {
          display: flex;
          justify-content: space-between;
          font-weight: 500;
          span {
            &:first-child {
              color: #000;
              font-weight: bold;
              letter-spacing: 0.02rem;
            }
            &:last-child {
              color: ${Colors.secondaryColor};
            }
          }
        }
      }
    }

    .action_wrapper {
      /* background-color: red; */
      padding: 0.5rem 0;
      display: flex;
      gap: 1rem;
      button {
        width: 50%;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        color: #aaa;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        border-radius: 0.3rem;
        justify-content: center;
        font-weight: 500;
        font-size: 1rem;
        &:first-child {
          background-color: ${Colors.primaryColor};
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    justify-content: inherit;
    flex-direction: column;
    .card_main {
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    .card_main {
      .content_wrapper {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        .image_wrapper {
          width: 5rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.4rem;
          }
        }

        .content_data_wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: calc(100% - 5rem);
          /* background-color: green; */
          color: #aaa;
          .title_wrapper {
            display: flex;
            justify-content: space-between;
            span {
              &:last-child {
                color: ${Colors.secondaryColor};
              }
            }
          }
        }
      }

      .action_wrapper {
        /* background-color: red; */
        padding: 0.5rem 0;
        display: flex;
        gap: 1rem;
        button {
          width: 50%;
          padding: 0.5rem 1rem;
          border: none;
          cursor: pointer;
          color: #aaa;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          border-radius: 0.3rem;
          justify-content: center;
          font-weight: 500;
          font-size: 1rem;
          &:first-child {
            background-color: ${Colors.primaryColor};
            color: #fff;
          }
        }
      }
    }
  }
`;
