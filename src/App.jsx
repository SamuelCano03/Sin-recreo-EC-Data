import './App.css';
import './myapp.css';
import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
import MainContent from './components/MainContent';
import InitialScreen from './components/InitialScreen';


function App() {
  const initialState = { init: false, showMsg: false }; //change later to true - true
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
      // <div className="hide-scrollbar bg-orange-100">Hi there</div>
      // <div className="bg-fixed bg-cover h-full hide-scrollbar">
      <div className="hide-scrollbar">
        {
          state.showMsg ? (
            <div className='fade-in-out h-screen flex items-center justify-center'>
              <div className='text-center'>
                <p className='font-bold font-sans text-black text-8xl'>Un salón</p>
                <p className='font-bold font-sans text-black text-4xl'>Dos realidades</p>
              </div>
            </div>


          ) : (
            <div className='fade-in'>
              {/* <Header /> */}
              <MainContent />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
