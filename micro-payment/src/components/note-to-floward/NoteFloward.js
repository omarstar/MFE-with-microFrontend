import React from 'react';
const NoteFloward = () => {
  return (
    <section className="note-to-floward mb-6">
      <div className="note-title mb-4 flex justify-between">
        <div className="note-icon-name">
          <img src="note-icon" alt=""></img>
          <h2 className="font-bold">Note to Floward</h2>
        </div>
        <button type="button" className="text-primary-color">
          Add note
        </button>
      </div>
      <div className="del-time-details border-2 rounded p-2">
        <p>Write your notes for Floward team,</p>
        <p>eg: deliver before 11 AM</p>
      </div>
    </section>
  );
};

export default NoteFloward;
