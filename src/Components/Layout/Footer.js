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
                    <li className="icon facebook" onClick={() => openInNewTab('')}>
                        <span className="tooltip">Facebook</span>
                        <span><FontAwesomeIcon icon={faFacebook} /></span>
                    </li>
                    <li className="icon twitter" onClick={() => openInNewTab('')}>
                        <span className="tooltip">Twitter</span>
                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                    </li>
                    <li className="icon instagram" onClick={() => openInNewTab('')}>
                        <span className="tooltip">Instagram</span>
                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                    </li>
                    <li className="icon youtube" onClick={() => openInNewTab('')}>
                        <span className="tooltip">Youtube</span>
                        <span><FontAwesomeIcon icon={faYoutube} /></span>
                    </li>
                    <li className="icon whatsapp" onClick={() => openInNewTab('')}>
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
