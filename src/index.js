import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App';

window.$apiURL = 'http://localhost:40009/';
window.$urlCursos = 'api/Cursos/';
window.$urlBandeja = 'api/BandejaMensajes/';
window.$title = 'UNALM | ';


// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);