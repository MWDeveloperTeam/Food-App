import React, { useState } from "react";
import styled from "styled-components";
import { Constant } from "../constants";
const { Fonts, Colors } = Constant;

const IncreDecrement = ({ valueFunc }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <Box>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment} className='incre_btn'>+</button>
    </Box>
  );
};

export default IncreDecrement;

const Box = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f2f2f2;
  padding: 0 0.5rem;
  border-radius: 0.3rem;
  font-weight: bold;
  font-size: 0.9rem;
  button {
    background: #f2f2f2; 
    border: none;
    padding: 0.0001rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .incre_btn {
    color: ${Colors.secondaryColor};
  }
`;
