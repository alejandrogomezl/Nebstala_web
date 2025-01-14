import React from 'react';
import Header from '../components/domotics/Header';
import IntroDomotics from '../components/domotics/IntroDomotics';
import ClimateControl from '../components/domotics/ClimateControl';
import SmartLocks from '../components/domotics/SmartLocks';
import UserExperience from '../components/domotics/UserExperience';
import SecuritySystem from '../components/domotics/SecuritySystem';
import SystemControl from '../components/domotics/SystemControl';

import '../css/domotics/DomoticsPage.css';

const DomoticsPage = () => {
  return (
    <div className="domotics-page">
      <Header />
      <IntroDomotics />
      <ClimateControl />
      <SmartLocks />
      <UserExperience />
      <SecuritySystem />
      <SystemControl />
    </div>
  );
};

export default DomoticsPage;
