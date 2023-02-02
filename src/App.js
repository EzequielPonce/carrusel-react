import Carousel from "react-simply-carousel";
import React, { useState } from "react";
import logo from "./image/Logo.jpg" ;



export default function App() {

  const [activeSlide, setActiveSlide] = useState(0);
  const length = 10 ;

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "text"
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            opacity: 1,

          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: "=>",
          style: {
            width: 80,
            height: 80,
            minWidth: 80,
            borderRadius: 50,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<=",
          style: {
            width: 80,
            height: 80,
            minWidth: 80,
            borderRadius: 50,
            alignSelf: "center"
          }
        }}

        itemsToShow={4}
        speed={500}
      >
        {Array.from({ length }).map((item, index) => (
         
         
         <img
            src={logo}
            style={{
              opacity: 0.5,
              height: 200,
              width:200,
              borderRadius:50,
              paddingLeft:10,
            }}
            key={index}
            alt ="Logo" 
          />
    
        ))
        }
      </Carousel>
    </div>
  );

}

