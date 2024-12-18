import React from 'react';

const FeaturesSection = () => (
  <section id="features" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Features</h2>
      <div className="row text-center">
        <div className="col-md-4">
          <h4>Smart Automation</h4>
          <p>Control lights, climate, and locks seamlessly.</p>
        </div>
        <div className="col-md-4">
          <h4>Reservation Management</h4>
          <p>Easily manage and visualize bookings with an interactive calendar.</p>
        </div>
        <div className="col-md-4">
          <h4>Customizable Invoices</h4>
          <p>Generate invoices tailored to your needs.</p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
