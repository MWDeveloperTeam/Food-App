import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;
const HomeNav = () => {
  return (
    <Section>
      <ul>
        <li>
          <Link to="">Recent</Link>
        </li>
        <li>
          <Link to="">Favourite</Link>
        </li>
        <li>
          <Link to="">Ratings</Link>
        </li>
        <li>
          <Link to="">Popular</Link>
        </li>
        <li>
          <Link to="">Trending</Link>
        </li>
        <li>
          <Link to="">Burger</Link>
        </li>
        <li>
          <Link to="">Coffee</Link>
        </li>
        <li>
          <Link to="">Pizza</Link>
        </li>
        <li>
          <Link to="">Drinks</Link>
        </li>
      </ul>
    </Section>
  );
};

export default HomeNav;

const Section = styled.section`
  width: 100%;
  height: 3rem;
  font-family: ${Fonts.primaryFont};
  margin: 1rem 0;
  overflow-y: auto;
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    justify-content: center;
    font-size: 1rem;
    li {
      a {
        color: ${Colors.terteryColor};
        transition: 0.3s linear;
        &:hover,
        &:focus {
          color: initial;
          border-bottom: 1px solid ${Colors.secondaryColor};
          padding-bottom: 0.3rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 1rem;
    ul {
      justify-content: initial;
      gap: 0.8rem;
      font-size: .9rem;
    }
  }
`;
