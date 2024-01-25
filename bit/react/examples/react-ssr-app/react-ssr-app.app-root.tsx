import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactSsrApp } from './app.js';

const domNode = document.getElementById('root');

if (domNode) hydrateRoot(
  domNode,
  <BrowserRouter>
    <ReactSsrApp />
  </BrowserRouter>
);
