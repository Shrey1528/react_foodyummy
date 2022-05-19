import React from 'react'
import styled from 'styled-components';
import services1 from '../assets/Services1.png';
import services2 from '../assets/Services2.png';
import services3 from '../assets/Services3.png';
import {TitleStyles} from './ReusableStyles';

export default function Services() {
  return (
    <ServicesStyled id="services">
      <div className="title">
        <h1 className="yellow">What we do ?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe! Esse pariatur delectus alias provident nesciunt libero corporis excepturi quibusdam.</p>
      </div>
      <div className="services">
        <div className="service">
          <img src={services2} alt="Service Image" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem ipsum</span>{" "}
            has been the Industry's
          </p>
          <button>Read More</button>
        </div>
        <div className="service yellow">
          <img src={services1} alt="Service Image" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem ipsum</span>{" "}
            has been the Industry's
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={services3} alt="Service Image" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem ipsum</span>{" "}
            has been the Industry's
          </p>
          <button>Read More</button>
        </div>
      </div>
    </ServicesStyled>
  )
}

const ServicesStyled = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img{
        height: 2.8rem;
      }
      p{
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        span{
            color: #fc4958;
        }
      }
      button{
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover{
          background-color: #f9c74f;
        }
      }
    }
    .yellow{
      button{
        background-color: #f9c74f;
        &:hover{
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px){
    margin: 2rem;
    .services{
      grid-template-columns: 1fr;
    }
  }
`;