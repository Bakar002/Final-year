import React, { useEffect, useState } from 'react';
import LineGraph from './LineGraph'; // Ensure this graph supports timestamp-based x-axis
import Gauge from './Gauge';
import { fetchHistoricalRpm, fetchHistoricalMph } from "../../components/Firebase/firebaseService";
import { format } from 'date-fns'; // Optional: for date formatting

const RightSection = ({ liveData }) => {
  const [gaugeData, setGaugeData] = useState([]);
  const [speedData, setSpeedData] = useState([]);
  const [rpmData, setRpmData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to transform data into graph format
  const transformSpeedData = (data) =>
    data.map((entry) => ({
      x: format(new Date(parseInt(entry.timestamp)), 'MM/dd/yyyy, hh:mm:ss a'), // Format timestamp to readable date
      y: entry.mph,
    }));
    const transformRpmData = (data) =>
    data.map((entry) => ({
      x: format(new Date(parseInt(entry.timestamp)), 'MM/dd/yyyy, hh:mm:ss a'), // Format timestamp to readable date
      y: entry.rpm,
    }));

  useEffect(() => {
    const updatedGaugeData = [
      { value: liveData.engineLoad || 0, text: `${liveData.engineLoad || 0}%`, color: '#FF0000', label: 'Engine Load' },
      { value: liveData.coolantTemp || 0, text: `${liveData.coolantTemp || 0}°C`, color: '#00FF00', label: 'Engine Coolant' },
      { value: liveData.oilTemp || 0, text: `${liveData.oilTemp || 0}°C`, color: '#0000FF', label: 'Oil Temperature' },
    ];
    setGaugeData(updatedGaugeData);

    const fetchData = async () => {
      try {
        setLoading(true);
        const speed = await fetchHistoricalMph();
        const rpm = await fetchHistoricalRpm();

        setSpeedData(transformSpeedData(speed)); // Transform the speed data
        setRpmData(transformRpmData(rpm)); // Optional: Transform RPM data if needed
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const lineGraphDataSpeed = [{ id: 'speed', data: speedData }];
  const lineGraphDataRpm = [{ id: 'rpm', data: rpmData }];

  return (
    <div className="flex flex-col gap-8 p-4">
      {error ? <p className="text-red-500">{error}</p> : null}
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default RightSection;
