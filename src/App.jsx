import './App.css';
import './myapp.css'

// I want to use state in this component
import React, { useState } from 'react';

const loading = 'https://images.freeimages.com/image/previews/cd6/colorful-mandala-pattern-5691524.jpg';
const initialState = {
  init: true,
  id: 0,
}

function App() {
  const [state, setState] = useState(initialState);
  const onClick = () => {
    setState({ ...state, init: false });
  }
  if (state.init) {
    return (
      <div className="App">
        <header className="App-header board-class bg-custom bg-cover bg-center bg-no-repeat">
          <img src={loading} className="App-logo" alt="logo" />
          <button onClick={onClick} className='bg-gray-500 hover:bg-blue-500 font-bold py-2 px-1 rounded'>Click me</button>
        </header>
      </div>
    )
  }

  return (
    <div className="board-class bg-fixed bg-cover parallax">
      <header className="myApp-header flex py-4 space-x-4">
        <div className='mr-8 flex space-x-4'>
          <p className='bold'>Zona:</p>
          <select name="región" id="" className='bg-gray-500 rounded'>
            <option value="">Lima</option>
            <option value="">Rural</option>
          </select>
        </div>
        <div className='rm-8 flex space-x-4'>
          <p className='bold'>Internet:</p>
          <select name="Internet" id="" className='bg-gray-500 rounded'>
            <option value="">Buena</option>
            <option value="">Medio</option>
            <option value="">Malo</option>
          </select>
        </div>
        <div className='rm-8 flex space-x-4'>
          <p className='bold'>Dispositivos:</p>
          <select name="Dispositivos" id="" className='bg-gray-500 rounded'>
            <option value="">Tablet</option>
            <option value="">Libros</option>
          </select>
        </div>
      </header>
      <main className='flex m-10'>
        <div className='relative flex-grow'>
          <div className='card-content flex'>
            <img src="classroom.jpeg" alt='card-image' className='rounded-lg m-10 shadow-lg' />
            <div className='rounded-lg bg-yellow-200 m-10 p-5 border-2 border-gray-800'>
              <h2 className='text-lg font-bold'>Card Title</h2>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
          </div>
        </div>
      </main>
      <main className='flex m-10'>
        <div className='relative flex-grow'>
          <div className='card-content flex'>
            <img src="classroom.jpeg" alt='card-image' className='rounded-lg m-10 shadow-lg' />
            <div className='rounded-lg bg-pink-200 m-10 p-5 border-2 border-gray-800'>
              <h2 className='text-lg font-bold'>Card Title</h2>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
