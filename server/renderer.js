import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from "./../src/routes";


function getContent(path, store, context) {
  const routeContent = (
    <Provider store={store}>
      <StaticRouter location={path} context={context}>
        { renderRoutes(Routes) }
      </StaticRouter>
    </Provider>
  )
  const content = renderToString(routeContent);
  return content;
}

function getScripts(store) {
  const stateString = serialize(store.getState());
  return `
    <script>window.INITIAL_STORE_STATE = ${stateString}</script>
    <script src="c-bundle.js"></script>
  `;
}

function generatedHTML(path, store, context) {
  const content = getContent(path, store, context);
  const scripts = getScripts(store);
  return `
    <html>
      <head></head>
      <body>
        <div id="root">
          ${content}
          ${scripts}
        </div>      
      </body>
    </html>`
}

export { generatedHTML }
