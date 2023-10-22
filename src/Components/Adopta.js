import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export const Adopta = () => {
    return (
        <>
            <h2>Adopta:</h2>
            <p>Aquí podéis encontrar todos los peluditos que tenemos en adopción.

                Algunos hace poco que llegaron. Otros llevan con nosotros bastante tiempo, pero todos necesitan una familia, mientras tanto, nosotros seremos su familia.


                Si te interesa adoptar alguno de nuestros peluditos, mándanos un <strong style={{ color: '#44e04b' }}>WhatsApp al teléfono: 670373930 <FontAwesomeIcon icon={faWhatsapp} /> </strong> y en breve te mandaremos el cuestionario.</p>
            <h3 style={{ color: '#dd65f5' }}>Nuestros Amigos en adopcion:</h3>
        </>
    )
}
