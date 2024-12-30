import React from 'react';
import Header from '../components/domotics/Header';
import IntroDomotics from '../components/domotics/IntroDomotics';
import '../css/domotics/DomoticsPage.css';

const DomoticsPage = () => {
  return (
    <div className="domotics-page">
      <Header />
      <IntroDomotics />
    </div>
  );
};

export default DomoticsPage;
