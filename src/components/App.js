import '../scss/App.scss';
import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import Cabecera from './shared/Cabecera';
import PiePagina from './shared/PiePagina';
import CursoLista from './pages/CursoLista';
import About from './pages/About';
import Contacto from './pages/Contacto';
import CursoDetalle from './pages/CursoDetalle';
import CursoSave from './pages/CursoSave';


export default function App() {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column">
                <Cabecera />
                <main className="container-fluid col-lg-8 mx-auto">
                    <Routes>
                        <Route path="/" exact="true" element={<CursoLista />} />
                        <Route path="/curso/detalle/:id" exact="true" strict element={<CursoDetalle />} />
                        <Route path="/curso/save/:id" exact="true" strict element={<CursoSave />} />
                        <Route path="/about" exact="true" element={<About />} />
                        <Route path="/contactenos" exact="true" element={<Contacto />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
                <PiePagina />
            </div>
        </BrowserRouter>
    )
}



// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         return (
//             <BrowserRouter>
//                 <div className="d-flex flex-column">
//                     <Cabecera />
//                     <main className="container-fluid col-lg-8 mx-auto">
//                         <Routes>
//                             <Route path="/" exact="true" element={<CursoLista />} />
//                             <Route path="/curso/detalle/:id" exact="true" strict element={<CursoDetalle />} />
//                             <Route path="/curso/save/:id" exact="true" strict element={<CursoSave />} />
//                             <Route path="/about" exact="true" element={<About />} />
//                             <Route path="/contactenos" exact="true" element={<Contacto />} />
//                             <Route path="*" element={<Navigate to="/" />} />
//                         </Routes>
//                     </main>
//                     <PiePagina />
//                 </div>
//             </BrowserRouter>
//         );
//     }

// }

// export default App;
