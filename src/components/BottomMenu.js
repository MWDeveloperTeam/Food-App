import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineCompass } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const BottomMenu = () => {
  return (
    <Menu>
      <ul>
        <li>
          <Link to="/">
            <BiHomeAlt />
          </Link>
        </li>
        <li>
          <Link to="/nearrestaurant">
            <AiOutlineCompass />
          </Link>
        </li>
        <li>
          <Link to="/filterrestaurant">
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <BsBookmark />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <AiOutlineUser />
          </Link>
        </li>
      </ul>
    </Menu>
  );
};

export default BottomMenu;

const Menu = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #fff;
  box-shadow: 0.1rem 0 1rem #e6e6e6;
  border-radius: 4rem;
  ul {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 5rem;
    li {
      a {
        svg {
          color: ${Colors.terteryColor};
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
  ul {
    justify-content: space-around;
    gap: 0;
    li {
      a {
        svg {
          font-size: 1.2rem;
        }
      }
    }
  }
  }
`;
