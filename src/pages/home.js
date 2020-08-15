import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  function renderHeadTags () {
    return (
      <Helmet>
        <title> Home page of the planets most amazing concerts </title>
        <meta property="og:title" content="Concerts near you" />
        <meta property="og:image" content="public/cover-poster.png" />
      </Helmet>
    )
  }

  return (
    <div className="home">
      { renderHeadTags() }
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
