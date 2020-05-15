import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from "./../src/routes";


function getContent(path) {
  const routeContent = (
    <StaticRouter location={path} context={{}}>
      <Routes />
    </StaticRouter>
  )
  const content = renderToString(routeContent);
  return content;
}


function generatedHTML(path) {
  const content = getContent(path);
  return `
    <html>
      <head></head>
      <body>
        <div id="root">
          ${content}
          <script src="c-bundle.js"></script>
        </div>      
      </body>
    </html>`
}

export { generatedHTML }
