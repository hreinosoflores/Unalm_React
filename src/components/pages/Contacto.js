import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Mensaje from '../../model/Mensaje';
import { Link }  from 'react-router-dom';



class Contacto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mensaje: {}
        };
    }

    componentDidMount(){
        document.title = window.$title + 'Contáctenos';
    }

    submit = (e) => {
        //Previene que se vuelva a recargar la pagina, comportamiento default del submit
        e.preventDefault();

        let mensaje = new Mensaje(
            undefined,
            this.state.mensaje.nombres,
            this.state.mensaje.apellidos,
            this.state.mensaje.email,
            this.state.mensaje.telefono,
            this.state.mensaje.comentarios,
            new Date(),
            new Date()
        );

        fetch(window.$apiURL + window.$urlBandeja,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mensaje)
            }
        )
            .then(
                response => {
                    if (response.ok) {
                        return response.text()
                    } else {
                        throw new Error("Error en la llamada Ajax")
                    }
                }
            )
            .then(
                data => {
                    console.log(data);
                    this.props.history.push("/");
                } 
            );
    }


    setNombres = (e) => {
        this.setState(prevState => (
            {
                mensaje: { ...prevState.mensaje, nombres: e.target.value }
            }
        ));
    }

    setApellidos = (e) => {
        this.setState(prevState => (
            {
                mensaje: { ...prevState.mensaje, apellidos: e.target.value }
            }
        ));
    }

    setEmail = (e) => {
        this.setState(prevState => (
            {
                mensaje: { ...prevState.mensaje, email: e.target.value }
            }
        ));
    }

    setTelefono = (e) => {
        this.setState(prevState => (
            {
                mensaje: { ...prevState.mensaje, telefono: e.target.value }
            }
        ));
    }

    setComentarios = (e) => {
        this.setState(prevState => (
            {
                mensaje: { ...prevState.mensaje, comentarios: e.target.value }
            }
        ));
    }

    render() {
        return (
            <div className="bg-white p-4 shadow rounded">
                <Form onSubmit={this.submit}>
                    <span className="display-6 rojo">Escríbanos para mayor información</span>
                    <hr />
                    <h5>(*) Campos obligatorios</h5><br />
                    <Form.Group className="mb-3" controlId="nombres">
                        <Form.Control type="text" placeholder="* Nombres..." className="shadow-sm" name="nombres" onChange={this.setNombres} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="apellidos">
                        <Form.Control type="text" placeholder="* Apellidos..." className="shadow-sm" name="apellidos" onChange={this.setApellidos} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control type="text" placeholder="E-mail.." className="shadow-sm" name="email" onChange={this.setEmail} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Control type="text" placeholder="Teléfono..." className="shadow-sm" name="telefono" onChange={this.setTelefono} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="comentarios">
                        <Form.Control as="textarea" rows={10} placeholder="* Comentarios..." name="comentarios" onChange={this.setComentarios} />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Enviar Comentarios
                        </Button>
                        <Link to="/" >
                            <Button className="w-100" variant="outline-primary" type="submit">
                                Cancelar
                            </Button>
                        </Link>
                    </div>

                </Form>
            </div>

        );
    }
}

export default Contacto;