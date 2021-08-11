import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel1.css";
export default function Carousel1() {
    return (
        <div className="carousel1">
         
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 home__image"
              src="https://img.global.news.samsung.com/in/wp-content/uploads/2020/10/Master-banner-Horizontal.jpg"
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 home__image"
              src="https://www.bajajfinservmarkets.in/content/dam/emistoremarketplace/index/11-02-21/hd/Slider_Hot_Deals_1402x500.jpg"
              alt="Image Three"
            />
          </Carousel.Item>
        </Carousel>
      </div> 
 
      
    )
}

