import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FormatFecha from '../../util/FormatFecha';
import { useParams, useNavigate } from 'react-router-dom';

export default function CursoDetalle() {

    const [curso, setCurso] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();


    useEffect(() => {
        fetch(window.$apiURL + window.$urlCursos + id)
            .then(response => response.json())
            .then(data => {
                setCurso(data);
                document.title = window.$title + curso.nombre;
            });
    }, [curso.nombre, id]);



    var eliminar = () => {
        var aceptado = window.confirm('¿Desea eliminar este curso?');
        if (aceptado) {
            fetch(window.$apiURL + window.$urlCursos + curso.id,
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
                )
                .then(
                    () => {
                        alert('El curso fue eliminado con éxito.');
                        navigate('/');
                    }
                );
        }
    }



    return (
        <div className="bg-white p-4 shadow rounded">

            <span className="display-6 rojo">Detalles del Curso</span>

            <hr />

            <div className="btn-group d-flex justify-content-between align-items-center">
                <Link className="btn btn-primary" to={'/curso/save/' + curso.id}>Editar Información</Link>
                <Button variant="danger" onClick={eliminar}>Eliminar Curso</Button>
            </div>

            <br />

            <strong className="text-secondary">Creado a las:</strong>
            <p className="text-secondary">{FormatFecha(curso.createdAt)}</p>

            <strong className="text-secondary">Última modificación a las: </strong>
            <p className="text-secondary">{FormatFecha(curso.updatedAt)}</p>

            <strong className="text-secondary">Código</strong>
            <p className="text-secondary">{curso.codigo}</p>

            <strong className="text-secondary">Nombre</strong>
            <p className="text-secondary">{curso.nombre}</p>

            <strong className="text-secondary">Créditos</strong>
            <p className="text-secondary">{curso.creditos}</p>

            <strong className="text-secondary">Horas de teoría</strong>
            <p className="text-secondary">{curso.horasTeoria}</p>

            <strong className="text-secondary">Horas de práctica</strong>
            <p className="text-secondary">{curso.horasPractica}</p>

            <strong className="text-secondary">Sumilla</strong>
            <p className="text-secondary">{curso.sumilla}</p>

            <div className="d-grid gap-2">
                <Link className="btn btn-outline-primary" to="/">Regresar</Link>
            </div>
        </div>
    );
}


// class CursoDetalle extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             curso: {}
//         };
//     }

//     componentDidMount() {
//         const { match: { params } } = this.props;
//         this.getCurso(params.id);
//     }

//     getCurso = (id) => {
//         fetch(window.$apiURL + window.$urlCursos + id)
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ curso: data });
//                 document.title = window.$title + this.state.curso.nombre;
//             });
//     }

//     eliminar = () => {
//         var aceptado = window.confirm('¿Desea eliminar este curso?');
//         if (aceptado) {
//             fetch(window.$apiURL + window.$urlCursos + this.state.curso.id,
//                 {
//                     method: 'DELETE',
//                 }
//             )
//                 .then(
//                     response => {
//                         if (response.ok) {
//                             return response.text()
//                         } else {
//                             throw new Error("Error en la llamada Ajax")
//                         }
//                     }
//                 )
//                 .then(
//                     () => {
//                         alert('El curso fue eliminado con éxito.');
//                         this.props.history.push("/");
//                     }
//                 );
//         }
//     }


//     render() {

//         return (
//             <div className="bg-white p-4 shadow rounded">

//                 <span className="display-6 rojo">Detalles del Curso</span>

//                 <hr />

//                 <div className="btn-group d-flex justify-content-between align-items-center">
//                     <Link className="btn btn-primary" to={'/curso/save/' + this.state.curso.id}>Editar Información</Link>
//                     <Button variant="danger" onClick={this.eliminar}>Eliminar Curso</Button>
//                 </div>

//                 <br />

//                 <strong className="text-secondary">Creado a las:</strong>
//                 <p className="text-secondary">{FormatFecha(this.state.curso.createdAt)}</p>

//                 <strong className="text-secondary">Última modificación a las: </strong>
//                 <p className="text-secondary">{FormatFecha(this.state.curso.updatedAt)}</p>

//                 <strong className="text-secondary">Código</strong>
//                 <p className="text-secondary">{this.state.curso.codigo}</p>

//                 <strong className="text-secondary">Nombre</strong>
//                 <p className="text-secondary">{this.state.curso.nombre}</p>

//                 <strong className="text-secondary">Créditos</strong>
//                 <p className="text-secondary">{this.state.curso.creditos}</p>

//                 <strong className="text-secondary">Horas de teoría</strong>
//                 <p className="text-secondary">{this.state.curso.horasTeoria}</p>

//                 <strong className="text-secondary">Horas de práctica</strong>
//                 <p className="text-secondary">{this.state.curso.horasPractica}</p>

//                 <strong className="text-secondary">Sumilla</strong>
//                 <p className="text-secondary">{this.state.curso.sumilla}</p>

//                 <div className="d-grid gap-2">
//                     <Link className="btn btn-outline-primary" to="/">Regresar</Link>
//                 </div>
//             </div>

//         );
//     }
// }

// export default CursoDetalle;

