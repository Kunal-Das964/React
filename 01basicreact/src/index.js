import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './Chai';
/*we can also write the same below code like this:-
ReactDOM.createRoot(document.getElementById('root')).render
(
    <>
    <App />
    <Chai />
    </>
);
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <Chai />
    </>
);
 

