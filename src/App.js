import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

function App({ route }) {
  return (
    <div className="App">
      <br />

      <Link to="/">
        Home
      </Link>
      {'\t\t'}
      <Link to="/all-concerts">
        All Concerts
      </Link>

      <br/>
      <br/>
  
      { renderRoutes(route.routes) }
    </div>
  );
}

export default { component: App };
