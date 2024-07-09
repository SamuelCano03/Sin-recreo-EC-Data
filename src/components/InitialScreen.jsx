import React from 'react';

const InitialScreen = ({ onClick }) => {
  return (
    <div className="App">
      <header className="App-header board-class bg-custom bg-cover bg-no-repeat">
        <img src="myfavi.png" className="App-logo" alt="logo" />
        <button onClick={onClick} className='bg-gray-500 hover:bg-blue-500 font-bold py-2 px-1 rounded'>Click me</button>
      </header>
    </div>
  );
};

export default InitialScreen;
