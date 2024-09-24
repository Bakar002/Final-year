import React from 'react';
import { FaCar } from 'react-icons/fa'; // Importing a car icon as an example

const VisitorsInsight = ({ drivingBehavior }) => {
  return (
    <div className="text-white flex flex-col gap-4 p-6 sm:p-8 bg-medium-green rounded-3xl w-full lg:w-auto">
      <h1 className="text-xl sm:text-2xl mb-4">Visitors Insight</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* First Block */}
        <div 
          className="rounded-2xl p-8 sm:px-12 md:px-14 bg-cover bg-center w-full sm:w-1/3" 
          style={{ backgroundImage: 'url(\'https://i.imgur.com/zkq5Esm.png\')' }}
        >
          {/* Content for the first block */}
        </div>

        {/* Second Block */}
        <div 
          className="rounded-2xl p-8 sm:px-12 md:px-14 bg-cover bg-center w-full sm:w-1/3" 
          style={{ backgroundImage: 'url(\'https://i.imgur.com/Uk2gmYt.png\')' }}
        >
          {/* Display the driving behavior with an icon */}
          <div className="flex flex-col items-center gap-2 text-black">
            <FaCar className="text-xl" /> {/* Car icon */}
            <span className="text-sm">Driving Behavior</span>

            {/* Display driving behavior dynamically */}
            {drivingBehavior && drivingBehavior.length > 0 ? (
              <ul className="text-sm mt-2">
                {drivingBehavior.map((behavior, index) => (
                  <li key={index}>{behavior}</li>
                ))}
              </ul>
            ) : (
              <p>No driving behavior data available.</p>
            )}
          </div>
        </div>

        {/* Third Block */}
        <div 
          className="rounded-2xl p-8 sm:px-12 md:px-14 bg-cover bg-center w-full sm:w-1/3" 
          style={{ backgroundImage: 'url(\'https://i.imgur.com/CvZ73uu.jpeg\')' }}
        >
          {/* Content for the third block */}
        </div>
      </div>
    </div>
  );
};

export default VisitorsInsight;
