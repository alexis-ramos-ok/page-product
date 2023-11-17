import React, { useState, useEffect } from 'react';
import './App.css';
import ProductHeader from './components/ProductHeader/ProductHeader';
import ProductMain from './components/ProductMain/ProductMain';
import ProductImages from './components/ProductImages/ProductImages';
import ProductFeatures from './components/ProductFeatures/ProductFeatures';

function App() {
  const images = [
    'https://http2.mlstatic.com/D_NQ_NP_2X_964515-MLA72746285501_112023-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_864027-MLA72672978766_112023-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_778332-MLA72746295341_112023-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_603818-MLA72745603583_112023-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_964515-MLA72746285501_112023-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_668861-MLA72745663565_112023-F.webp'
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
   
      <div className="product-details">
        {isMobile ? (
          <>
            <ProductHeader/>
            <div className="product-images">
              <ProductImages images={images} />
            </div>
            <ProductMain/>
          </>
        ) : (
          <>
            <div className="product-images">
              <ProductImages images={images} />
            </div>
            <div className="header-main-container">
              <ProductHeader/>
              <ProductMain/>
            </div>
          </>
     
        )}

      </div>
      <div className='product-features'>
      < ProductFeatures />
      </div>
    </div>
  );
}

export default App;