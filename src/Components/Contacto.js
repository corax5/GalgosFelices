import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


export const Contacto = () => {
    const openInNewTab = (url) => {
        const enlace = window.open(url, '_blank');
        if (enlace) {
            enlace.opener = null;
        }
    };

    return (
        <>
            <h2>Contacto:</h2><div className='contacto2'>
                <p className='conta'>Disponemos de las siguientes redes sociales pero si quieres ponerte en contacto con nosotros, lo más rápido y sencillo es que nos mandes un WhatsApp al teléfono: <strong style={{ color: '#44e04b' }}><FontAwesomeIcon icon={faWhatsapp} /> <a className='enlace' href='https://wa.me/+34670373930' target="_blank">670373930</a></strong>       dinos en qué podemos ayudarte y te contestaremos lo más pronto posible.</p >
            </div> <ul className="wrapper">
                <li className="icon facebook" onClick={() => openInNewTab('https://www.facebook.com/people/Galgos-Felices-Fundacion/100066436192452/')}>
                    <span className="tooltip">Facebook</span>
                    <span><FontAwesomeIcon icon={faFacebook} /></span>
                </li>
                <li className="icon twitter" onClick={() => openInNewTab('https://twitter.com/galgosfelicesf1')}>
                    <span className="tooltip">Twitter</span>
                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                </li>
                <li className="icon instagram" onClick={() => openInNewTab('https://www.instagram.com/galgosfelicesf_adopciones/')}>
                    <span className="tooltip">Instagram</span>
                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                </li>
                <li className="icon youtube" onClick={() => openInNewTab('https://www.youtube.com/channel/UC-HutoED0L3mSV4tX5zfClg')}>
                    <span className="tooltip">Youtube</span>
                    <span><FontAwesomeIcon icon={faYoutube} /></span>
                </li>
            </ul>
        </>
    );
};

export default Contacto;
