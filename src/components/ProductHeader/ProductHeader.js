import React from 'react';
import './ProductHeader.css'

const ProductHeader = () => {
  const subtitulo = 'Nuevo  |  4 vendidos';
  const titulo = 'Notebook Dell 5620 I7-1255u 16gb Ssd 512gb Mx570 W11h';

  return (
    <div className="product-header">
      <div className="product-header-subtitulo">{subtitulo}</div>
      <div className="product-header-titulo">{titulo}</div>
    </div>
  );
};

export default ProductHeader;
