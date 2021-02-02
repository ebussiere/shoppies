import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
//   <Auth0Provider
//   domain="dev-embtech.us.auth0.com"
//   clientId="hflmZ8XKSvqsWAWpr2KfiBKE6JjwxZ8A"
//   redirectUri={window.location.origin}
//   audience="https://dev-embtech.us.auth0.com/api/v2/"
//   scope="read:current_user update:current_user_metadata"
// >
  <Provider store={store}>
    <App />
    </Provider>,
//  </Auth0Provider>,
  document.getElementById('root')
);

