import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProductImages.css'

const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="product-images">
      {isMobile ? (
        <Carousel showThumbs={false} dynamicHeight={true} emulateTouch={true}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt="" className="carousel-image" />
            </div>
          ))}
        </Carousel>

      ) : (
        <>
          <div className="product-images-carousel">
            {images.map((image, index) => (
              <div key={index} className="product-images-carousel-item">
                <img
                  src={image}
                  alt=""
                  className="product-images-carousel-item-image"
                  onMouseOver={() => setMainImage(image)}
                />
              </div>
            ))}
          </div>
          <div className="product-images-main">
            <img src={mainImage} alt="" className="product-images-main-item-image" />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductImages;