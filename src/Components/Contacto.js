import React from 'react'
import 'font-awesome/css/font-awesome.min.css';


export const Contacto = () => {
    return (
        <div className='cabecera'>Contacto
            <div className='socialmedia'>
                <ul className="wrapper">
                    <li className="icon facebook">
                        <span className="tooltip">Facebook</span>
                        <span><i className="fab fa-facebook-f"></i></span>
                    </li>
                    <li class="icon twitter">
                        <span className="tooltip">Twitter</span>
                        <span><i className="fab fa-twitter"></i></span>
                    </li>
                    <li class="icon instagram">
                        <span className="tooltip">Instagram</span>
                        <span><i className="fab fa-instagram"></i></span>
                    </li>
                    <li className="icon youtube">
                        <span className="tooltip">Youtube</span>
                        <span><i className="fab fa-youtube"></i></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
