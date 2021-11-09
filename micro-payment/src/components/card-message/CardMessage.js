import React from 'react';

const CardMessage = () => {
  return (
    <section className="card-msg-details mb-6">
      <div className="card-msg-title flex justify-between mb-4">
        <div className="msg-icon-name">
          <img src="msg-icon" alt=""></img>
          <h2 className="font-bold">Card Message</h2>
        </div>
        <button type="button" className="text-primary-color">
          Change
        </button>
      </div>
      <div className="card-msg border-2 rounded p-2">
        <p>With you by my side, I don't need anything ever! With you by my side, I don't need anything ever! You...</p>
      </div>
    </section>
  );
};

export default CardMessage;
