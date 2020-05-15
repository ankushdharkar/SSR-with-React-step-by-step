import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div className="App">
      Concert Buddy is an app to help you find concerts
      <br />
      <button onClick={() => console.log('Start finding events')}>
        Find Events
      </button>
      <br />
      <Link to="/all-concerts">
        All Concerts
      </Link>

    </div>
  );
}

export default App;
