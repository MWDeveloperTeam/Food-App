import React from "react";
import styled from "styled-components";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SliderDemo from "./components/SliderDemo";
import MyCart from "./components/MyCart";
import CommonNav from "./components/CommonNav";
import IncreDecrement from "./components/IncreDecrement";
import MyPaymentCard from "./components/MyPaymentCard";
import BottomMenu from "./components/BottomMenu";
import NearRestaurant from "./components/NearRestaurant";
import FilterRestaurant from "./components/FilterRestaurant";
import PreOrder from "./components/Orders/PreOrder";
import Profile from "./components/profile/Profile";

// Muneeb Files

import OpenComponent from "./components/openComponent/OpenComponent";
import FoodChoiceIndex from "./components/FoodChooice/FoodChoiceIndex";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import Welcome from "./components/welcomepage/welcome";
import Filter from "./components/filter/Filter";
import Reviews from "./components/reviews/Revivews";
import UserProfile from "./components/UserProfile/UserProfile";
import { Constant } from "./constants";
const { Fonts, } = Constant;

const App = () => {
  return (
    <BrowserRouter>
      <Section>
        <Routes>
          <Route path="/slider" element={<SliderDemo />} />
          <Route path="/" element={<Header />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route
            path="/commonnav"
            element={<CommonNav fucn={() => console.log()} />}
          />
          <Route path="/counter" element={<IncreDecrement />} />
          <Route path="/paymentmethod" element={<MyPaymentCard />} />
          <Route path="/nearrestaurant" element={<NearRestaurant />} />
          <Route path="/filterrestaurant" element={<FilterRestaurant />} />
          <Route path="/orders" element={<PreOrder />} />
          <Route path="/profile" element={<Profile />} />

          {/* Muneeb Router Files */}
          <Route path="/open" element={<OpenComponent />} />
          <Route path="/choice" element={<FoodChoiceIndex />} />
          <Route path="/payment" element={<PaymentMethod/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/filter" element={<Filter/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
        </Routes>
        <BottomMenu />
      </Section>
    </BrowserRouter>
  );
};

export default App;

const Section = styled.div`
  font-family: ${Fonts.primaryFont};
`;
