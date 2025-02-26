import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import VisitorsInsight from './VisitorsInsight';
import LowerLeftBlock from './LowerLeftBlock';
import RightSection from './RightSection';
import BottomSection from './BottomSection';
import { fetchLiveData, fetchHistoricalCoolantTemps } from "../../components/Firebase/firebaseService";

const Dashboard = () => {
  const [coolantTemps, setCoolantTemps] = useState([]);
  const [coolantTemp, setCoolantTemp] = useState(null);
  const [drivingBehavior, setDrivingBehavior] = useState(null);

  useEffect(() => {
    const getCoolantTemps = async () => {
      const temps = await fetchHistoricalCoolantTemps();
      setCoolantTemps(temps); // Store the fetched data
    };

    getCoolantTemps();
  }, []);

  const classifyDrivingBehavior = (rpm, mph, engineLoad) => {
    const behaviors = [];
  
    if (rpm < 1000 && mph === 0 && engineLoad < 10) {
      behaviors.push('Idle'); // No movement, low load and RPM
    } else if (rpm < 2000 && mph > 0 && mph <= 50 && engineLoad < 30) {
      behaviors.push('Eco Driving'); // Efficient driving with low RPM and moderate speed
    } else if (rpm > 4000 && mph > 70 && engineLoad > 80) {
      behaviors.push('Aggressive Driving'); // High speed, high load, and high RPM
    } else if (rpm >= 3000 && rpm <= 4000 && mph >= 50 && mph <= 70 && engineLoad >= 50 && engineLoad <= 80) {
      behaviors.push('Moderate Driving'); // Balanced speed and load with moderate RPM
    } else if (rpm > 3000 && engineLoad > 70 && mph < 20) {
      behaviors.push('Harsh Acceleration'); // Rapid acceleration with high RPM and load
    } else if (rpm > 2000 && mph >= 60 && engineLoad < 50) {
      behaviors.push('Cruising'); // Smooth driving at a steady speed
    } else if (rpm <= 3000 && mph < 60 && engineLoad <= 50) {
      behaviors.push('Normal Driving'); // Typical driving with no extreme behavior
    } else {
      behaviors.push('Unclassified Behavior'); // Fallback for undefined scenarios
    }
  
    return behaviors;
  };
  
  const [liveData, setLiveData] = useState({});

  useEffect(() => {
    fetchLiveData((data) => {
      setLiveData(data);
      setCoolantTemp(data.coolantTemp);

      const { rpm, mph, engineLoad } = data;

      if (rpm !== undefined && mph !== undefined && engineLoad !== undefined) {
        const behavior = classifyDrivingBehavior(rpm, mph, engineLoad);
        setDrivingBehavior(behavior);
        console.log('Driving Behavior:', behavior);
      }
    });
  }, []);

  return (
    <div className="w-screen flex flex-col lg:flex-row bg-i-green overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col lg:flex-row flex-1">
          <div className="w-full lg:w-5/12 flex flex-col gap-8 p-5">
          <VisitorsInsight drivingBehavior={drivingBehavior} />
            <LowerLeftBlock liveData={liveData} />
          </div>
          <div className="w-full lg:w-7/12">
            <RightSection liveData={liveData} />
          </div>
        </div>
        <BottomSection />
      </div>
    </div>
  );
};

export default Dashboard;
