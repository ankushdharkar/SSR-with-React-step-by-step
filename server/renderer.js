import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from "./../src/routes";


function getContent(path, store) {
  const routeContent = (
    <Provider store={store}>
      <StaticRouter location={path} context={{}}>
        { renderRoutes(Routes) }
      </StaticRouter>
    </Provider>
  )
  const content = renderToString(routeContent);
  return content;
}


function generatedHTML(path, store) {
  const content = getContent(path, store);
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
