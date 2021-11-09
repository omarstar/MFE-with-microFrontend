import React from 'react';

const DeliveryTime = () => {
  return (
    <section className="delivery-time mb-6">
      <div className="del-time-title mb-4 flex justify-between">
        <div className="del-icon-name">
          <img src="cal-icon" alt=""></img>
          <h2 className="font-bold">Delivery Time</h2>
        </div>
        <button type="button" className="text-primary-color">
          Change
        </button>
      </div>
      <div className="del-time-details flex border-2 rounded">
        <p className="mr-4">06/06/2122</p>
        <p>1pm-6pm</p>
      </div>
    </section>
  );
};

export default DeliveryTime;
