import React, { useState } from 'react';

const Header = () => {
  const [zone, setZone] = useState('');
  const [internetQuality, setInternetQuality] = useState('');
  const [devices, setDevices] = useState('');

  return (
    <header className="myApp-header flex py-4 space-x-4">
      <div className='mr-8 flex space-x-4'>
        <p className='bold'>Zona:</p>
        <select name="región" id="" className='bg-gray-500 rounded' onChange={e => setZone(e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="Lima">Lima</option>
          <option value="Rural">Rural</option>
        </select>
      </div>
      <div className='rm-8 flex space-x-4'>
        <p className='bold'>Internet:</p>
        <select name="Internet" id="" className='bg-gray-500 rounded' onChange={e => setInternetQuality(e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="Buena">Buena</option>
          <option value="Medio">Medio</option>
          <option value="Malo">Malo</option>
        </select>
      </div>
      <div className='rm-8 flex space-x-4'>
        <p className='bold'>Dispositivos:</p>
        <select name="Dispositivos" id="" className='bg-gray-500 rounded' onChange={e => setDevices(e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="Tablet">Tablet</option>
          <option value="Libros">Libros</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
