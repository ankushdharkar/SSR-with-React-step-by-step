import React from 'react';

function Home() {
  return (
    <div className="home">
      <h2> Welcome to Home Page! </h2>
      Concert Buddy is an app to help you find concerts
      <br />
      <button onClick={() => console.log('Start finding events')}>
        Find Events
      </button>
      <br />
    </div>
  );
}

export default { component: Home };
