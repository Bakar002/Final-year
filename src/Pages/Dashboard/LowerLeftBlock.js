import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const parameters = [
  { id: 1, name: 'Brake Pads', performance: 80, status: 'Good' },
  { id: 2, name: 'Gear Oil', performance: 65, status: 'Moderate' },
  { id: 3, name: 'Fuel Efficiency', performance: 70, status: 'Good' },
  { id: 4, name: 'Engine Temperature', performance: 90, status: 'Good' },
  { id: 5, name: 'Battery Health', performance: 60, status: 'Moderate' },
  { id: 6, name: 'Tire Pressure', performance: 75, status: 'Good' },
  { id: 7, name: 'Transmission Fluid', performance: 50, status: 'Moderate' },
];

const LowerLeftBlock = () => {
  return (
    <div className="bg-medium-green rounded-3xl p-4 text-white w-12/12">
      <h1 className='font-semibold text-2xl mb-4'>Parameters</h1>

      <div className="grid grid-cols-4  mb-4 font-semibold text-center">
        <div>#</div>
        <div>Name</div>
        <div>Performance</div>
        <div>Status</div>
      </div>
      {parameters.map((param) => (
        <div key={param.id} className="grid grid-cols-4  items-center mb-4 text-center">
          <div>{param.id}</div>
          <div>{param.name}</div>
          <div className="w-16 h-16 mx-auto">
            <CircularProgressbar
              value={param.performance}
              text={`${param.performance}%`}
              styles={buildStyles({
                pathColor: param.performance > 70 ? '#00FF00' : '#FFA500',
                textColor: '#FFF',
              })}
            />
          </div>
          <div>{param.status}</div>
        </div>
      ))}
    </div>
  );
};

export default LowerLeftBlock;
