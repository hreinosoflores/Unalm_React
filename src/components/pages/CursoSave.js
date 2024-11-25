import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Curso from '../../model/Curso';
import { Link, useParams, useNavigate } from 'react-router-dom';


export default function CursoSave() {


    const [curso, setCurso] = useState({});
    const [formTitle, setFormTitle] = useState('Nuevo Curso');
    const [formButton, setFormButton] = useState('Registrar');
    const [error, setError] = useState({});
    const [validado, setValidado] = useState(false);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (id !== '0') {
            fetch(window.$apiURL + window.$urlCursos + id)
                .then(response => response.json())
                .then(data => {
                    setCurso(data);
                    setFormTitle('Editando Curso');
                    setFormButton('Guardar Cambios');
                    document.title = window.$title + formTitle;
                });
        }
        document.title = window.$title + formTitle;

    }, [formTitle, id]);


    var addCurso = () => {

        const {
            codigo,
            nombre,
            creditos,
            horasTeoria,
            horasPractica,
            sumilla
        } = curso;

        let cursoObj = new Curso(
            undefined,
            codigo,
            nombre,
            creditos,
            horasTeoria,
            horasPractica,
            sumilla,
            new Date(),
            new Date()
        );

        fetch(window.$apiURL + window.$urlCursos,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cursoObj)
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
                    console.log('Curso -> ', data);
                    alert('El curso fue registrado con éxito.');
                    navigate('/');
                }
            );
    }

    var updateCurso = (cursoId) => {

        const {
            codigo,
            nombre,
            creditos,
            horasTeoria,
            horasPractica,
            sumilla,
            createdAt
        } = curso;

        let cursoObj = new Curso(
            cursoId,
            codigo,
            nombre,
            creditos,
            horasTeoria,
            horasPractica,
            sumilla,
            createdAt,
            new Date()
        );

        fetch(window.$apiURL + window.$urlCursos + cursoId,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cursoObj)
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
                    console.log('Curso -> ', data);
                    alert('El curso fue modificado con éxito.');
                    navigate('/');
                }
            );
    }

    var setField = (field, value) => setCurso(curso => ({ ...curso, [field]: value }));


    var submit = (e) => {
        //Previene que se vuelva a recargar la pagina, comportamiento default del submit
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            if (form.codigo.value === '') {
                setError(error => ({ ...error, codigo: 'El curso necesita un código.' }));
            } else {
                setError(error => ({ ...error, codigo: 'El código ingresado no coincide con el patrón "AA####".' }));
            }

            if (form.nombre.value === '') {
                setError(error => ({ ...error, nombre: 'El curso necesita un código.' }));
            }

            if (isNaN(parseInt(form.creditos.value))) {
                setError(error => ({ ...error, creditos: 'Ingresar un numero entero positivo menor de 4 dígitos.' }));
            } else if (parseInt(form.creditos.value) < 0) {
                setError(error => ({ ...error, creditos: 'Debe ser mayor que cero.' }));
            } else {
                setError(error => ({ ...error, creditos: 'Debe ser menor de 4 dígitos.' }));
            }

            if (isNaN(parseInt(form.horasTeoria.value))) {
                setError(error => ({ ...error, horasTeoria: 'Ingresar un numero entero positivo menor de 4 dígitos.' }));
            } else if (parseInt(form.horasTeoria.value) < 0) {
                setError(error => ({ ...error, horasTeoria: 'Debe ser mayor que cero.' }));
            } else {
                setError(error => ({ ...error, horasTeoria: 'Debe ser menor de 4 dígitos.' }));
            }

            if (isNaN(parseInt(form.horasPractica.value))) {
                setError(error => ({ ...error, horasPractica: 'Ingresar un numero entero positivo menor de 4 dígitos.' }));
            } else if (parseInt(form.horasPractica.value) < 0) {
                setError(error => ({ ...error, horasPractica: 'Debe ser mayor o igual que cero.' }));
            } else {
                setError(error => ({ ...error, horasPractica: 'Debe ser menor de 4 dígitos.' }));
            }

            if (form.sumilla.value === '') {
                setError(error => ({ ...error, sumilla: 'El curso necesita una breve sumilla.' }));
            }

        } else {
            if (id !== '0') {
                updateCurso(id);
            } else {
                addCurso();
            }
        }
        setValidado(true);
    }

    return (
        <div className="bg-white p-4 shadow rounded">
            <Form noValidate validated={validado} onSubmit={submit}>
                <span className="display-6 rojo">{formTitle}</span>
                <hr />
                <h5>(*) Campos obligatorios</h5><br />
                <Form.Group className="mb-3" controlId="codigo">
                    <Form.Control
                        type="text"
                        placeholder="* Código del curso..."
                        className="shadow-sm bg-white"
                        name="codigo"
                        onChange={e => setField('codigo', e.target.value)}
                        defaultValue={curso.codigo}
                        required
                        pattern="^[A-Z]{2}[0-9]{4}$"
                        maxLength="6" />
                    <Form.Control.Feedback type="invalid">
                        {error.codigo}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Control
                        type="text"
                        placeholder="* Nombre del curso..."
                        className="shadow-sm bg-white"
                        name="nombre"
                        onChange={e => setField('nombre', e.target.value)}
                        defaultValue={curso.nombre}
                        required
                        maxLength="100" />
                    <Form.Control.Feedback type="invalid">
                        {error.nombre}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="creditos">
                    <Form.Control
                        type="number"
                        placeholder="* Cantidad de créditos..."
                        className="shadow-sm bg-white"
                        name="creditos"
                        onChange={e => setField('creditos', e.target.value)}
                        defaultValue={curso.creditos}
                        required
                        min="1"
                        max="9999" />
                    <Form.Control.Feedback type="invalid">
                        {error.creditos}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="horasTeoria">
                    <Form.Control
                        type="number"
                        placeholder="* Horas de teoría..."
                        className="shadow-sm bg-white"
                        name="horasTeoria"
                        onChange={e => setField('horasTeoria', e.target.value)}
                        defaultValue={curso.horasTeoria}
                        required
                        min="1"
                        max="9999" />
                    <Form.Control.Feedback type="invalid">
                        {error.horasTeoria}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="horasPractica">
                    <Form.Control
                        type="number"
                        placeholder="* Horas de práctica..."
                        className="shadow-sm bg-white"
                        name="horasPractica"
                        onChange={e => setField('horasPractica', e.target.value)}
                        defaultValue={curso.horasPractica}
                        required
                        min="0"
                        max="9999" />
                    <Form.Control.Feedback type="invalid">
                        {error.horasPractica}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="sumilla">
                    <Form.Control
                        as="textarea"
                        rows={10}
                        placeholder="* Escriba una sumilla..."
                        className="shadow-sm bg-white"
                        name="sumilla"
                        onChange={e => setField('sumilla', e.target.value)}
                        defaultValue={curso.sumilla}
                        required />
                    <Form.Control.Feedback type="invalid">
                        {error.sumilla}
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">
                        {formButton}
                    </Button>
                    <Link className="btn btn-outline-primary w-100" to="/">Cancelar</Link>
                </div>
            </Form>
        </div>
    );

}


// class CursoDetalle extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             curso: {},
//             formTitle: 'Nuevo Curso',
//             formButton: 'Registrar',
//             errors: {},
//             validado: false
//         };
//     }

//     componentDidMount() {
//         const { match: { params } } = this.props;
//         if (params.id !== '0') {
//             this.getCurso(params.id);
//             this.setState(prevState => {
//                 prevState.formTitle = 'Editando Curso';
//                 prevState.formButton = 'Guardar Cambios';
//                 document.title = window.$title + prevState.formTitle;
//             }
//             );
//         }

//         document.title = window.$title + this.state.formTitle;
//     }

//     getCurso = (id) => {
//         fetch(window.$apiURL + window.$urlCursos + id)
//             .then(response => response.json())
//             .then(data => this.setState({ curso: data }));
//     }


//     addCurso = () => {
//         let curso = new Curso(
//             undefined,
//             this.state.curso.codigo,
//             this.state.curso.nombre,
//             this.state.curso.creditos,
//             this.state.curso.horasTeoria,
//             this.state.curso.horasPractica,
//             this.state.curso.sumilla,
//             new Date(),
//             new Date()
//         );

//         fetch(window.$apiURL + window.$urlCursos,
//             {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(curso)
//             }
//         )
//             .then(
//                 response => {
//                     if (response.ok) {
//                         return response.text()
//                     } else {
//                         throw new Error("Error en la llamada Ajax")
//                     }
//                 }
//             )
//             .then(
//                 data => {
//                     console.log('Curso -> ', data);
//                     alert('El curso fue registrado con éxito.');
//                     this.props.history.push("/");
//                 }
//             );
//     }

//     updateCurso = (cursoId) => {

//         let curso = new Curso(
//             cursoId,
//             this.state.curso.codigo,
//             this.state.curso.nombre,
//             this.state.curso.creditos,
//             this.state.curso.horasTeoria,
//             this.state.curso.horasPractica,
//             this.state.curso.sumilla,
//             this.state.curso.createdAt,
//             new Date()
//         );

//         fetch(window.$apiURL + window.$urlCursos + cursoId,
//             {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(curso)
//             }
//         )
//             .then(
//                 response => {
//                     if (response.ok) {
//                         return response.text()
//                     } else {
//                         throw new Error("Error en la llamada Ajax")
//                     }
//                 }
//             )
//             .then(
//                 data => {
//                     console.log('Curso -> ', data);
//                     alert('El curso fue modificado con éxito.');
//                     this.props.history.push("/");
//                 }
//             );
//     }



//     submit = (e) => {
//         e.preventDefault();
//         const form = e.currentTarget;
//         if (form.checkValidity() === false) {

//             e.stopPropagation();

//             if (form.codigo.value === '') {
//                 this.setErrors('codigo', 'El curso necesita un código.');
//             } else {
//                 this.setErrors('codigo', 'El código ingresado no coincide con el patrón "AA####".');
//             }

//             if (form.nombre.value === '') {
//                 this.setErrors('nombre', 'El curso necesita un nombre.');
//             }

//             if (isNaN(parseInt(form.creditos.value))) {
//                 this.setErrors('creditos', 'Ingresar un numero entero positivo menor de 4 dígitos.');
//             } else if (parseInt(form.creditos.value) < 0) {
//                 this.setErrors('creditos', 'Debe ser mayor que cero.');
//             } else {
//                 this.setErrors('creditos', 'Debe ser menor de 4 dígitos.');
//             }

//             if (isNaN(parseInt(form.horas_teoria.value))) {
//                 this.setErrors('horas_teoria', 'Ingresar un numero entero positivo menor de 4 dígitos.');
//             } else if (parseInt(form.horas_teoria.value) < 0) {
//                 this.setErrors('horas_teoria', 'Debe ser mayor que cero.');
//             } else {
//                 this.setErrors('horas_teoria', 'Debe ser menor de 4 dígitos.');
//             }

//             if (isNaN(parseInt(form.horas_practica.value))) {
//                 this.setErrors('horas_practica', 'Ingresar un numero entero positivo menor de 4 dígitos.');
//             } else if (parseInt(form.horas_practica.value) < 0) {
//                 this.setErrors('horas_practica', 'Debe ser mayor o igual que cero.');
//             } else {
//                 this.setErrors('horas_practica', 'Debe ser menor de 4 dígitos.');
//             }

//             if (form.sumilla.value === '') {
//                 this.setErrors('sumilla', 'El curso necesita una breve sumilla.');
//             }

//         } else {
//             const { match: { params } } = this.props;
//             if (params.id !== '0') {
//                 this.updateCurso(params.id);
//             } else {
//                 this.addCurso();
//             }
//         }
//         this.setState({ validado: true });
//     }

//     setCodigo = (e) => {
//         this.setState(prevState => (
//             {
//                 curso: { ...prevState.curso, codigo: e.target.value }
//             }
//         ));
//     }

//     setNombre = (e) => {
//         this.setState(prevState => (
//             {
//                 curso: { ...prevState.curso, nombre: e.target.value }
//             }
//         ));
//     }

//     setCreditos = (e) => {
//         this.setState(prevState => (
//             {
//                 curso: { ...prevState.curso, creditos: e.target.value }
//             }
//         ));
//     }

//     setHorasTeoria = (e) => {
//         this.setState(prevState => (
//             {
//                 curso: { ...prevState.curso, horasTeoria: e.target.value }
//             }
//         ));
//     }

//     setHorasPractica = (e) => {
//         this.setState(prevState => (
//             {
//                 curso: { ...prevState.curso, horasPractica: e.target.value }
//             }
//         ));
//     }

//     setSumilla = (e) => {
//         this.setState(prevState => (
//             {
//                 curso: { ...prevState.curso, sumilla: e.target.value }
//             }
//         ));
//     }

//     setErrors = (field, value) => {
//         this.setState(prevState => (
//             {
//                 errors: { ...prevState.errors, [field]: value }
//             }
//         ));
//     }

//     render() {
//         return (
//             <div className="bg-white p-4 shadow rounded">

//                 <Form noValidate validated={this.state.validado} onSubmit={this.submit}>
//                     <span className="display-6 rojo">{this.state.formTitle}</span>
//                     <hr />
//                     <h5>(*) Campos obligatorios</h5><br />

//                     <Form.Group className="mb-3" controlId="codigo">
//                         <Form.Control
//                             type="text"
//                             placeholder="* Código del curso..."
//                             className="shadow-sm"
//                             name="codigo"
//                             onChange={this.setCodigo}
//                             defaultValue={this.state.curso.codigo}
//                             required
//                             pattern="^[A-Z]{2}[0-9]{4}$"
//                             maxLength="6" />
//                         <Form.Control.Feedback type="invalid">
//                             {this.state.errors.codigo}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="nombre">
//                         <Form.Control
//                             type="text"
//                             placeholder="* Nombre del curso..."
//                             className="shadow-sm"
//                             name="nombre"
//                             onChange={this.setNombre}
//                             defaultValue={this.state.curso.nombre}
//                             required
//                             maxLength="100" />
//                         <Form.Control.Feedback type="invalid">
//                             {this.state.errors.nombre}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="creditos">
//                         <Form.Control
//                             type="number"
//                             placeholder="* Cantidad de créditos..."
//                             className="shadow-sm"
//                             name="creditos"
//                             onChange={this.setCreditos}
//                             defaultValue={this.state.curso.creditos}
//                             required
//                             min="1"
//                             max="9999" />
//                         <Form.Control.Feedback type="invalid">
//                             {this.state.errors.creditos}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="horas_teoria">
//                         <Form.Control
//                             type="number"
//                             placeholder="* Horas de teoría..."
//                             className="shadow-sm"
//                             name="horas_teoria"
//                             onChange={this.setHorasTeoria}
//                             defaultValue={this.state.curso.horasTeoria}
//                             required
//                             min="1"
//                             max="9999" />
//                         <Form.Control.Feedback type="invalid">
//                             {this.state.errors.horas_teoria}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="horas_practica">
//                         <Form.Control
//                             type="number"
//                             placeholder="* Horas de práctica..."
//                             className="shadow-sm"
//                             name="horas_practica"
//                             onChange={this.setHorasPractica}
//                             defaultValue={this.state.curso.horasPractica}
//                             required
//                             min="0"
//                             max="9999" />
//                         <Form.Control.Feedback type="invalid">
//                             {this.state.errors.horas_practica}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="sumilla">
//                         <Form.Control
//                             as="textarea"
//                             rows={10}
//                             placeholder="* Escriba una sumilla..."
//                             name="sumilla"
//                             onChange={this.setSumilla}
//                             defaultValue={this.state.curso.sumilla}
//                             required />
//                         <Form.Control.Feedback type="invalid">
//                             {this.state.errors.sumilla}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <div className="d-grid gap-2">
//                         <Button variant="primary" type="submit">
//                             {this.state.formButton}
//                         </Button>
//                         <Link to="/" >
//                             <Button className="w-100" variant="outline-primary" type="submit">
//                                 Cancelar
//                             </Button>
//                         </Link>
//                     </div>
//                 </Form>
//             </div>
//         );
//     }
// }

// export default CursoDetalle;

