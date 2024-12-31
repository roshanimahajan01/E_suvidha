import React from 'react';
import "./EgovServices.scss"

const EgovService = (): JSX.Element => {
  const services = [
    'Caste Certificate',
    'Income Certificate',
    'Birth Certificate',
    'Death Certificate',
    'Domicile',
    'Nationality',
    'Marriage Certificate',
    'Rajpatra',
    'PAN Card - New Application',
    'PAN Card - Update',
  ];

  const handleApply = (serviceName: string) => {
    alert(`Applying for: ${serviceName}`);
  };

  return (
    <div className="egov-service-container">
      <h1 className="heading">E-Government Services</h1>
      <p className="subheading">Select a service and click "Apply" to get started!</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service}</h3>
            <button onClick={() => handleApply(service)} className="apply-button">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EgovService;
