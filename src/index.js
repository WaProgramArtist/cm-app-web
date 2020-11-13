import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { ThemeProvider } from "styled-components";
import * as theme from "./theme";
import reportWebVitals from './reportWebVitals';

import './index.css';

const store = createStore(
  rootReducer,
  (window).__REDUX_DEVTOOLS_EXTENSION__ && (window).__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </Provider>,
  rootElement
);

serviceWorker.unregister();
reportWebVitals();