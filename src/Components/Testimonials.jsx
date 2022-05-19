import React from 'react'
import styled from 'styled-components'
import avatar1 from '../assets/avatar1.jpg';
import {imageZoomeffect, TitleStyles} from './ReusableStyles'

export default function Testimonials() {
  return (
    <TestimonialsStyled id="testimonials">
        <div className="container">
          <div className="title">
            <h1><span>What</span> Customers Says</h1>
          </div>
          <div className="testimonials">
            <div className="testimonial">
              <div className="image">
                <img src={avatar1} alt="" />
              </div>
              <p>
                He Printing and Typesetting the industry. <span>Lorem ipsum</span>{" "}
                has been the Industry's
              </p>
            </div>
            <div className="testimonial">
              <div className="image">
                <img src={avatar1} alt="" />
              </div>
              <p>
                He Printing and Typesetting the industry. <span>Lorem ipsum</span>{" "}
                has been the Industry's
              </p>
            </div>
            <div className="testimonial">
              <div className="image">
                <img src={avatar1} alt="" />
              </div>
              <p>
                He Printing and Typesetting the industry. <span>Lorem ipsum</span>{" "}
                has been the Industry's
              </p>
            </div>
          </div>
        </div>
    </TestimonialsStyled>
  )
}

const TestimonialsStyled = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958,#e85d04);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container{
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title{
      position: absolute;
      top: -1rem;
      left: 30%;
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      background-color: white;
      margin-top: 3vw;
      .testimonial{
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p{
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
        }
        ${imageZoomeffect};
        .image{
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          border: 1px solid black;
          img{
            height: 10rem;
          }          
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px){
    .container{
      .title{
        position: initial;
        background-color: transparent;
      }
      .testimonials{
        flex-direction: column;
      }
    }
  }
`;
