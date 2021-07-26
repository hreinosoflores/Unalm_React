import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//window.$apiURL = 'http://localhost:40009/';
window.$apiURL = 'http://192.168.1.5:45455/';
window.$urlCursos = 'api/Cursos/';
window.$urlBandeja = 'api/BandejaMensajes/';


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

