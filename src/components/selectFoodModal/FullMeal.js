import React, { useState } from "react";
import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import ColaIcon from "../../media/cola.jpg";
import FrenchFriesIcon from "../../media/french.jpg";
import { Constant } from "../../constants";

const { Colors, Flex, CardListStyle } = Constant;

const FullMeal = () => {
  
  const example = [0, 1, 2, 3];
  const example1 = [0, 1, 2, 3];
  const [checkIcon, setCheckIcon] = useState([]);
  const [checkBeverage, setBeverageIcon] = useState([]);

  const toggleIconCheck = (index, e) => {
    const ckeckdublicate = checkIcon.includes(index);
    if (!ckeckdublicate) {
      setCheckIcon([...checkIcon, index]);
    } else if (ckeckdublicate) {
      const updatedEle = checkIcon.filter((elem) => {
        return index !== elem;
      });
      setCheckIcon(updatedEle);
    }
  };

  const toggleIconBeverage = (index, e) => {
    const beindex = index + 5
    const ckeckdublicate = checkBeverage.includes(beindex);
    if (!ckeckdublicate) {
      setBeverageIcon([...checkBeverage, beindex]);
    } else if (ckeckdublicate) {
      const updatedEle = checkBeverage.filter((elem) => {
        return beindex !== elem;
      });
      setBeverageIcon(updatedEle);
    }

  };

  return (
    <Section>
      <p>sides</p>
      <div className="sidesCardsDiv">
        {example.map((ex, i) => (
          <div className="cardIcon" key={i}>
            <input
              type="checkbox"
              name={i}
              id={i}
              value={checkIcon}
              onChange={(e) => toggleIconCheck(i, e)}
            />

            <label htmlFor={i}>
              <img src={FrenchFriesIcon} alt="" />
            </label>
            {checkIcon.includes(i) ? (
              <div>
                <GiCheckMark />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <p>beverages</p>
      <div className="beverageDiv">
        {example1.map((ex, i) => (
          <div className="cardIcon" key={i + 5}>
            <input
              type="checkbox"
              name={i + 5}
              id={i + 5}
              value={checkIcon}
              onChange={(e) => toggleIconBeverage(i, e)}
            />
            <label htmlFor={i + 5}>
              <img src={ColaIcon} alt="" />
            </label>
            {checkBeverage.includes(i + 5) ? (
            <div>
              <AiOutlinePlus />
            </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FullMeal;
const Section = styled.section`
  padding: 0 1rem;
  p {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .sidesCardsDiv,
  .beverageDiv {
    ${Flex};
    justify-content: space-around;
    padding: 1.5rem 0;
    .cardIcon {
      ${CardListStyle};
      position: relative;
      width: 10rem;
      height: 10rem;
      input{
        display: none;
      }
      label {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        top: 0;
        left: 0;
        img {
          width: inherit;
          height: inherit;
          object-fit: cover;
          border-radius: inherit;
          position: absolute;
          top: 0;
          left: 0;
        }
      }

      div {
        position: absolute;
        bottom: 0rem;
        right: 0rem;
        background-color: ${Colors.secondaryColor};
        padding: 1rem 0.5rem 0.2rem 1rem;
        border-radius: 100% 0 1rem 0;
        color: #fff;
      }
    }
  }
  @media (max-width: 1024px) {
    p {
      font-size: 1.1rem;
    }
    .sidesCardsDiv,
    .beverageDiv {
      justify-content: space-around;
      padding: 1.3rem 0;
      .cardIcon {
        width: 8rem;
        height: 8rem;

        div {
          padding: 1rem 0.5rem 0.2rem 1rem;
          border-radius: 100% 0 1rem 0;
        }
      }
    }
  }
   @media (max-width: 767px) {
  padding: .5rem 0;
    p {
      font-size: 1.1rem;
    }
    .sidesCardsDiv,
    .beverageDiv {
      justify-content: space-around;
      padding: 1.1rem 0;
      .cardIcon {
        width: 5rem;
        height: 5rem;

        div {
          padding: .5rem 0.3rem 0rem .5rem;
          border-radius: 100% 0 1rem 0;
          svg{
            font-size: .8rem;
          }
        }
      }
    }

   }
   @media (max-width: 520px) {
  padding: 0;

    p {
      font-size: .9rem;
    }
    .sidesCardsDiv,
    .beverageDiv {
      justify-content: space-around;
      padding: .5rem 0;
      .cardIcon {
        width: 3rem;
        height: 3rem;

        div {
          padding: .2rem 0.3rem 0rem .3rem;
          border-radius: 100% 0 1rem 0;
          svg{
            font-size: .6rem;
          }
        }
      }
    }

   }
`;
