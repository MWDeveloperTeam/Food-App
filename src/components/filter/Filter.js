import React from "react";
import styled from "styled-components";
import CommonNav from "../CommonNav";
import { AiFillStar } from "react-icons/ai";
import { Constant } from "../../constants";

const { Colors, Flex, CardListStyle, Fonts, ButtonP } = Constant;

const Filter = () => {
  const btnCatogary = [
    "dairy",
    "pizza",
    "breakfast",
    "soups",
    "salads",
    "burgar",
    "chicken",
    "meat",
  ];
  const Starbutton = {
    star:[1, 2, 3, 4, 5],
    price:["$", "$$", "$$$", "$$$", "$$$$"],
  
  };

  return (
    <Section>
      <div className="nav_div">
        <CommonNav
          title="filter"
          icon="reset"
          iconColor={Colors.secondaryColor}
          pagelink="/"
          fucn={()=> console.log()}
        />
      </div>

      <div className="category">
        <h2>category</h2>
        <div className="tabs_wrapper">
          <button>food</button>
          <button>drinks</button>
          <button>dessert</button>
        </div>
      </div>

      <div className="Foodgroups">
        <h2>food groups</h2>
        <div className="Food_groups_data">
          {btnCatogary.map((btn, i) => (
            <button key={i}>{btn}</button>
          ))}
        </div>
      </div>

      <div className="rating_div">
        <h2>rating</h2>
        <div className="star_button_wrapper">
          {Starbutton.star.map((star,i) => (
            <button key={i}>
              {star} <AiFillStar />
            </button>
          ))}
        </div>
      </div>
      <div className="price_range_wrapper">
      <h2>price range</h2>
      <div className="price_button_wrapper">
          {Starbutton.price.map((pric) => (
            <button>
              {pric}
            </button>
          ))}
        </div>
      </div>
      <div className="apply_filter">
        <button>Apply filter</button>
      </div>
            

    </Section>
  );
};

export default Filter;
const Section = styled.div`
  padding: 1rem;
  font-family: ${Fonts.primaryFont};
  .nav_div {
    /* padding: 1.5rem 0; */
  }
  .category, .Foodgroups, .rating_div, .price_range_wrapper   {
    padding: 1rem;
    h2 {
      font-weight: 500;
    }
  }

  .category{
    
    .tabs_wrapper {
      padding: 1rem;
      ${Flex};
      gap: 1rem;
      button {
        padding: 0.5em 2em;
        font-size: 1.2rem;
        background-color: ${Colors.terteryColor};
        border: none;
        border-radius: 0.5rem;
        &:active {
          background-color: ${Colors.primaryColor};
          color: #fff;
        }
      }
    }
  }
  .Foodgroups {
    
    .Food_groups_data {
      padding: 1rem;
      ${Flex};
      gap: 1rem;
      flex-wrap: wrap;
      button {
        padding: 0.5em 2em;
        font-size: 1.2rem;
        background-color: ${Colors.terteryColor};
        border: 1px solid ${Colors.primaryColor};
        border-radius: 0.5rem;
        &:active {
          background-color: ${Colors.primaryColor};
          color: #fff;
        }
      }
    }
  }
  
  .rating_div {
    
    .star_button_wrapper {
      ${Flex};
      padding: 1rem;
      gap: 1rem;

      button {
        ${Flex};
        gap: 0.5rem;
        background-color: ${Colors.terteryColor};
        font-size: 1.2rem;
        padding: 0.5em 2em;
        border: none;
        border-radius: 0.5rem;
        &:active {
          background-color: ${Colors.primaryColor};
          color: #fff;
        }
        svg {
          color: ${Colors.secondaryColor};
        }
      }
    }
  }

  .price_range_wrapper {
    
    .price_button_wrapper {
      ${Flex};
      padding: 1rem;
      gap: 1rem;

      button {
        ${Flex};
        gap: 0.5rem;
        background-color: ${Colors.terteryColor};
        font-size: 1.2rem;
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 50%;
        ${Flex};
        justify-content: center;
        color: ${Colors.terteryColor2};
        &:active {
          background-color: ${Colors.primaryColor};
          color: #fff;
        }
       
      }
    }
  }
  .apply_filter{
    padding: 1rem;
    ${Flex};
    justify-content: center;
    button{
      ${ButtonP};
      font-size: 1.2rem;
    max-width: 25rem;

    }
  }
  @media (max-width: 768px){
    padding: .5rem;
  .nav_div {
    /* padding: 1.5rem 0; */
  }
  .category, .Foodgroups, .rating_div, .price_range_wrapper   {
    padding: .5rem;
    h2 {
      font-weight: 500;
      font-size: 1.2rem;
    }
  }

  .category{
    
    .tabs_wrapper {
      padding: .5rem;
      gap: .5rem;
      button {
        font-size: .9rem;
      
      }
    }
  }
  .Foodgroups {
    
    .Food_groups_data {
      padding: .5rem;
      gap: .5rem;
      button {
        font-size: .9rem;
      }
    }
  }
  
  .rating_div {
    
    .star_button_wrapper {
      padding: .5rem;
      gap: .5rem;

      button {
        font-size: .8rem;
        padding: 0.5em 1em;
      }
    }
  }

  .price_range_wrapper {
    
    .price_button_wrapper {
      padding: .5rem;
      gap: .5rem;

      button {
        font-size: .9rem;
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .apply_filter{
    padding: .5rem;
    button{
      font-size: 1rem;
    width: 25rem ;

    }
  }

  }
  @media (max-width: 323px){
    padding: .4rem;
  .nav_div {
    /* padding: 1.5rem 0; */
  }
  .category, .Foodgroups, .rating_div, .price_range_wrapper   {
    padding: .4rem;
    h2 {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  .category{
    
    .tabs_wrapper {
      padding: 0rem;
      gap: .4rem;
      button {
        font-size: .7rem;
      
      }
    }
  }
  .Foodgroups {
    .Food_groups_data {
      padding: 0rem;
      gap: .4rem;
      button {
        font-size: .7rem;
      }
    }
  }
  
  .rating_div {
    
    .star_button_wrapper {
      padding: .4rem;
      gap: .4rem;

      button {
        font-size: .7rem;
        padding: 0.4em .7em;
        gap: .01rem;
      }
    }
  }

  .price_range_wrapper {
    
    .price_button_wrapper {
      padding: 0rem;
      gap: .5rem;

      button {
        font-size: .7rem;
        width: 2rem;
        height: 2rem;
      }
    }
  }
  .apply_filter{
    padding: 0rem;
    button{
      font-size: .9rem;
    width: 100% ;

    }
  }

  }

`;
