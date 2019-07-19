import React from 'react';
import './Messaging.css';
import Contact from './Contact/Contact';

export default function Messaging() {
  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <Contact />
      </div>
    </div>
  );
}
