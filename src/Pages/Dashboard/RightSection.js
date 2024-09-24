import React, { useEffect, useState } from 'react';
import LineGraph from './LineGraph';
import Gauge from './Gauge';
import { fetchHistoricalRpm, fetchHistoricalMph } from "../../components/Firebase/firebaseService";

const RightSection = ({ liveData }) => {
  const [gaugeData, setGaugeData] = useState([]);
  const [speedData, setSpeedData] = useState([]);
  const [rpmData, setRpmData] = useState([]);

  // Map the data object to the gaugeData array
  useEffect(() => {
    const updatedGaugeData = [
      { value: liveData.engineLoad, text: `${liveData.engineLoad}%`, color: '#FF0000', label: 'Engine Load' },
      { value: liveData.coolantTemp, text: `${liveData.coolantTemp}%`, color: '#00FF00', label: 'Engine Coolant' },
      { value: liveData.oilTemp, text: `${liveData.oilTemp}%`, color: '#0000FF', label: 'Oil Temperature' },
    ];
    setGaugeData(updatedGaugeData);

    const fetchData = async () => {
      const speed = await fetchHistoricalMph(); // Retrieve speed data from Firebase
      const rpm = await fetchHistoricalRpm(); // Retrieve RPM data from Firebase

      // Format the data to show on the graph with a 2-second interval on the X-axis
      const formattedSpeedData = speed.map((value, index) => ({ x: index * 2, y: value }));
      const formattedRpmData = rpm.map((value, index) => ({ x: index * 2, y: value }));

      setSpeedData(formattedSpeedData);
      setRpmData(formattedRpmData);
    };

    fetchData();
  }, [liveData]);

  const lineGraphDataSpeed = [{ id: 'speed', data: speedData }];
  const lineGraphDataRpm = [{ id: 'rpm', data: rpmData }];

  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex gap-4 items-center justify-center flex-wrap">
        {gaugeData.map((gauge, index) => (
          <div
            key={index}
            className="bg-medium-green rounded-2xl p-8 w-64 flex flex-col justify-center items-center transition-transform transform hover:scale-105 shadow-lg"
          >
            <Gauge
              id={`gauge-${index}`}
              value={gauge.value}
              min={0}
              max={100}
              size={200}
              colors={[gauge.color]}
              units={gauge.text}
              label={gauge.label}
              pointer={{ type: 'needle' }}
            />
            <div className="mt-4 text-center text-white text-lg font-semibold">
              {gauge.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-medium-green rounded-3xl p-4 shadow-lg">
          <LineGraph data={lineGraphDataSpeed} />
        </div>
        <div className="bg-medium-green rounded-3xl p-4 shadow-lg">
          <LineGraph data={lineGraphDataRpm} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
