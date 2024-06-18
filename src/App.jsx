import './App.css';
import './myapp.css'
import React, { useState, useEffect } from 'react';

const loading = 'https://images.vexels.com/content/158697/preview/pencil-flat-b16e3f.png';

// Creating initial state
const initialState = {
  init: true,
  showMsg: true,
}

function App() {
  // Using useState
  const [state, setState] = useState(initialState);

  // Function to handle onClick event
  const onClick = () => {
    setState({ ...state, init: false });
  }

  // useEffect to show message for 3 seconds
  useEffect(() => {
    if(!state.init){
      const timer = setTimeout(() => {
        setState({ ...state, showMsg: false});
      }, 3000); //just 3 seconds
      return () => clearTimeout(timer); //clear the timer
    }
  });

  // Conditional rendering
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
  else{
    return (
      <div className="board-class bg-fixed bg-cover h-full parallax hide-scrollbar">
        {
          state.showMsg ? (
          <div className='fade-in-out flex h-screen items-center justify-center'>
            <p className='tesxt-center text-2xl font-bold'>Hello World</p>
          </div>
          ) : 
          (
            <div className='fade-in' >
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
                    <img src="classroom.jpeg" alt='card' className='rounded-lg m-10 shadow-lg' />
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
                    <div className='rounded-lg bg-pink-200 m-10 p-5 border-2 border-gray-800'>
                      <h2 className='text-lg font-bold'>Card Title</h2>
                      <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    <img src="classroom.jpeg" alt='card' className='rounded-lg m-10 shadow-lg' />
                  </div>
                </div>
              </main>
            </div>
          )
        }
      </div>
    );
  } 
}

export default App;
