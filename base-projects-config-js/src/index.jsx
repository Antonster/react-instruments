import { Global } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from 'src/styles';
import { store } from 'src/store/store';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Global styles={GlobalStyles} />
      <App />
    </Router>
  </Provider>
);
