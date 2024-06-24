import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
// import { CookiesProvider } from 'react-cookie'; // them

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  
);

// them
// ReactDOM.render(
//     <CookiesProvider>
//         <App />
//     </CookiesProvider>,
//     document.getElementById('root')
// );



// axios.get('/api/get-user')
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error(error);
//     });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
