import React from 'react'
import { Link } from 'react-router-dom'
import Curso from '../../model/Curso'

class CursoDetalle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curso: new Curso()
        };
    }

    getCurso = () => {
        fetch('http://localhost:40009/api/Cursos/1')
            .then(response => response.json())
            .then(data => this.setState({ curso: data }));

    }

    componentDidMount() {
        this.getCurso();
    }

    render() {
        return (

            <div className="bg-white p-4 shadow rounded">

                <span className="display-6 cursoTitle">Detalles del Curso</span>

                <hr />

                <div className="btn-group d-flex justify-content-between align-items-center">
                    <Link className="btn btn-primary" to="/">Editar Información</Link>
                </div>

                <br />

                <strong className="text-secondary">Creado a las:</strong>
                <p className="text-secondary">{this.state.curso.createdAt}</p>

                <strong className="text-secondary">Última modificación a las: </strong>
                <p className="text-secondary">{this.state.curso.updatedAt}</p>

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

/* <div className="bg-white p-4 shadow rounded">

                 <span className="display-6cursoitle">Detalles delCurso/span>

                 <hr/>

                 <div className="btn-group d-flex justify-content-between align-items-center">
                 <a className="btn btn-primary" [routerLink]="['curso/save']" [queryParams]="{id:curso.id}">Editar Información</a>
                 <a className="btn btn-danger" (click)="onDelete()">
                     EliminarCurso/a>
                 </div>

                 <br>

                 <strong className="text-secondary">Creado a las:</strong>
                 <p className="text-secondary">{curso.createdAt | date:formatoFecha}}</p>

                 <strong className="text-secondary">Última modificación a las: </strong>
                 <p className="text-secondary">{curso.updatedAt | date:formatoFecha}}</p>

                 <strong className="text-secondary">Código</strong>
                 <p className="text-secondary">{curso.codigo}}</p>

                 <strong className="text-secondary">Nombre</strong>
                 <p className="text-secondary">{curso.nombre}}</p>

                 <strong className="text-secondary">Créditos</strong>
                 <p className="text-secondary">{curso.creditos}}</p>

                 <strong className="text-secondary">Horas de teoría</strong>
                 <p className="text-secondary">{curso.horasTeoria}}</p>

                 <strong className="text-secondary">Horas de práctica</strong>
                 <p className="text-secondary">{curso.horasPractica}}</p>

                 <strong className="text-secondary">Sumilla</strong>
                 <p className="text-secondary">{curso.sumilla}}</p>

                 <div className="d-grid gap-2">
                 <a className="btn btn-outline-primary" routerLink="/">Regresar</a>
                 </div>

             </div> */