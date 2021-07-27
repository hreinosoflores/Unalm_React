import React from 'react';
import { Link } from 'react-router-dom';
import FormatFecha from '../../util/FormatFecha';

class CursoLista extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cursos: []
        };
    }

    getCursos = () => {
        fetch(window.$apiURL + window.$urlCursos)
            .then(response => response.json())
            .then(data => this.setState({ cursos: [...data] }));

    }

    componentDidMount() {
        this.getCursos();
        document.title = window.$title + 'Nuestros Cursos';
    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="display-6 amarillo">Nuestros Cursos</span>
                    <Link className="btn btn-primary" to="/curso/save/0">Registrar Nuevo Curso</Link>
                </div>

                <ul className="list-group">
                    {
                        this.state.cursos.map(
                            curso =>
                                <li key={curso.id} className="bg-white list-group-item border-0 mb-3 shadow-sm rounded">
                                    <Link className="text-decoration-none d-grid" to={'/curso/detalle/' + curso.id}>
                                        <strong className="rojo">
                                            {curso.codigo + ' | ' + curso.nombre}
                                        </strong>
                                        <small className="text-secondary">
                                            {
                                                'Última modificación: ' +
                                                FormatFecha(curso.updatedAt)
                                            }
                                        </small>
                                    </Link>
                                </li>
                        )
                    }
                </ul>

            </>
        );
    }
}

export default CursoLista;