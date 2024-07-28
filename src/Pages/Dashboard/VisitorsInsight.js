import React from 'react';

const VisitorsInsight = () => {
  return (
    <div className='text-white flex flex-col gap-2 p-5 bg-medium-green rounded-3xl w-max '>
      <h1 className='text-2xl'>Visitors Insight</h1>
      <div className='flex items-center justify-center gap-4'>
        <div className='rounded-2xl p-12 px-14' style={{ backgroundImage: 'url("https://i.imgur.com/zkq5Esm.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Content for the first block */}
        </div>
        <div className='rounded-2xl p-12 px-14' style={{ backgroundImage: 'url("https://i.imgur.com/Uk2gmYt.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Content for the second block */}
        </div>
        <div className='rounded-2xl p-12 px-14' style={{ backgroundImage: 'url("https://i.imgur.com/CvZ73uu.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Content for the third block */}
        </div>
      </div>
    </div>
  );
};

export default VisitorsInsight;
