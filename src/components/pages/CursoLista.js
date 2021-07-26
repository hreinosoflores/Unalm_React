import React from 'react'


class CursoLista extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cursos: []
        };
    }

    getCursos = () => {
        fetch('http://localhost:40009/api/Cursos')
            .then(response => response.json())
            .then(data => this.setState({ cursos: [...data] }));

    }

    componentDidMount() {
        this.getCursos();
    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="display-6 title">Nuestros Cursos</span>
                    <a className="btn btn-primary" href="/">Registrar Nuevo Curso</a>
                </div>

                <ul className="list-group">

                    {
                        this.state.cursos.map(
                            curso =>
                                <li key={curso.id} className="bg-white list-group-item border-0 mb-3 shadow-sm rounded">
                                    <a className="text-secondary text-decoration-none d-grid" href="/">
                                        <strong className="cursoTitle">
                                            {curso.codigo + ' | ' + curso.nombre}
                                        </strong>
                                        <small>
                                            Última modificación:
                                            {curso.updatedAt}
                                        </small>
                                    </a>
                                </li>
                        )
                    }
                </ul>

            </>
        );
    }
}

export default CursoLista;


/* <li className="bg-white list-group-item border-0 mb-3 shadow-sm rounded"
    *ngFor="let curso of cursos | paginate:{itemsPerPage:4,currentPage: pagina}">
    <a className="text-secondary text-decoration-none d-grid" [routerLink]="['./detail']" [queryParams]="{id: curso.id}">
    <strong className="cursoTitle">
        {{curso.codigo + ' | ' + curso.nombre}}
    </strong>
    <small>
        Última modificación:
        {{curso.updatedAt | date:formatoFecha}}
    </small>
    </a>
</li> */