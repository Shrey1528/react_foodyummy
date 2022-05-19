import React from 'react'
import styled from 'styled-components';
import hero from '../assets/hero.jpg'
import heroDesign from '../assets/HeroDesign.png';

export default function Hero() {
  return (
    <HeroStyled id="home">
      <div className="background">
        <img src={hero} alt="Nackgroun Image" />
      </div>
      <div className="content">
        <div className="sale">
          <img src={heroDesign} alt="Hero Design" />
          <h1>BIG SALE <span>50% OFF</span></h1>
        </div>
        <div className="info">
          <h2>RETAILER</h2>
          <em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ipsum.</em>
          <button>ORDER NOW</button>
        </div>
      </div>
    </HeroStyled>
  )
}

const HeroStyled = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background{
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(60%);
    }
  }
  .content{
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale{
      position: relative;
      left: 10%;
      img{
        height: 70vh;
      }
      h1{
        color: white;
        position: absolute;
        top: 25vh;
        left: 15vh;
        font-size: 5.5rem;
        span{
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info{
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2{
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em{
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
      }
      button{
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #fc4958;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        cursor: pointer;
        border-radius: 20px;
        transition: all .3s ease-in-out;
        &:hover{
          background-color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px){
    .content{
      flex-direction: column;
      .sale{
        display: none;
      }
      .info{
        top: 25%;      
        h2{
          font-size: 2rem;
        }
        em{
          width: 90%;
        }
      }
    }
  }
`;