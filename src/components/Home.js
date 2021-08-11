import "./Home.css";
import React from 'react';
import Carousel1 from "./Carousel1";
import Product from "./Product.js"

export default function Home() {
    return (
        <div className="home">

         <Carousel1/>

       <div className="home__row">
          <Product
            id="90829332"
            title="AmazonBasics 23 L Convection Microwave (Black)"
            price={8499}
            rating={4}
            image="https://m.media-amazon.com/images/I/31UEooUrdSL.jpg"
          />
      
          <Product
            id="90829314"
            title="AmazonBasics Fire HD Ready LED Smart TV  (Black)"
            price={16499}
            rating={4}
            image="https://m.media-amazon.com/images/I/613VLxnkEWS._AC_SS450_.jpg"
          />
      
      
          <Product
            id="90872132"
            title="Borosil 10 Liters Oven Toaster Grill, Grey"
            price={3085}
            rating={4}
            image="https://m.media-amazon.com/images/I/51IuOmKjAtL._AC_SS450_.jpg"
          />
      
       
          <Product
            id="90129332"
            title="INSTA360 GO2"
            price={30499}
            rating={4}
            image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3d038829-16cd-47c2-b628-9f11466c651b.__CR0,0,1005,1005_PT0_SX220_V1___.jpg"
          />
        
    </div> 
        </div>
    )
}

