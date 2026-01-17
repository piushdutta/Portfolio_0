import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import AppContextProvider from './Doctor_Appointment_App/context/Appcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <AppContextProvider> */}
      <App />
    {/* </AppContextProvider> */}
  </BrowserRouter>,
)
