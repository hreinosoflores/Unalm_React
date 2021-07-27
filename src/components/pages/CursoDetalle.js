import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FormatFecha from '../../util/FormatFecha';

class CursoDetalle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curso: {}
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.getCurso(params.id);
    }

    getCurso = (id) => {
        fetch(window.$apiURL + window.$urlCursos + id)
            .then(response => response.json())
            .then(data => {
                this.setState({ curso: data });
                document.title = window.$title + this.state.curso.nombre;
            });
    }

    eliminar = () => {
        fetch(window.$apiURL + window.$urlCursos  + this.state.curso.id,
            {
                method: 'DELETE',
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
            );
    }


    render() {
        return (
            <div className="bg-white p-4 shadow rounded">

                <span className="display-6 rojo">Detalles del Curso</span>

                <hr />

                <div className="btn-group d-flex justify-content-between align-items-center">
                    <Link className="btn btn-primary" to={'/curso/save/' + this.state.curso.id}>Editar Información</Link>
                    <Button variant="danger" onClick={this.eliminar}>Eliminar Curso</Button>
                </div>

                <br />

                <strong className="text-secondary">Creado a las:</strong>
                <p className="text-secondary">{FormatFecha(this.state.curso.createdAt)}</p>

                <strong className="text-secondary">Última modificación a las: </strong>
                <p className="text-secondary">{FormatFecha(this.state.curso.updatedAt)}</p>

                <strong className="text-secondary">Código</strong>
                <p className="text-secondary">{this.state.curso.codigo}</p>

                <strong className="text-secondary">Nombre</strong>
                <p className="text-secondary">{this.state.curso.nombre}</p>

                <strong className="text-secondary">Créditos</strong>
                <p className="text-secondary">{this.state.curso.creditos}</p>

                <strong className="text-secondary">Horas de teoría</strong>
                <p className="text-secondary">{this.state.curso.horasTeoria}</p>

                <strong className="text-secondary">Horas de práctica</strong>
                <p className="text-secondary">{this.state.curso.horasPractica}</p>

                <strong className="text-secondary">Sumilla</strong>
                <p className="text-secondary">{this.state.curso.sumilla}</p>

                <div className="d-grid gap-2">
                    <Link className="btn btn-outline-primary" to="/">Regresar</Link>
                </div>
            </div>

        );
    }
}

export default CursoDetalle;