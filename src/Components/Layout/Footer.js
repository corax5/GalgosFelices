import { faInstagram, faFacebook, faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Footer = () => {
    const openInNewTab = (url) => {
        const enlace = window.open(url, '_blank');
        if (enlace) {
            enlace.opener = null;
        }
    };


    return (
        <>
            <footer className="footer-section">

                <ul className="wrapper2">
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
                    <li className="icon whatsapp" onClick={() => openInNewTab('https://wa.me/+34670373930')}>
                        <span className="tooltip">WhatsApp</span>
                        <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                    </li>
                </ul>



                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>
                                        Copyright &copy; 2023, All Rights Reserved <a href="https://www.icortes.dev/">Icortes.dev</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    );
};
