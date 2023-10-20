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

            <h2 className='title'>
                <div className='titulo2'> <strong> GALGOS FELICES FUNDACIÓN</strong> </div> <br />
                <Link to="/contacto" id='botoncontacto'>Contacta con nosotros</Link>
                <Link to="/¿ComoAyudar?">Como ayudar</Link>
            </h2>

            <section className='last-works'>




                <Noticias />

            </section>

        </div >
    )
}