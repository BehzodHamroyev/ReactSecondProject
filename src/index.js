import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './container/app/App';
import reportWebVitals from './reportWebVitals';
import  FontAwesomeIcon  from '@fortawesome/react-fontawesome';


ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
