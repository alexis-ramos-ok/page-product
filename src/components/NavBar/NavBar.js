import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='componente-nav'>
                <div className='mi-navbar-desktop'>
                    <Navbar expand="lg" className="mi-navbar">
                        <div className="mi-contenedor">
                            <Navbar.Brand href="/" className="mi-logo">
                                <img
                                    src="/logo.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top navbar-logo"
                                    alt="Logo"
                                />
                            </Navbar.Brand>
                            <Form className="mi-formulario">
                                <FormControl
                                    type="search"
                                    placeholder="Buscar productos, marcas y más…"
                                    className="mr-2 mi-busqueda"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success" className="mi-boton-buscar">    <FontAwesomeIcon className='mi-search-icon' icon={faMagnifyingGlass} /></Button>
                            </Form>
                            <Button variant="warning" className="mx-2 btn-suscribe mi-boton-suscribirse">Beneficios Premium</Button>
                        </div>
                    </Navbar>

                    <Navbar expand="lg" className='navbar-b'>


                        <Nav className="mi-nav">

                            <div className='user-direction'>
                                <FontAwesomeIcon className='user-direction-icon' icon={faLocationDot} />
                                <span className='user-direction-data'>Ingresa tu domicilio</span>
                            </div>
                            <div className="nav-izquierda">
                                <Nav.Link href="/categorias">Categorías</Nav.Link>
                                <Nav.Link href="/ofertas">Ofertas</Nav.Link>
                                <Nav.Link href="/historial">Historial</Nav.Link>
                                <Nav.Link href="/supermercado">Supermercado</Nav.Link>
                                <Nav.Link href="/moda">Moda</Nav.Link>
                                <Nav.Link href="/vender">Vender</Nav.Link>
                                <Nav.Link href="/ayuda">Ayuda</Nav.Link>
                            </div>
                            <div className="nav-derecha">
                                <Nav.Link href="/registro">Crea tu cuenta</Nav.Link>
                                <Nav.Link href="/login">Ingresá</Nav.Link>
                                <Nav.Link href="/mis-compras">Mis compras</Nav.Link>
                                <Nav.Link href="/carrito">
                                    <FontAwesomeIcon className='nav-derecha-icon' icon={faShoppingCart} />
                                </Nav.Link>
                            </div>
                        </Nav>

                    </Navbar>
                </div>

                <Navbar expand="lg" className="mi-navbar-mobile">
                    <div className="mi-contenedor-mobile">
                        <Button variant="primary" onClick={handleShow} className="navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </Button>
                        <Form className="mi-formulario">
                            <FormControl
                                type="search"
                                placeholder="Buscar productos, marcas y más…"
                                className="mr-2 mi-busqueda"
                                aria-label="Search"
                            />
                        </Form>
                        <Nav.Link href="/carrito">
                            <FontAwesomeIcon className='nav-derecha-icon' icon={faShoppingCart} />
                        </Nav.Link>
                    </div>

                    <Offcanvas show={show} onHide={handleClose} placement="start">
                        <Offcanvas.Header closeButton>

                            <Navbar.Brand href="/" className="mi-logo">
                                <img
                                    src="/logo.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top navbar-logo"
                                    alt="Logo"
                                />
                            </Navbar.Brand>

                        </Offcanvas.Header>
                        <div className='contiene-log'>
                                <Nav.Link href="/registro">Crea tu cuenta</Nav.Link>
                                <Nav.Link href="/login">Ingresá</Nav.Link>7
                            </div>
                        <Offcanvas.Body>
                            <Button variant="warning" className="mx-2 btn-suscribe mi-boton-suscribirse">Beneficios Premium</Button>
                            <Nav.Link href="/categorias">Categorías</Nav.Link>
                            <Nav.Link href="/ofertas">Ofertas</Nav.Link>
                            <Nav.Link href="/historial">Historial</Nav.Link>
                            <Nav.Link href="/supermercado">Supermercado</Nav.Link>
                            <Nav.Link href="/moda">Moda</Nav.Link>
                            <Nav.Link href="/vender">Vender</Nav.Link>


                            <Nav.Link href="/mis-compras">Mis compras</Nav.Link>
                            <Nav.Link href="/ayuda">Ayuda</Nav.Link>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar>



            </div>

        </>
    );
};

export default NavBar;
