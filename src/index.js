import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Template from './components/ui/template/Template';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Template />
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
