import React from 'react';

const BottomSection = () => {
  return (
    <div className="w-full bg-transparent p-5">
      <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='bg-medium-green rounded-3xl p-10 md:p-20 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <h2 className='text-2xl font-semibold text-white'>Parameter 1</h2>
          <p className='text-white mt-2'>Description of parameter 1 goes here.</p>
        </div>
        <div className='bg-medium-green rounded-3xl p-10 md:p-20 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <h2 className='text-2xl font-semibold text-white'>Parameter 2</h2>
          <p className='text-white mt-2'>Description of parameter 2 goes here.</p>
        </div>
        <div className='bg-medium-green rounded-3xl p-10 md:p-20 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <h2 className='text-2xl font-semibold text-white'>Parameter 3</h2>
          <p className='text-white mt-2'>Description of parameter 3 goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
