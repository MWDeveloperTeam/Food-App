import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const CommonNav = (props) => {
  const {
    title,
    color,
    icon,
    fucn,
    color_right_icon,
    iconColor,
    style,
    icon1,
    pagelink,
  } = props;
  return (
    <>
    <Nav style={style}>
      <div>
        <Link to={pagelink} className="nav_back" style={{ color: iconColor }}>
          <IoIosArrowBack />
        </Link>
      </div>
      <div>
        <Link to="" className="" style={{ color: color, fontWeight: "500" }}>
          {title} {fucn()}
        </Link>
      </div>
      <div>
        <Link to="" className="" style={{ color: color_right_icon }}>
          {icon}
        </Link>
      </div>
    </Nav>
    <MarginComponent/>
    </>
  );
};

export default CommonNav;

export const MarginComponent = () => {
  return <div style={{ width: "100%", height: "3rem" }}></div>;
};

const Nav = styled.nav`
  /* background-color: red; */
  position: fixed;
  width: 100%;
  padding: 0.5rem 3rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-family: ${Fonts.primaryFont};
  > div {
    a {
      color: #000;
    }
    &:last-child {
      display: flex;
      gap: 1rem;
      /* background-color: red; */
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;
