import React from 'react'
import { Link } from 'react-router-dom'
import { Noticias } from './Noticias'


export const Inicio = () => {
    return (

        <div className='home'>

            <h2>
                <strong>En nuestra fundación</strong> Nuestros objetivos se basan en el cuidado, mantenimiento y ayuda a perros abandonados, maltratados, vagabundos y sin dueño o que por cualquier motivo precisen de algún tipo de asistencia para evitar su padecimiento natural.

                Buscamos nuevos hogares a los perros que se quedan sin ellos o constituyan una carga para sus propietarios.
            </h2>

            <h1 className='title'><img src='/logo1-removebg-preview.png' alt='' id='logo2'></img>
                <div className='titulo2' style={{ fontFamily: "Frank Ruhl Libre2" }}> <strong> GALGOS FELICES FUNDACIÓN</strong> <div id="dog"></div>
                </div>
                <br />
                <Link to="/contacto" id='botoncontacto'>Contacta con nosotros</Link>
                <Link to="/¿ComoAyudar?">Como ayudar</Link>
            </h1>
            <br />
            <br />
            <hr />
            <section className='last-works'>

                <Noticias />

            </section>

        </div >
    )
}