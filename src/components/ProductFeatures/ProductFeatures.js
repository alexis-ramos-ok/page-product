import React from 'react';
import { faMemory, faTabletAlt, faTv, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from 'react-bootstrap/Accordion';
import './ProductFeatures.css'

const ProductFeatures = () => {
    return (
        <div className="product-features">

            <div className='product-features-char'>
                <h2 className="product-features-title">Características del producto</h2>
                <div className="product-features-columns">
                    <ul className="product-features-list">
                        <li className="product-features-item"><FontAwesomeIcon icon={faMemory} /> Memoria RAM: 16 GB</li>
                        <li className="product-features-item"><FontAwesomeIcon icon={faTabletAlt} /> Con pantalla táctil: No</li>
                    </ul>
                    <ul className="product-features-list">
                        <li className="product-features-item"><FontAwesomeIcon icon={faTv} /> Tamaño de la pantalla: 16 "</li>
                        <li className="product-features-item"><FontAwesomeIcon icon={faPalette} /> Color: Plateado</li>
                    </ul>
                </div>
            </div>
            <div className="product-features-accordions">

                <div className="accordion-row">
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Características generales</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Marca: Dell</li>
                                    <li>Línea: Inspiron 16</li>
                                    <li>Modelo: 5620</li>
                                    <li>SKU: 2W1R0</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Memoria</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Memoria RAM: 16 GB</li>
                                    <li>Tipo de memoria RAM: DDR4</li>
                                    <li>Memoria de video: 2 GB</li>
                                    <li>Capacidad máxima soportada de la memoria RAM: 32 GB</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className="accordion-row">
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Procesador</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Tarjeta gráfica: Nvidia GeForce MX570</li>
                                    <li>Marca del procesador: Intel</li>
                                    <li>Línea del procesador: Core i7</li>
                                    <li>Modelo del procesador: 1255U</li>
                                    <li>Cantidad de núcleos: 10</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Pantalla</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Frecuencia de actualización de la pantalla: 60 Hz</li>
                                    <li>Resolución de la pantalla: 1920 px x 1200 px</li>
                                    <li>Con pantalla táctil: No</li>
                                    <li>Tamaño de la pantalla: 16 "</li>
                                    <li>Tipo de pantalla: LCD</li>
                                    <li>Tipo de panel: WVA</li>
                                    <li>Con pantalla retina: No</li>
                                    <li>Incluye lápiz: No</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className="accordion-row">
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Sistema operativo</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Nombre del sistema operativo: Windows</li>
                                    <li>Versión del sistema operativo: 11</li>
                                    <li>Edición del sistema operativo: Home</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Especificaciones</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Es ultrabook: No</li>
                                    <li>Es 2 en 1: No</li>
                                    <li>Es gamer: No</li>
                                    <li>Software incluidos: Mi Dell, SupportAssist, Dell Update, Dell Digital Delivery</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className="accordion-row">
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Peso y dimensiones</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Peso: 1.97 kg</li>
                                    <li>Ancho: 356.78 mm</li>
                                    <li>Profundidad: 251.9 mm</li>
                                    <li>Altura: </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Cámara</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Tipo de resolución de video de la cámara web: Full HD</li>
                                    <li>Resolución de video de la cámara web: 1920 px x 1080 px</li>
                                    <li>Resolución de la imagen fija de la cámara web: 2.03 Mpx</li>
                                    <li>Con cámara web: Sí</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className="accordion-row">
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Conectividad</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Unidades ópticas: No</li>
                                    <li>Puertos de video: HDMI, DisplayPort</li>
                                    <li>Puertos USB: USB-C 3.2, USB-A 3.2</li>
                                    <li>Cantidad total de puertos USB: 3</li>
                                    <li>Cantidad de ranuras para la memoria RAM: 2</li>
                                    <li>Con USB: Sí</li>
                                    <li>Con Wi-Fi: Sí</li>
                                    <li>Con HDMI: Sí</li>
                                    <li>Con Bluetooth: Sí</li>
                                    <li>Con salida para auriculares: Sí</li>
                                    <li>Con puerto ethernet: No</li>
                                    <li>Con lector de tarjeta de memoria: Sí</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion className="accordion">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Otros</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Modos de sonido: Stereo, HD Audio</li>
                                    <li>Cantidad de parlantes: 2</li>
                                    <li>Con micrófono: Sí</li>
                                    <li>Con pad numérico: No</li>
                                    <li>Tipo de batería: Polímero de litio</li>
                                    <li>Es netbook: No</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>

        </div>
    );
};

export default ProductFeatures;