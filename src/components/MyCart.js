import React, { useState, useContext } from "react";
import CommonNav from "./CommonNav";
import styled from "styled-components";
import { IoNotificationsOutline } from "react-icons/io5";
import IncreDecrement from "./IncreDecrement";
import { Constant } from "../constants";
import CheckoutCart from "./CheckoutCart";
import { Store } from "../Store";
const { Fonts, Colors } = Constant;

const MyCart = () => {
  const {toggle, setToggle} = useContext(Store)
  const [itemValue, setItemValue] = useState(0);

  const getItemValue = (e) => {
    setItemValue(e)
  };

  const example = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Section>
      <CommonNav title="My Cart" color="#000" icon={<IoNotificationsOutline />} fucn={()=> console.log('My Cart ')} pagelink='/choice'/>
      <CheckoutCart/>
    </Section>
  );
};

export default MyCart;

const Section = styled.section`
  width: 100%;
  height: auto;
  background-color: #fff;
`;
