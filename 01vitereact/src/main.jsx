import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai'
// we are import Chai function as well as App function

createRoot(document.getElementById('root')).render(
  
   <>
    <Chai/>
    <App/>
   </>
  
)
