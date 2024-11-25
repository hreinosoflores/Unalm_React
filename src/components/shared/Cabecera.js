import React from 'react';
import '../../scss/Cabecera.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";


export default function Cabecera() {

    return (
        <header>
            <Navbar expand="lg" bg="white" fixed="top">
                <Container fluid >
                    <img src="/img/unalm-logo.png" alt="logo" />
                    <span id="titulo" className="text-secondary">Universidad Nacional Agraria La Molina</span>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav variant="pills" className="ms-auto d-flex flex-row">
                            <Nav.Link as={NavLink} to="/" exact="true" className='px-3'>Nuestros Cursos</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" exact="true" className='px-3' >¿Quiénes somos?</Nav.Link>
                            <Nav.Link as={NavLink} to="/contactenos" exact="true" className='px-3'>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}


// class Cabecera extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         return (
//             <header>
//                 <Navbar bg="white" expand="lg" fixed="top">
//                     <Container>
//                         <Navbar.Brand className="text-secondary text-break" id="titulo">
//                             <img src="/img/unalm-logo.png" alt="logo" />{' '}
//                             Universidad Nacional Agraria La Molina</Navbar.Brand>
//                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                         <Navbar.Collapse id="basic-navbar-nav">
//                             <ul className="nav nav-pills ms-auto">
//                                 <li className="nav-item">
//                                     <NavLink
//                                         to="/"
//                                         exact="true"
//                                         className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
//                                     >
//                                         Nuestros Cursos
//                                     </NavLink>

//                                     {/* <NavLink className="nav-link" to="/" exact="true" activeClassName="active">Nuestros Cursos</NavLink> */}
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink
//                                         to="/about"
//                                         exact="true"
//                                         className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
//                                     >
//                                         ¿Quiénes somos?
//                                     </NavLink>

//                                     {/* <NavLink className="nav-link" to="/about" exact="true" activeClassName="active">¿Quiénes somos?</NavLink> */}
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink
//                                         to="/contactenos"
//                                         exact="true"
//                                         className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
//                                     >
//                                         Contacto
//                                     </NavLink>
//                                     {/* <NavLink className="nav-link" to="/contactenos" exact="true" activeClassName="active">Contacto</NavLink> */}
//                                 </li>
//                             </ul>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>

//             </header>
//         );

//     }
// }

// export default Cabecera;