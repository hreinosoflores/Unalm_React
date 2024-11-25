import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormatFecha from '../../util/FormatFecha';
import Paginacion from '../shared/Paginacion';


export default function CursoLista() {

    const [cursos, setCursos] = useState([]);
    const [currentPage, setCurrenPage] = useState(1);
    const cursosPerPage = 4;

    useEffect(() => {
        // Código que se ejecuta una vez después de montar el componente
        document.title = window.$title + 'Nuestros Cursos';
        fetch(window.$apiURL + window.$urlCursos)
            .then(response => response.json())
            .then(data => setCursos(
                [...data.sort((a, b) => {
                    let
                        da = new Date(a.updatedAt),
                        db = new Date(b.updatedAt);
                    if (da === db) return 0;
                    if (da > db) return -1;
                    else return 1;
                })]
            ));
    }, []);


    const indexOfLastCurso = currentPage * cursosPerPage;

    const indexOfFirstCurso = indexOfLastCurso - cursosPerPage;

    const currentCursos = cursos.slice(indexOfFirstCurso, indexOfLastCurso);

    const totalPages = Math.ceil(cursos.length / cursosPerPage);

    const paginate = pageNum => setCurrenPage(pageNum);

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrenPage(p => p - 1);
        }
    }

    const nextPage = () => {
        if (currentPage !== totalPages) {
            setCurrenPage(p => p + 1);
        }
    }


    let lista = <li className="bg-white list-group-item border-0 mb-3 shadow-sm rounded">
        No se han cargado ningun curso en nuestro sistema</li>;

    let paginacion = <Paginacion
        key={'paginacion'}
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
    />;

    if (cursos.length > 0) {
        let items = currentCursos.map(
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
        );
        lista = [items, paginacion];
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="display-6 amarillo">Nuestros Cursos</span>
                <Link className="btn btn-primary" to="/curso/save/0">Registrar Nuevo Curso</Link>
            </div>

            <ul className="list-group">
                {lista}
            </ul>
        </>
    );
}



