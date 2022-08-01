import React from 'react';
import styled from 'styled-components';
import PText from '../../components/section/PText';


import AboutInfoItem from '../../components/section/AboutInfoItem';
import Listing from '../../components/Listing/PlaceToVisit';


const AboutPageStyles = styled.div`
  padding: 10rem 0 5rem 0;
  margin:5rem;
  color:white;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2rem;
    margin-top: 5rem;
    text-align:center;
    margin-bottom: 0.5rem;
  }
  .about__heading {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .about__info {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 5px solid gray;
      height:100%;
      width:400px;
    }
  }
 
  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }  
    .about__heading {
      font-size: 3rem;
    }
    .about__info__heading {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container" id='about'>
          <div className="top-section">
            <div className="left">             
              <h2 className="about__heading">ABOUT US</h2>
              <div className="about__info">                
                We help transform companies, places and brands by positioning them for growth.
                 We leverage data, insights, business acumen and design-thinking to establish a precise brand purpose 
                 and we ensure that that purpose is embedded across all touch-points. We design products, culture, 
                 communications and experiences to deliver impactful messages.
                 Because we believe purpose-driven brands can move people, create culture and transform businesses.
                  <br /> <br />
                 Royal Realty was founded in 2009, on the belief that the integrated agency model lacks focus,
                   and that modern marketers require experts, not generalists. We're part of an independent network of companies that deliver specialized services, 
                  and we're backed by innovative studios to create digitally driven content for brands and agencies alike.
                  <br />              
                
              </div>
             
            </div>
            <div className="right">
              <img src='https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg' alt="me" />
            </div>
          </div>
         
        </div>
        <p className="about__subheading">WE HAVE</p>
        <Listing/>
      </AboutPageStyles>
    </>
  );
}