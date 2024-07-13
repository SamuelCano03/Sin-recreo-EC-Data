import React from 'react';
import './../styles/MainContent.css';
import Header from './../components/Header';

const MainContent = () => {
  return (
    <div className='container hide-scrollbar'>
      <div className='flexi slide'>
        <img src="Lily.svg" alt="" />
      </div>
      <div className='flexi slide slide2'>
        <div className='w-2/5 mr-32 mt-10 shadow-lg '>
          <h2 className='text-red-600 my-10 text-2xl text-center'>¿CUANTO GASTA EL ESTADO EN EDUCAR A UN NIÑO?</h2>
          <div className='bg-yellow-400 p-5 border-solid border-2 rounded-lg border-black'>
            <p>Desde una visión cuantitativa del gasto público, se busca analizar cuánto dinero presupuestal anual es destinado a educación y evaluar la cantidad individual de gasto estatal por niño. Se pretende ver si esta inversión se refleja en la realidad nacional, examinando el vínculo entre el gasto público y la actualidad educativa. Además, se buscará ligar la información con el capital humano y cuántos niños logran asistir a la universidad.</p>
            <p>Se debería invertir un aproximado de 2600 soles mensuales en equipos tecnológicos e infraestructura.</p>
          </div>          
        </div> 
      </div>
      <div className='slide slide3'>
        <Header/>
        <div className='w-3/12 ml-96 mt-20'>
          <p className='text-white'>
            Los colegios tecnológicos son muy caros. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nihil fuga esse, ipsa, mollitia ipsum in et culpa vitae consectetur alias dolore accusantium. Consequatur et itaque asperiores consequuntur doloremque recusandae!
          </p>
        </div>
      </div>
      <div className='slide slide3'>
        <Header/>
      </div>
    </div>
  );
};

export default MainContent;