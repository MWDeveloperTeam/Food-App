import React from 'react'
import styled from 'styled-components'
import backgroundimg from "../../media/welcome.jpg"
import { Constant } from "../../constants";
import CheckoutModel from '../chechoutmodel/CheckoutModel';

const {  Colors, Flex,  } = Constant;

const Welcome = () => {
  return (<>
    <WelcomeDiv>welcome</WelcomeDiv>
    <CheckoutModel/>
    </>
  )
}

export default Welcome
const WelcomeDiv = styled.div`
/* background : url(${backgroundimg}) ${Colors.primaryColor}; */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-blend-mode: darken;
width: 100vw;
height: 100vh;
${Flex}

`