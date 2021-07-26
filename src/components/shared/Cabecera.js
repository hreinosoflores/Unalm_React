import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import '../../scss/Cabecera.scss'

class Cabecera extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header>
                <Navbar bg="white" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand className="text-secondary">
                            <img src="img/unalm-logo.png" alt="logo" />{' '}
                            Universidad Nacional Agraria La Molina</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className="nav nav-pills ms-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" exact activeClassName="active">Nuestros Cursos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" exact activeClassName="active">¿Quiénes somos?</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contactenos" exact activeClassName="active">Contacto</NavLink>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        );

    }
}

export default Cabecera;