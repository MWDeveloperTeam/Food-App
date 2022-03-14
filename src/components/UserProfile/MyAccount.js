import React,{useState} from 'react'
import styled from "styled-components";
import { Constant } from "../../constants"
import UserProfieContentList, {UserNotificationList} from './UserProfieContentList';
// import {Link} from "react-router-dom"
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { ImClipboard } from "react-icons/im";
import {Switch} from '@material-ui/core'



const { Colors, Flex, CardListStyle, Fonts, ButtonP,Grid } = Constant;

const MyAccount = () => {
  const [notificationVlaue, setNotificationValue] = useState(false);
  const [PnotificationVlaue, setPNotificationValue] = useState(false);

  return (
    <Section>
    <div className="myAccountDiv">
      <div className="my_account">
        <h1>my account</h1>
        <UserProfieContentList title="manage profile" pageLink="/" iconStart={ <AiOutlineUser/>} iconLast={<IoIosArrowForward/>}/>
        <UserProfieContentList title="payment" pageLink="/" iconStart={ <MdPayment/>} iconLast={<IoIosArrowForward/>}/>
      </div>
      <div className="Notification">
      <h1>notification </h1>
      
      <UserNotificationList title="notification" pageLink="/" iconStart={ <IoNotificationsOutline/>} iconLast={<Switch color="primary" size="small" onChange={(e) =>setNotificationValue(e.target.checked) }/>}/>
      <UserNotificationList title="promotional notification" pageLink="/" iconStart={ <IoNotificationsOutline />} iconLast={<Switch color="primary" size="small" onChange={(e) =>setPNotificationValue(e.target.checked) }/>}/>

      </div>
      <div className="more">
      <h1>more </h1>
      
      <UserNotificationList title="theme mode" pageLink="/" iconStart={ <ImClipboard/>} iconLast={<IoIosArrowForward/>}/>
      <UserNotificationList title="log out" pageLink="/" iconStart={ <HiOutlineLogin />}/>

      </div>
    </div>
    </Section>
  )
}

export default MyAccount
const Section = styled.section`
padding: 1rem 3rem;

.myAccountDiv{
  ${CardListStyle};
background-color: #fff;
.my_account,.Notification, .more{
  h1{
    padding: 1rem 0;

  }
}


}
@media(max-width: 1024px){
  padding: 0rem 3rem;

.myAccountDiv{
  ${CardListStyle};
background-color: #fff;
.my_account,.Notification, .more{
  h1{
    padding: 1rem 0;

  }
}


}
}
@media(max-width: 767px){
  padding: 0rem 1rem;

.myAccountDiv{
  ${CardListStyle};
background-color: #fff;
.my_account,.Notification, .more{
  h1{
    padding: 1rem 0;

  }
}


}
}
@media(max-width: 423px){
  padding: 0rem .5rem;

.myAccountDiv{
  ${CardListStyle};
background-color: #fff;
.my_account,.Notification, .more{
  h1{
    padding: .5rem 0;
    font-size: 1rem;

  }
}


}
}



`

