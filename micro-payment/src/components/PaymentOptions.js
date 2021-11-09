import React from 'react';
const PaymentOptions = () => {
  return (
    <section className="payment-options-details mb-6">
      <div className="pay-opt-title mb-4">
        <img src="pay-icon" alt=""></img>
        <h2 className="font-bold">Payment options</h2>
      </div>
      <div className="payment-options bg-gray-400 bg-opacity-20 border-2 rounded">
        <ul>
          <li className="border-b-2 border-gray-300">
            <div className="flex justify-between items-center p-1">
              <div>
                <img src="pay-icon" alt=""></img>
                <p> Knet </p>
              </div>
              <input type="radio"></input>
            </div>
          </li>
          <li className="border-b-2 border-gray-300">
            <div className="flex justify-between items-center p-1">
              <div>
                <img src="pay-icon" alt=""></img>
                <p> Knet </p>
              </div>
              <input type="radio"></input>
            </div>
          </li>
          <li className="border-b-2 border-gray-300">
            <div className="flex justify-between items-center p-1">
              <div>
                <img src="pay-icon" alt=""></img>
                <p> Knet </p>
              </div>
              <input type="radio"></input>
            </div>
          </li>
          <li>
            <div className="flex justify-between items-center p-1">
              <div>
                <img src="pay-icon" alt=""></img>
                <p> Knet </p>
              </div>
              <input type="radio"></input>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PaymentOptions;
