import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import './ProductMain.css'

const ProductMain = () => {
  const precioAnterior = '$1.219.595';
  const precioActual = '$801.549';
  const descuentoActual = '34% OFF';
  const precioCuotas = 'en 12x $147284.63';
  const infoEnvio = 'Llega gratis el martes';
  const stockDisponible = 'Stock disponible';

  const [show, setShow] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryError, setExpiryError] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [success, setSuccess] = useState(false);
  const handleClose = () => {
    setCardNumberError('');
    setExpiryError('');
    setCvvError('');
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const validateForm = () => {
    let isValid = true;

    if (!cardNumber.match(/\d{4} \d{4} \d{4} \d{4}/)) {
      setCardNumberError('Por favor, ingrese un número de tarjeta válido');
      isValid = false;
    } else {
      setCardNumberError('');
    }

    const today = new Date();
    const monthToday = today.getMonth() + 1;
    const yearToday = today.getFullYear().toString().substr(-2);
    const [month, year] = expiryDate.split('/');

    if (!expiryDate.match(/\d{2}\/\d{2}/) || month < 1 || month > 12) {
      setExpiryError('Por favor, ingrese una fecha de vencimiento válida');
      isValid = false;
    } else if (year < yearToday || (year === yearToday && month < monthToday)) {
      setExpiryError('La tarjeta ha expirado');
      isValid = false;
    } else {
      setExpiryError('');
    }

    if (!cvv.match(/\d{3}/)) {
      setCvvError('Por favor, ingrese un CVV válido');
      isValid = false;
    } else {
      setCvvError('');
    }

    if (isValid) {
      handleClose();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
    }
    
  };

  useEffect(() => {
    if (cardNumberError) {
      const timer = setTimeout(() => {
        setCardNumberError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cardNumberError]);

  useEffect(() => {
    if (expiryError) {
      const timer = setTimeout(() => {
        setExpiryError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [expiryError]);

  useEffect(() => {
    if (cvvError) {
      const timer = setTimeout(() => {
        setCvvError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cvvError]);

  return (
    <Router>
      <div className="product-main">
        <div className="product-main-precio-anterior">{precioAnterior}</div>
        <div className='product-main-contiene-ad'>
          <div className="product-main-precio-actual">{precioActual}</div>
          <div className="product-main-descuento">{descuentoActual}</div>
        </div>
        <div className="product-main-precio-cuotas">{precioCuotas}</div>
        <Link to="#" className="product-main-medios-pago">Ver los medios de pago</Link>

        <div className="product-main-info-envio">{infoEnvio}</div>

        <Link to="#" className="product-main-mas-entrega">Más formas de entrega</Link>
        <div className="product-main-stock">{stockDisponible}</div>
        <div className="product-main-cantidad">
          Cantidad:
          <select className='product-main-q'>
            {[...Array(6).keys()].map((i) =>
              <option key={i + 1} value={i + 1}>{i + 1} unidad{i + 1 > 1 ? 'es' : ''}</option>
            )}
          </select>
          (6 disponibles)
        </div>

        <button className="product-main-comprar" onClick={handleShow}>Comprar ahora</button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Ingrese los datos de su tarjeta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formCardNumber">
                <Form.Label>Número de la tarjeta</Form.Label>
                <InputMask mask="9999 9999 9999 9999" className="form-control" placeholder="Ingrese el número de la tarjeta" value={cardNumber} onChange={(e) => {
                  setCardNumber(e.target.value);
                }} />
                {cardNumberError && <div className="error">{cardNumberError}</div>}
              </Form.Group>

              <Form.Group controlId="formCardExpiry">
                <Form.Label>Fecha de vencimiento</Form.Label>
                <InputMask mask="99/99" className="form-control" placeholder="MM/AA" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                {expiryError && <div className="error">{expiryError}</div>}
              </Form.Group>

              <Form.Group controlId="formCardCVV">
                <Form.Label>CVV</Form.Label>
                <InputMask mask="999" className="form-control" placeholder="Ingrese el código de seguridad de la tarjeta" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                {cvvError && <div className="error">{cvvError}</div>}
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={validateForm}>
              Confirmar Pago
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={success} onHide={() => setSuccess(false)} centered className="success-modal">
          <Modal.Body>
            <Alert variant="success">¡Compra realizada exitosamente!</Alert>
          </Modal.Body>
        </Modal>

        <button className="product-main-carrito">Agregar al carrito</button>
        <p className='product-main-venta'>Vendido por <Link to="#" className='product-main-vendedor'>InfoTech</Link></p>
      </div>
    </Router>
  );
};

export default ProductMain;