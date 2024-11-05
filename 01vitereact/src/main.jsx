import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai' // we are import Chai function as well as App function

/*
function MyApp(){
   return(
      <div>
         <h1> Custom App !</h1>
      </div>
   )
}
*/

createRoot(document.getElementById('root')).render(
  
   <>
   <Chai />
   <App />
   </>
   // MyApp()
  
)
