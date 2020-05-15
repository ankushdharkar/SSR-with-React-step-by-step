import React from 'react';
import { renderToString } from 'react-dom/server';
import AppComponent from './../src/App';

function getHTML(content) {
  return `
    <html>
      <head>
      </head>
      <body>
        ${content}
        <script src=""></scrip>
      </body>
    </html>`
}

function generatedHTML() {
  const content = renderToString(<AppComponent />);
  return getHTML(content);
}

export { generatedHTML }
