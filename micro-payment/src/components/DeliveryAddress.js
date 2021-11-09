import React from 'react';

const DeliveryAddress = () => {
  return (
    <section className="delivery-address mb-6">
      <div className="del-addr-title mb-4">
        <img src="loc-icon" alt=""></img>
        <h2 className="font-bold">Deliver to</h2>
      </div>
      <div className="address-details border-2 rounded">
        <h2 className="font-bold">Address Line 1</h2>
        <p>Address Line 2</p>
        <p>Recipient Name: George Wassfy</p>
        <p>Phone No: +965 55305808</p>
      </div>
    </section>
  );
};

export default DeliveryAddress;
