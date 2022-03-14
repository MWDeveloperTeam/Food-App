import React from 'react'
import {Link} from "react-router-dom"
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { Constant } from "../../constants"
import styled from "styled-components";
import {Switch} from '@material-ui/core'


const { Colors, Flex, CardListStyle, Fonts, ButtonP,  Grid } = Constant;

const UserProfieContentList = ({title, iconStart, iconLast, pageLink}) => {
  return (
      <Section>
        <Link to={pageLink}>
            <span>{iconStart}</span>
            <div className="textContentDiv">
            {title}
            </div>
            <span>{iconLast}</span>
        </Link>
        </Section>
  )
}
export const UserNotificationList = ({title, iconStart, iconLast, pageLink}) => {
  return (
      <Section>
        <div>
            <span>{iconStart}</span>
            <div className="textContentDiv">
            {title}
            </div>
           <div>{iconLast}</div>
        </div>
        </Section>
  )
}

export default UserProfieContentList
const Section = styled.div`
/* padding: 1rem; */
a, >div{
  padding: .5rem 0;
    ${Flex};
    width: 100%;
    font-size: 1.2rem;
    gap: 1rem;
    .textContentDiv{
        flex:1;
        color: ${Colors.terteryColor2};
    }
    span{
        color: ${Colors.terteryColor2};
        ${Flex};

        svg{

            font-size: 1.5rem;
        }
&:first-child{
  color  :${Colors.primaryColor} ;
}

    }


}
@media(max-width: 767px){
  a, >div{
  padding: .3rem 0;
    font-size: 1rem;
    
    span{
        

        svg{

            font-size: 1.3rem;
        }


    }


}

}
@media(max-width: 423px){
  a, >div{
  padding: .3rem 0;
    font-size: .9rem;
    
    span{
        

        svg{

            font-size: 1.1rem;
        }


    }


}

}

`