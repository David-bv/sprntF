import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';
import './styles/style.css'



ReactDOM.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);

