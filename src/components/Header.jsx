import React, { useState } from 'react';
const Header = () => {
  //eslint-disable-next-line
  const [internetQuality, setInternetQuality] = useState('');
  //eslint-disable-next-line
  const [devices, setDevices] = useState('');

  return (
    <header className="text-black font-medium bg-green-700 flex py-4 justify-evenly ">
      <div className='flex '>
        <select name="Internet" id="" className='bg-gray-200 rounded-full px-6 py-2' onChange={e => setInternetQuality(e.target.value)}>
          <option value="">Calidad de internet</option>
          <option value="Buena">Buena</option>
          <option value="Medio">Medio</option>
          <option value="Malo">Malo</option>
        </select>
      </div>
      <div className='flex '>
        <select name="Dispositivos" id="" className='bg-gray-200 rounded-full px-6 py-2' onChange={e => setDevices(e.target.value)}>
          <option value="">Dispositivos</option>
          <option value="Tablet">Tablet</option>
          <option value="Libros">Libros</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
