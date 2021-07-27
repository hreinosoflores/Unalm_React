import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Curso from '../../model/Curso';
import { Link } from 'react-router-dom';

class CursoDetalle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curso: {},
            formTitle: 'Nuevo Curso',
            formButton: 'Registrar'
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params.id !== '0') {
                this.getCurso(params.id);
                this.setState(prevState => {
                    prevState.formTitle = 'Editando Curso';
                    prevState.formButton = 'Guardar Cambios';
                    document.title = window.$title + prevState.formTitle;
                }
            );
        }

        document.title = window.$title + this.state.formTitle;
    }

    getCurso = (id) => {
        fetch(window.$apiURL + window.$urlCursos + id)
            .then(response => response.json())
            .then(data => this.setState({ curso: data }));
    }


    addCurso = () => {
        let curso = new Curso(
            undefined,
            this.state.curso.codigo,
            this.state.curso.nombre,
            this.state.curso.creditos,
            this.state.curso.horasTeoria,
            this.state.curso.horasPractica,
            this.state.curso.sumilla,
            new Date(),
            new Date()
        );

        fetch(window.$apiURL + window.$urlCursos,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(curso)
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

    updateCurso = (cursoId) => {

        let curso = new Curso(
            cursoId,
            this.state.curso.codigo,
            this.state.curso.nombre,
            this.state.curso.creditos,
            this.state.curso.horasTeoria,
            this.state.curso.horasPractica,
            this.state.curso.sumilla,
            this.state.curso.createdAt,
            new Date()
        );

        fetch(window.$apiURL + window.$urlCursos + cursoId,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(curso)
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
                data => console.log(data)
            );
    }



    submit = (e) => {
        e.preventDefault();
        const { match: { params } } = this.props;
        if (params.id !== '0') {
            this.updateCurso(params.id);
        } else {
            this.addCurso();
        }

    }

    setCodigo = (e) => {
        this.setState(prevState => (
            {
                curso: { ...prevState.curso, codigo: e.target.value }
            }
        ));
    }

    setNombre = (e) => {
        this.setState(prevState => (
            {
                curso: { ...prevState.curso, nombre: e.target.value }
            }
        ));
    }

    setCreditos = (e) => {
        this.setState(prevState => (
            {
                curso: { ...prevState.curso, creditos: e.target.value }
            }
        ));
    }

    setHorasTeoria = (e) => {
        this.setState(prevState => (
            {
                curso: { ...prevState.curso, horasTeoria: e.target.value }
            }
        ));
    }

    setHorasPractica = (e) => {
        this.setState(prevState => (
            {
                curso: { ...prevState.curso, horasPractica: e.target.value }
            }
        ));
    }

    setSumilla = (e) => {
        this.setState(prevState => (
            {
                curso: { ...prevState.curso, sumilla: e.target.value }
            }
        ));
    }



    render() {
        return (
            <div className="bg-white p-4 shadow rounded">

                <Form onSubmit={this.submit}>
                    <span className="display-6 rojo">{this.state.formTitle}</span>
                    <hr />
                    <h5>(*) Campos obligatorios</h5><br />
                    <Form.Group className="mb-3" controlId="codigo">
                        <Form.Control type="text" placeholder="* Código del curso..." className="shadow-sm" name="codigo" onChange={this.setCodigo} defaultValue={this.state.curso.codigo} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Control type="text" placeholder="* Nombre del curso..." className="shadow-sm" name="nombre" onChange={this.setNombre} defaultValue={this.state.curso.nombre} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="creditos">
                        <Form.Control type="number" placeholder="* Cantidad de créditos..." className="shadow-sm" name="creditos" onChange={this.setCreditos} defaultValue={this.state.curso.creditos} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="horas_teoria">
                        <Form.Control type="number" placeholder="* Horas de teoría..." className="shadow-sm" name="horas_teoria" onChange={this.setHorasTeoria} defaultValue={this.state.curso.horasTeoria} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="horas_practica">
                        <Form.Control type="number" placeholder="* Horas de práctica..." className="shadow-sm" name="horas_practica" onChange={this.setHorasPractica} defaultValue={this.state.curso.horasPractica} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="sumilla">
                        <Form.Control as="textarea" rows={10} placeholder="* Escriba una sumilla..." name="sumilla" onChange={this.setSumilla} defaultValue={this.state.curso.sumilla} />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            {this.state.formButton}
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

export default CursoDetalle;