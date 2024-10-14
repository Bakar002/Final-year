import React, { useState } from 'react';
import { initiateDriving, stopEngine, togglePause } from '../../components/Firebase/firebaseService';

const DynamicFeedComponent = () => {
  const [drivingMode, setDrivingMode] = useState('normal');
  const [isEngineRunning, setIsEngineRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleStart = () => {
    if (!isEngineRunning) {
      initiateDriving(drivingMode);
      setIsEngineRunning(true);
      setIsPaused(false); // Ensure simulation is not paused when starting
    }
  };

  const handleStop = () => {
    if (isEngineRunning) {
      stopEngine();
      setIsEngineRunning(false);
      setIsPaused(false); // Reset paused state when stopping
    }
  };

  const handlePauseResume = () => {
    togglePause(isPaused); // Pass the current paused state to Firebase service
    setIsPaused(!isPaused); // Toggle local state
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Car Driving Data Simulation
        </h2>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Driving Mode:</label>
          <select
            value={drivingMode}
            onChange={(e) => setDrivingMode(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="idle">Idle</option>
            <option value="eco">Eco Driving</option>
            <option value="aggressive">Aggressive Driving</option>
            <option value="moderate">Moderate Driving</option>
            <option value="harshAcceleration">Harsh Acceleration</option>
            <option value="cruising">Cruising</option>
            <option value="normal">Normal Driving</option>
          </select>
        </div>

        <div className="flex justify-between space-x-2 mt-6">
          <button
            onClick={handleStart}
            disabled={isEngineRunning}
            className={`w-full py-2 px-4 rounded-lg font-semibold transition-all 
              ${isEngineRunning ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}
          >
            Start Engine
          </button>

          <button
            onClick={handleStop}
            disabled={!isEngineRunning}
            className={`w-full py-2 px-4 rounded-lg font-semibold transition-all 
              ${!isEngineRunning ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 text-white'}`}
          >
            Stop Engine
          </button>
        </div>

        <div className="mt-4">
          <button
            onClick={handlePauseResume}
            disabled={!isEngineRunning}
            className={`w-full py-2 px-4 rounded-lg font-semibold transition-all 
              ${!isEngineRunning ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
          >
            {isPaused ? 'Resume Simulation' : 'Pause Simulation'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicFeedComponent;
