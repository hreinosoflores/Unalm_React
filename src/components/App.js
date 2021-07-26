import '../scss/App.scss'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cabecera from './shared/Cabecera'
import PiePagina from './shared/PiePagina'
import CursoLista from './pages/CursoLista'
import About from './pages/About'
import Contacto from './pages/Contacto'
import CursoDetalle from './pages/CursoDetalle'
import CursoSave from './pages/CursoSave'


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div id="app" className="d-flex flex-column">
          <Cabecera />
          <main className="container-fluid col-12 col-lg-8 mx-auto">
            <Route path="/" exact={true} component={CursoLista} />
            <Route path="/curso/detalle" exact={true} component={CursoDetalle} />
            <Route path="/curso/save" exact={true} component={CursoSave} />
            <Route path="/about" exact={true} component={About} />
            <Route path="/contactenos" exact={true} component={Contacto} />
          </main>
          <PiePagina />
        </div>

      </Router>

    );
  }

}

export default App;
