import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import { API_KEY, API_URL } from './utils/constants';
import './index.css';

const client = new GraphQLClient({
  url: API_URL + '/graphql',
  headers: {
    Authorization: 'Bearer ' + API_KEY,
  },
});
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
