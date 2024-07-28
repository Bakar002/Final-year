import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import VisitorsInsight from './VisitorsInsight';
import LowerLeftBlock from './LowerLeftBlock';
import RightSection from './RightSection';
import BottomSection from './BottomSection';

const Dashboard = () => {
  return (
    <div className="w-screen flex h-full bg-i-green  ">
      <Sidebar />
      <div className="w-max flex flex-col">
        <Header />

          <div className="w-5/12 flex flex-col gap-8 p-5">

              <VisitorsInsight />


              <LowerLeftBlock />

          </div>
          <RightSection />




        <BottomSection />
      </div>
    </div>
  );
};

export default Dashboard;
