import '../scss/App.scss';
import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Cabecera from './shared/Cabecera';
import PiePagina from './shared/PiePagina';
import CursoLista from './pages/CursoLista';
import About from './pages/About';
import Contacto from './pages/Contacto';
import CursoDetalle from './pages/CursoDetalle';
import CursoSave from './pages/CursoSave';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <div className="d-flex flex-column">
                    <Cabecera />
                    <main className="container-fluid col-lg-8 mx-auto">
                        <Route path="/" exact={true} component={CursoLista} />
                        <Route path="/curso/detalle/:id" exact={true} component={CursoDetalle} />
                        <Route path="/curso/save/:id" exact={true} component={CursoSave} />
                        <Route path="/about" exact={true} component={About} />
                        <Route path="/contactenos" exact={true} component={Contacto} />
                        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
                    </main>
                    <PiePagina />
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
