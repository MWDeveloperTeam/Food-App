import React, { useState } from "react";
import styled from "styled-components";
import { IoNotificationsOutline } from "react-icons/io5";
import { tabsApi } from "../../CardApi";
import CommonNav from "../CommonNav";
import { Constant } from "../../constants/index";
import OrderCard from "./OrderCard";
const { Fonts, Colors } = Constant;

const PreOrder = () => {
  const [navTitle, setNavTitle] = useState("Orders");
  const [tabsData, setTabsData] = useState([tabsApi[1]]);
  const [color, setColor] = useState(1);
  const tabs_title = {
    tabs: ["Pr-Orders", "oncoming", "History"],
  };

  const getTabData = (tab, text) => {
    const filteredTabsApi = tabsApi.filter((flTab) => {
      return flTab.id === tab;
    });
    setTabsData(filteredTabsApi);
    if (text === "Pr-Orders") {
      setNavTitle("My Orders");
    } else {
      setNavTitle(text);
    }
  };

  return (
    <OrdersSection>
      <div className="nav_wrapper">
        <CommonNav
          fucn={() => console.log()}
          title={navTitle}
          icon={<IoNotificationsOutline />}
          pagelink='/'
        />
      </div>
      <div className="tabs_container">
        {tabs_title.tabs.map((tab, i) => {
          return (
            <div
              className="tab"
              id={i}
              key={i}
              onClick={(e) => {
                getTabData(i, tab);
                setColor(i);
              }}
              style={
                color === i
                  ? {
                      borderBottom: `2px solid ${Colors.primaryColor}`,
                      color: Colors.primaryColor,
                      fontWeight: "500",
                    }
                  : null
              }
            >
              {tab}
            </div>
          );
        })}
      </div>

      <div className="tab_content_container">
        {tabsData?.map((data, i) => (
          <React.Fragment key={i}>
            <OrderCard key={i} orderDatas={data.orderData} />
          </React.Fragment>
        ))}
      </div>
    </OrdersSection>
  );
};

export default PreOrder;

const OrdersSection = styled.section`
  font-family: ${Fonts.primaryFont};
  .nav_wrapper {
    /* background-color: red; */
  }
  .tabs_container {
    display: flex;
    padding: 1.5rem 3rem;
    gap: 1rem;
    justify-content: center;
    color: #aaa;
    .tab {
      padding: 0.5rem 1rem;
      font-size: 1.1rem;
      cursor: pointer;
      letter-spacing: 0.05rem;
    }
  }

  .tab_content_container {
    padding: 1rem 3rem;
  }

  @media (max-width: 768px) {
    .tabs_container {
      display: flex;
      padding: 0 0.5rem;
      gap: 0rem;
      justify-content: space-around;
      color: #aaa;
      .tab {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        letter-spacing: 0.05rem;
      }
    }

    .tab_content_container {
      padding: 1rem 0.5rem;
    }
  }

  @media (max-width: 380px) {
    .tabs_container {
      display: flex;
      padding: 0 0.5rem;
      gap: 0rem;
      justify-content: space-around;
      color: #aaa;
      .tab {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
        cursor: pointer;
        letter-spacing: 0.05rem;
      }
    }

    .tab_content_container {
      padding: 1rem 0.5rem;
    }
  }
`;
