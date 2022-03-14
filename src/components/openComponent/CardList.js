import React, {useState} from "react";
import styled from "styled-components";
import { Constant } from "../../constants";
import listImage from "../../media/listContent.jpg";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai"; 

const { Colors, Flex, CardListStyle,  } = Constant;

const CardList = ({value}) => {
 
  const setCountValue = () =>{
    
    value(true)
  } 
  const [openCount, setOpenCount] = useState(0)
  
  const getCounterTocard= () =>{
    
  }
  return (
    <Section>
      <div className="card_list">
        <div className="card_list_icon" onClick={setCountValue}>
          <img src={listImage} alt="" />
        </div>
        <div className="card_list_content">
          <h1>chicken burger</h1>
          <p>sandwich features two savory flame-grilled beef patties</p>
          <div className="card_Price_Tag">
            <h3>$ 15.00</h3>
            <button>
              <AiOutlineMinusCircle className="add_Icon" />
            </button>
            <span>{openCount}</span>
            <button>
              <AiFillPlusCircle className="add_Icon" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CardList;
const Section = styled.div`
  .card_list {
    ${CardListStyle}

    .card_list_icon {
      height: 10rem;
      width: 15rem;
      img {
        height: inherit;
        width: inherit;
        border-radius: 1rem;
        object-fit: cover;
      }
    }
    .card_list_content {
      width: 15rem;
      padding: 1rem 0.2rem;
      text-transform: capitalize;
      h1 {
        color: ${Colors.helperColor};
        font-size: 1.3rem;
      }
      p {
        margin: 0.7rem 0;
        color: ${Colors.terteryColor2};
        font-size: 0.9rem;
      }
      .card_Price_Tag {
        ${Flex};
        justify-content: space-between;
        gap: 1rem;
        color: ${Colors.secondaryColor};
        h3 {
          flex: 3;
          font-size: 1.3rem;
        }
        button {
          font-size: 1.7rem;
          align-self: baseline;
          align-self: center;
          justify-self: center;
          border: none;
          background-color: transparent;
          ${Flex}
          cursor: pointer;
          &:last-of-type {
            color: ${Colors.secondaryColor};
          }
          &:first-of-type {
            color: ${Colors.terteryColor};
          }
        }
        span {
          color: ${Colors.helperColor};
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .card_list {
      .card_list_icon {
        height: 10rem;
        width: 15rem;
       
      }
      .card_list_content {
        
        p {
          margin: 0.5rem 0;
          
        }
        .card_Price_Tag {
         
          h3 {
            font-size: 1.2rem;
          }
          button {
            font-size: 1.5rem;
          }
          span {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
  @media (max-width: 767px){
    .card_list {
      ${Flex}
      width: 100%;
      gap: .5rem;
    .card_list_icon {
      height: 6rem;
      width: 6rem;
      
    }
    .card_list_content {
      width: calc(100% - 6rem);
      padding: .5rem 0.2rem;
      h1 {
        font-size: 1.1rem;
      }
      p {
        margin: 0rem 0;
        font-size: 0.9rem;
      }
      .card_Price_Tag {
        gap: .5rem;
        h3 {
          font-size: 1rem;
        }
        button {
          font-size: 1rem;
        }
        span {
          color: ${Colors.helperColor};
          font-size: 1rem;
        }
      }
    }
  } 
}
@media (max-width: 423px){
  .card_list {
      gap: .5rem;
    .card_list_icon {
      height: 5rem;
      width: 5rem;
      
    }
    .card_list_content {
      width: calc(100% - 5rem);
      padding: .5rem 0.2rem;
      h1 {
        font-size: .9rem;
      }
      p {
        font-size: 0.75rem;
      }
      .card_Price_Tag {
        gap: .3rem;
        h3 {
          font-size: .8rem;
        }
        button {
          font-size: 1rem;
        }
        span {
          font-size: .75rem;
        }
      }
    }
  } 
}
`;
