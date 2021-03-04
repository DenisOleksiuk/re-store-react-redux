import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from './components/error-boundry'
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import reducer from './reducers';


const bookstoreService = new BookstoreService();
const store = createStore(reducer);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
