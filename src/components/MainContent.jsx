import React from 'react';

const MainContent = () => {
  return (
    <div className="bg-red-200">
      <div className='flex mx-10 my-10 bg-blue-100'>
        <div className='relative flex-grow'>
          <div className='card-content flex'>
            <img src="classroom.jpeg" alt='card' className='rounded-lg m-10 shadow-lg' />
            <div className='rounded-lg bg-yellow-200 m-10 p-5 border-2 border-gray-800'>
              <h2 className='text-lg font-bold'>Card Title</h2>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex m-10 bg-green-100'>
        <div className='relative flex-grow'>
          <div className='card-content flex'>
            <div className='rounded-lg bg-pink-200 m-10 p-5 border-2 border-gray-800'>
              <h2 className='text-lg font-bold'>Card Title</h2>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <img src="classroom.jpeg" alt='card' className='rounded-lg m-10 shadow-lg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
