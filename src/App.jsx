import './App.css';
import './myapp.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import InitialScreen from './components/InitialScreen';


function App() {
  const initialState = { init: true, showMsg: true };
  const [state, setState] = useState(initialState);

  const onClick = () => {
    setState({ ...state, init: false });
  };

  useEffect(() => {
    if (!state.init) {
      const timer = setTimeout(() => {
        setState({ ...state, showMsg: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);


  if (state.init) {
    return <InitialScreen onClick={onClick} />;
  } else {
    return (
      // <div className="bg-fixed bg-cover h-full hide-scrollbar">
      <div className="hide-scrollbar bg-orange-100">
        {
          state.showMsg ? (
            <div className='fade-in-out h-screen flex items-center justify-center'>
              <div className='text-center'>
                <p className='font-bold font-sans text-black text-8xl'>Un salón</p>
                <p className='font-bold font-sans text-black text-4xl'>Dos realidades</p>
              </div>
            </div>


          ) : (
            <div className='fade-in bg-blue-200'>
              <MainContent />
              {/* <Header /> */}
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
