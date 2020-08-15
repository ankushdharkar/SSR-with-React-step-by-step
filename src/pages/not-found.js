import React from 'react';

function NotFound ({ staticContext = {} }) {
  // staticContext doesn't exist on client, because we use BrowserRouter
  staticContext && (staticContext.notFound = true);

  return (
    <div className="home">
      <h1> Page Not Found </h1>
      <h5> Error 404 </h5>
    </div>
  );
}

export default { component: NotFound };
