import React from 'react';
import './LinksTop.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const LinksTop = () => {
  const linksInteres = ['auriculares iphone originales', 'samsung galaxy buds live', 'galaxy buds 2 pro', 'apple earpods', 'galaxy buds 2'];
  const linksFila = ['Volver', 'Celulares y Teléfonos', 'Accesorios para Celulares', 'Auriculares y Manos Libres'];

  return (
    <Router>
      <div className="links-top">
        <div className="links-top-fila fila-1">
          <span className="links-top-titulo">También puede interesarte</span>
          {linksInteres.map((link, index) => (
            <Link key={index} to="#" className="links-top-link">{link}</Link>
          ))}
        </div>
        <div className="links-top-fila fila-2">
          {linksFila.map((link, index) => (
            <Link key={index} to="#" className="links-top-link">{link}</Link>
          ))}
        </div>
      </div>
    </Router>
  );
};

export default LinksTop;

