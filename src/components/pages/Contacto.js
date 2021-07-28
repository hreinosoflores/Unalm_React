import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Mensaje from '../../model/Mensaje';
import { Link } from 'react-router-dom';

class Contacto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mensaje: {},
            errors: {},
            validado: false
        };
    }

    componentDidMount() {
        document.title = window.$title + 'Contáctenos';
    }



    sendMensaje = () => {
        const { nombres, apellidos, email, telefono, comentarios } = this.state.mensaje;
        let mensaje = new Mensaje(
            undefined,
            nombres,
            apellidos,
            email,
            telefono,
            comentarios,
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
                    console.log('Mensaje -> ', data);
                    alert('Se enviaron los comentarios.');
                    this.props.history.push("/");
                }
            );

    }




    submit = (e) => {
        //Previene que se vuelva a recargar la pagina, comportamiento default del submit
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {

            e.stopPropagation();

            if (form.nombres.value === '') {
                this.setErrors('nombres', 'Nombre obligatorio');
            } else if (form.nombres.value.length > 255) {
                this.setErrors('nombres', 'Nombre demasiado largo');
            }

            if (form.apellidos.value === '') {
                this.setErrors('apellidos', 'Apellido obligatorio');
            } else if (form.nombres.value.length > 255) {
                this.setErrors('apellidos', 'Apellido demasiado largo');
            }

            if (form.comentarios.value === '') {
                this.setErrors('comentarios', 'Insertar Comentario');
            }

        } else {
            this.sendMensaje();
        }
        this.setState({ validado: true });
    }


    setField = (field, value) => {
        this.setState(prevState => (
            {
                mensaje: { ...prevState.mensaje, [field]: value }
            }
        ));
    }

    setErrors = (field, value) => {
        this.setState(prevState => (
            {
                errors: { ...prevState.errors, [field]: value }
            }
        ));
    }

    render() {
        return (
            <div className="bg-white p-4 shadow rounded">
                <Form noValidate validated={this.state.validado} onSubmit={this.submit} id="contactForm">
                    <span className="display-6 rojo">Escríbanos para mayor información</span>
                    <hr />
                    <h5>(*) Campos obligatorios</h5><br />
                    <Form.Group className="mb-3" controlId="nombres">
                        <Form.Control
                            type="text"
                            placeholder="* Nombres..."
                            className="shadow-sm"
                            name="nombres"
                            onChange={e => this.setField('nombres', e.target.value)}
                            required
                            maxLength="255"
                        />
                        <Form.Control.Feedback type="invalid">
                            {this.state.errors.nombres}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="apellidos">
                        <Form.Control
                            type="text"
                            placeholder="* Apellidos..."
                            className="shadow-sm"
                            name="apellidos"
                            onChange={e => this.setField('apellidos', e.target.value)}
                            required
                            maxLength="255" />
                        <Form.Control.Feedback type="invalid">
                            {this.state.errors.apellidos}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control
                            type="text"
                            placeholder="E-mail.."
                            className="shadow-sm"
                            name="email"
                            onChange={e => this.setField('email', e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Control
                            type="text"
                            placeholder="Teléfono..."
                            className="shadow-sm"
                            name="telefono"
                            onChange={e => this.setField('telefono', e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="comentarios">
                        <Form.Control
                            as="textarea"
                            rows={10}
                            placeholder="* Comentarios..."
                            name="comentarios"
                            onChange={e => this.setField('comentarios', e.target.value)}
                            required />
                        <Form.Control.Feedback type="invalid">
                            {this.state.errors.comentarios}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Enviar Comentarios
                        </Button>
                        <Link to="/" >
                            <Button className="w-100" variant="outline-primary" type="submit" >
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