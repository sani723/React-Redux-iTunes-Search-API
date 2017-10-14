import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Template from './components/ui/template/Template';
import store from './store/';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
