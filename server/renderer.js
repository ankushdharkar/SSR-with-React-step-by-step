import React from 'react';
import { renderToString } from 'react-dom/server';
import AppComponent from './../src/App';

function generatedHTML() {
  const content = renderToString(<AppComponent />);
  return `
    <html>
      <head></head>
      <body>
        ${content}
        <script src="c-bundle.js"></scrip>
      </body>
    </html>`
}

export { generatedHTML }
