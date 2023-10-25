import React from 'react';
import { Route, Routes, BrowserRouter, Navigate, } from 'react-router-dom';
import { Inicio } from '../Components/Inicio';
import { Adopta } from '../Components/Adopta';
import { Ayudar } from '../Components/Ayudar';
import { Fundacion } from '../Components/Fundacion';
import { Adoptados } from '../Components/Adoptados';
import { HeaderNav } from '../Components/Layout/HeaderNav';
import { Contacto } from '../Components/Contacto';
import { Footer } from '../Components/Layout/Footer';


export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/* HEADER Y NAVEGACION */}
            <HeaderNav />
            {/* CONTENIDO CENTRAL */}
            <section className='content'>
                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/Adopta" element={<Adopta />} />
                    <Route path="/¿ComoAyudar?" element={<Ayudar />} />
                    <Route path="/LaFundacion" element={<Fundacion />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/Adoptados" element={<Adoptados />} />
                    <Route path="*" element={
                        <div className='page'>
                            <h1 className='heading'>ERROR 404</h1>
                        </div>
                    } />

                </Routes>
            </section>


            {/* FOOTER */}
            <Footer />
        </BrowserRouter>
    );
};
