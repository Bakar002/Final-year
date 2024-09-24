import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Driver from '../Dashboard/Driver/Driver';

const Maintenance = () => {
  return (
    <div className="flex w-screen h-screen bg-i-green ">
      <Sidebar />
      <div className="w-max flex flex-col">
        <Header />
<Driver/>
      </div>
    </div>
  );
};

export default Maintenance;
