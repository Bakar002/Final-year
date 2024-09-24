import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaTemperatureHigh, FaCar, FaTachometerAlt, FaOilCan, FaCogs } from 'react-icons/fa';
import 'react-circular-progressbar/dist/styles.css';

// Utility function to convert liveData object into a displayable array
const transformLiveData = (data) => {
  return Object.entries(data).map(([key, value], index) => {
    let status = 'Good'; // Default status
    if (value < 30) status = 'Low'; 
    else if (value < 70) status = 'Moderate'; 
    else if (value >= 70) status = 'High'; 

    // Map key names to more readable forms if needed
    const displayNames = {
      coolantTemp: { label: 'Coolant Temperature', icon: <FaTemperatureHigh /> },
      engineLoad: { label: 'Engine Load', icon: <FaCogs /> },
      mph: { label: 'Speed (MPH)', icon: <FaCar /> },
      oilTemp: { label: 'Oil Temperature', icon: <FaOilCan /> },
      rpm: { label: 'RPM', icon: <FaTachometerAlt /> },
    };

    return {
      id: index + 1,
      name: displayNames[key]?.label || key,
      icon: displayNames[key]?.icon,
      value,
      status,
    };
  });
};

const LowerLeftBlock = ({ liveData }) => {
  const parameters = transformLiveData(liveData);

  return (
    <div className="bg-medium-green rounded-3xl p-6 text-white w-full shadow-lg">
      <h1 className="font-semibold text-2xl mb-4 text-center">Vehicle Parameters</h1>
      
      {/* Header for the parameters table */}
      <div className="hidden md:grid grid-cols-4 gap-4 mb-4 font-semibold text-center border-b border-white pb-2">
        <div>#</div>
        <div>Name</div>
        <p>Value</p>
        <div>Status</div>
      </div>

      {/* Content for the parameters */}
      {parameters.map((param) => (
        <div 
          key={param.id} 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4 text-center transition-transform transform hover:scale-105"
        >
          <div className="text-lg font-medium">{param.id}</div>
          <div className="flex items-center justify-center text-lg font-medium">
            {param.icon}
            <span className="ml-2">{param.name}</span>
          </div>
          <div className="w-20 h-20 md:w-16 md:h-16 mx-auto">
            <CircularProgressbar
              value={param.value}
              text={`${param.value}%`}
              styles={buildStyles({
                pathColor: param.value > 70 ? '#00FF00' : '#FFA500', // Adjust colors based on thresholds
                textColor: '#FFF',
                trailColor: '#ccc', // Trail color for the progress bar
              })}
            />
          </div>
          <div className={`font-bold ${param.status === 'Good' ? 'text-green-400' : param.status === 'Moderate' ? 'text-yellow-400' : 'text-red-400'}`}>
            {param.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LowerLeftBlock;
