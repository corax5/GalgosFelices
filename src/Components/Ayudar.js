import React from 'react'
import { Modal } from './Modal';
import { useState } from 'react';
import { ModalApadrina } from './ModalApadrina';

export const Ayudar = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setmodalOpen1] = useState(false);

    return (
        <>

            <div className="card-category-2">
                <h2 className="category-name">¿Como ayudar?</h2> <br /><br />
                <div className="card-list-container">
                    <ul className="card-list">
                        <li>
                            <div className="basic-card basic-card-aqua">
                                <div className="card-content">
                                    <span className="card-title"><strong>Donación via cuenta bancaria</strong></span>
                                    <p className="card-text">
                                        <br />
                                        Tu aportación es muy valiosa para que podamos seguir adelante con nuestro proyecto, rescatando perros del abandono y el maltrato.
                                        Si quieres ayudarnos  mediante transferencia bancaria:
                                        <br />
                                        <strong> </strong>
                                    </p>
                                </div>

                                <div className="card-link">
                                    <button
                                        className="openModalBtn"
                                        onClick={() => {
                                            setModalOpen(true);
                                        }}
                                    >
                                        Saber más
                                    </button>

                                    {modalOpen && <Modal setOpenModal={setModalOpen} />}

                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="basic-card basic-card-aqua">
                                <div className="card-content">
                                    <span className="card-title"><strong>Donación via Bizum</strong></span>
                                    <p className="card-text">
                                        <br />
                                        Accede a Bizum desde la app de tu banco, busca la opción «Enviar y Recibir dinero con bizum«,
                                        <br />
                                        teclea la cantidad de dinero que quieras enviar y como destinatario, este número de teléfono:
                                        <br /> <strong>.</strong>
                                    </p>
                                </div>

                                <div className="card-link">
                                    <button
                                        className="openModalBtn"
                                        onClick={() => {
                                            setModalOpen(true);
                                        }}
                                    >
                                        Saber más
                                    </button>

                                    {modalOpen && <Modal setOpenModal={setModalOpen} />}

                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="basic-card basic-card-aqua">
                                <div className="card-content">
                                    <span className="card-title"><strong>Unete a Teaming</strong> </span>
                                    <br />
                                    <p className="card-text">
                                        <br />
                                        Con Teaming puedes donar un euro al mes con solo unirte al grupo de Galgos Felices Fundación.

                                        Solo tienes que registrarte en Teaming, si no lo estás y unirte a nuestro grupo:
                                        <br />
                                        <br />
                                        <a href='' target="_blank">GRUPO DE TEAMING</a>
                                    </p>
                                </div>

                                <div className="card-link">
                                    <button
                                        className="openModalBtn"
                                        onClick={() => {
                                            setModalOpen(true);
                                        }}
                                    >
                                        Saber más
                                    </button>

                                    {modalOpen && <Modal setOpenModal={setModalOpen} />}

                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="basic-card basic-card-aqua">
                                <div className="card-content">
                                    <span className="card-title"><strong>Apadrina</strong></span>
                                    <p className="card-text">
                                        <br />
                                        El apadrinar un animal es mucho más de lo que te imaginas, creas un vínculo especial con uno de nuestros peludos, formas parte de su vida y aunque estés lejos te conviertes en su familia mientras esperan a encontrar un hogar.


                                        Tú decides cuanto quieres aportar.
                                    </p>
                                </div>

                                <div className="card-link">
                                    <button
                                        className="openModalBtn"
                                        onClick={() => {
                                            setmodalOpen1(true);
                                        }}
                                    >
                                        Saber más
                                    </button>

                                    {modalOpen1 && <ModalApadrina setOpenModal={setmodalOpen1} />}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
            <br />
        </>
    );
}
