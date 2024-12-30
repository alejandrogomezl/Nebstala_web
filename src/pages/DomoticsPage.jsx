import React from 'react';
import Header from '../components/domotics/Header';
import IntroDomotics from '../components/domotics/IntroDomotics';
import ClimateControl from '../components/domotics/ClimateControl';
import '../css/domotics/DomoticsPage.css';

const DomoticsPage = () => {
  return (
    <div className="domotics-page">
      <Header />
      <IntroDomotics />
      <ClimateControl />
    </div>
  );
};

export default DomoticsPage;
