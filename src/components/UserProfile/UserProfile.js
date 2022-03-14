import React from "react";
import CommonNav from "../CommonNav";
import styled from "styled-components";
import { Constant } from "../../constants";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { GiCoffeeBeans } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import MyAccount from "./MyAccount";

const { Colors, Flex, CardListStyle, Fonts, ButtonP,Grid } = Constant;

const UserProfile = () => {
  return (
    <Section>
      <CommonNav
        title="profile"
        pagelink="/"
        icon={<IoNotificationsOutline />}
        color="#fff"
        iconColor="#fff"
        fucn={()=> console.log()}
      />
      <div className="Primary_background"></div>
      <div className="userDetail">
        <div className="userImage">
          <img
            src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740"
            alt=""
          />
        </div>
        <div className="UserName">
          <p>Muneeb bhat</p>
          <p>1254663@Gmail.com</p>
        </div>
      </div>
      <div className="deliveryAddressWrapper">
        <div className="delivery_address">
          <div className="order">
            <span><FiTruck /></span>
            <p>my all oraders</p>
          </div>
          <div className="promos">
            <span><GiCoffeeBeans /></span>
            <p>offer and promos</p>
          </div>
          <div className="address">
            <span><GoLocation /></span>
            <p>delivery address</p>
          </div>
        </div>
      </div>
      <MyAccount/>
    </Section>
  );
};

export default UserProfile;
const Section = styled.section`
  padding: 1rem 3rem;
  /* background-color: green; */
  .Primary_background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 30rem;
    border-radius: 0% 0% 50% 50% / 0% 0% 15% 15%;
    background-color: ${Colors.primaryColor};
  }
  .userDetail {
    padding: 3rem;
    ${Flex};
    gap: 2rem;
    .userImage {
      border: 3px solid #f2f2f2;
      border-radius: 50%;
      ${Flex};
      justify-content: center;
      img {
        width: 10rem;
        border-radius: inherit;
        object-fit: cover;
      }
    }
    .UserName {
      p {
        color: #fff;
        font-size: 1.4rem;
        &:last-child {
          font-size: 1rem;
        }
      }
    }
  }
  .deliveryAddressWrapper{
    padding: 1rem 3rem;
    .delivery_address {
    ${CardListStyle};
    background-color: #fff;
    ${Flex};
    justify-content  : space-around ;
  }
.order,
.promos,
.address{
width: 5rem;

text-align: center;
span{
  padding: 1.5rem 0;
  border-radius: 50%;
  ${Grid};
  svg{
  font-size: 1.5rem;
}
}
}
.order{
span{
  color:${Colors.primaryColor};
    background-color: rgba(10, 136, 145, 0.288);
}  
  }
.promos{
span{
  color: rgba(255, 0, 0, 0.644);
    background-color: rgba(255, 0, 0, 0.244);
}  
  }
.address{
span{
  color: ${Colors.secondaryColor};
  background-color: rgba(251, 168, 60, 0.525);
}  
  }
 

  }
  @media(max-width: 1024px){
    padding: .5rem 3rem;
  .Primary_background {
    height: 25rem;
    border-radius: 0% 0% 50% 50% / 0% 0% 15% 15%;
  }
  .userDetail {
    padding: 1.5rem 3rem;
    gap: 2rem;
    .userImage {
      border: 3px solid #f2f2f2;
      img {
        width: 10rem;
      }
    }
    .UserName {
      p {
        font-size: 1.4rem;
        &:last-child {
          font-size: 1rem;
        }
      }
    }
  }
  .deliveryAddressWrapper{
    padding: .5rem 3rem;
    .delivery_address {
  }
.order,
.promos,
.address{
width: 5rem;
span{
  padding: 1.5rem 0;
  ${Grid};
  svg{
  font-size: 1.5rem;
}
}
}
.order{
span{
    background-color: rgba(10, 136, 145, 0.288);
}  
  }
.promos{
span{
  color: rgba(255, 0, 0, 0.644);
    background-color: rgba(255, 0, 0, 0.244);
}  
  }
.address{
span{
  background-color: rgba(251, 168, 60, 0.525);
}  
  }
 

  }
}

  @media(max-width: 767px){
    padding: 0;
  .Primary_background {
    height: 20rem;
  }
  .userDetail {
    padding:  1rem;
    gap: 2rem;
    .userImage {
      border: 3px solid #f2f2f2;
      img {
        width: 7rem;
      }
    }
    .UserName {
      p {
        font-size: 1.2rem;
        &:last-child {
          font-size: .9rem;
        }
      }
    }
  }
  .deliveryAddressWrapper{
    padding: .5rem 1rem;
    .delivery_address {
  }
.order,
.promos,
.address{
width: 4rem;
p{
  font-size: .85rem;
}
span{
  padding: 1.1rem 0;
  margin-bottom: .5rem;
  svg{
  font-size: 1.3rem;
}
}
}

  }
}
  @media(max-width: 423px){
    padding: 0;
  .Primary_background {
    height: 15rem;
  }
  .userDetail {
    padding:  .5;
    gap: 1rem;
    .userImage {
      border: 3px solid #f2f2f2;
      img {
        width: 5rem;
      }
    }
    .UserName {
      p {
        font-size: 1rem;
        &:last-child {
          font-size: .65rem;
        }
      }
    }
  }
  .deliveryAddressWrapper{
    padding: 0 .5rem;
    .delivery_address {
  }
.order,
.promos,
.address{
width: 3.5rem;
p{
  font-size: .7rem;
}
span{
  padding: 1rem 0;
  margin-bottom: .3rem;
  svg{
  font-size: 1.1rem;
}
}
}

  }
}

`
