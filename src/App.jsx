import React from 'react';
import './App.css';
import Messaging from './Components/Messaging/Messaging';

function App() {
  return (
    <div className="App">
      <div className="container-fluid h-100">
        <div className="row justify-content-center h-100">
          <Messaging />
        </div>
      </div>
    </div>
  );
}

export default App;
