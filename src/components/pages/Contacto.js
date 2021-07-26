import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Contacto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submit = (e)  => {
        //Previene que se vuelva a recargar la pagina, comportamiento default del submit
        e.preventDefault();
    }

    render() {
        return (
            <div className="bg-white p-4 shadow rounded">
                <Form onSubmit={this.submit}>
                    <span className="display-6 formTitle">Escríbanos para mayor información</span>
                    <hr />
                    <h5>(*) Campos obligatorios</h5><br />
                    <Form.Group className="mb-3" controlId="nombres">
                        <Form.Control type="text" placeholder="* Nombres..." className="shadow-sm" name="nombres"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="apellidos">
                        <Form.Control type="text" placeholder="* Apellidos..." className="shadow-sm" name="apellidos"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control type="text" placeholder="E-mail.." className="shadow-sm" name="email"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Control type="text" placeholder="Teléfono..." className="shadow-sm" name="telefono"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="comentarios">
                        <Form.Control as="textarea" rows={10} placeholder="* Comentarios..."  name="comentarios"/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                </Form>
            </div>
            
        );
    }
}

export default Contacto;