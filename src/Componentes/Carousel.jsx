import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import micros2 from '../Icons/microservices2.png'
import micros1 from '../Icons/microservices1.png'
// import micros1 from '../Icons/microservices1.png'
import style from "../styles/Projects.module.css"


function CarouselComponent() {

    const photosData = [
        {
            src: micros2,
          alt: 'Portafolio',
        },
        {
            src: micros1,
            alt: 'Portafolio',
          },

        // Agrega más objetos de fotos aquí
      ];
      

      return (
        <div className={style.Card}>
          <a href="https://abelacuna.vercel.app/" target="_blank" rel="noreferrer">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              showArrows={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
            >
              {photosData.map((image, index) => (
                <div key={index}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </Carousel>
          </a>
          <h6>Microservices - Restaurant.pe</h6>
          <span>
          Microservices is a traceability website for customers and tasks performed by different areas of the company. It is an internal service used by the company Restaurant.pe.
          </span>
        </div>
      );
    
  }
  
  export default CarouselComponent;
  