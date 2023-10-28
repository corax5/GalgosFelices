import React from 'react'

export const ModalApadrina = ({ setOpenModal }) => {
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
                    <h4 style={{ fontSize: '20px' }}>Si quieres ayudarnos apadrinando : </h4>

                </div>
                <div className="bodymodal1">
                    Los que más te necesitan son sobre todo aquellos que tienen enfermedades crónicas, cirugías pendientes, alimentación especial, cachorros, o incluso peluditos que por su edad o circunstancias, llevan años viviendo en la fundación. Por ello cuando apadrinas uno de nuestros perros, entregas un trocito de tu corazón para ayudarle a tener un día a día más feliz.
                    <br />
                    <br />
                    Con tu aportación cubres una parte de sus necesidades mensuales, por este motivo, cada peludito puede tener más de una madrina o padrino.

                    Para reforzar ese lazo entre vosotros, mensualmente recibirás fotos e información sobre su estado a través de WhatsApp, y serás informado si es adoptado, en cuyo caso podrás decidir si quieres apadrinar a otro de nuestros peludos.

                    Podrás cancelar tu aportación en cualquier momento mandándonos un WhatsApp,  solo tienes que avisarnos con 15 días de antelación si tu aportación es a través de cuenta bancaria.

                </div>

            </div>
        </div >

    );
}

