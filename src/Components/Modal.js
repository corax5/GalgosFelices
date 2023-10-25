import React from 'react'


export const Modal = ({ setOpenModal }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </button>
                </div>
                <div className="title">
                    <h4>Si quieres ayudarnos haciendo una donación :

                    </h4>
                </div>
                <div className="bodymodal">
                    Rellena el siguiente formulario, para que podamos justificar el donativo a Hacienda y enviarte el certificado con la información fiscal, para que puedas aprovechar las ventajas fiscales de hacer un donativo a una ONG.


                    <br />
                    Nombre:
                    <br />
                    Apellidos:
                    <br />
                    Documento DNI Nº:
                    <br />
                    Email:
                    <br />
                    Domicilio:
                    <br />
                    Población:
                    <br />
                    Provincia:
                    <br />
                    Código postal:
                    <br />
                    Teléfono desde el que has hecho el bizum:
                    <br />
                    Importe donado:
                    <br />
                    Fecha de la donación:
                </div>

            </div>
        </div >

    );
}

