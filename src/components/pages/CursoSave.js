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
            formTitle : 'Nuevo Curso',
            formButton : 'Registrar'
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params.id !== '0') {
            this.getCurso(params.id);
            this.setState(
                {
                    formTitle : 'Editando Curso',
                    formButton : 'Guardar Cambios'
                }
            );
        }
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




/*

<div class="bg-white p-4 shadow rounded">

<form #saveForm="ngForm" (ngSubmit)="onSubmit()">

  <span class="display-6 formTitle">{{formTitle}}</span>

  <hr>
  <h5>(*) Campos obligatorios</h5><br />
  <div class="form-group">
    <input class="form-control bg-light shadow-sm" type="text" placeholder="* Código del curso..." id="codigo"
      name="codigo" required pattern="^[A-Z]{2}[0-9]{4}$" maxlength="6" [(ngModel)]="curso.codigo" #codigo="ngModel">
    <div *ngIf="codigo.valid || codigo.pristine;then space else codigoErr"></div>
    <ng-template #codigoErr>
      <div *ngIf="codigo.errors?.required" class="alert alert-danger p-0 mb-1">
        El curso necesita un código.
      </div>
      <div *ngIf="codigo.errors?.pattern" class="alert alert-danger p-0 mb-1">
        El código ingresado no coincide con el patrón "AA####".
      </div>
    </ng-template>
  </div>


  <div class="form-group">
    <input class="form-control bg-light shadow-sm" type="text" placeholder="* Nombre del curso..." id="nombre"
      name="nombre" required maxlength="100" [(ngModel)]="curso.nombre" #nombre="ngModel">
    <div *ngIf="nombre.valid || nombre.pristine;then space else nombreErr"></div>
    <ng-template #nombreErr>
      <div *ngIf="nombre.errors?.required" class="alert alert-danger p-0 mb-1">
        El curso necesita un nombre.
      </div>
      <div *ngIf="nombre.errors?.maxlength" class="alert alert-danger p-0 mb-1">
        Nombre demasiado largo.
      </div>
    </ng-template>

  </div>


  <div class="form-group">
    <input class="form-control bg-light shadow-sm" type="number" placeholder="* Cantidad de créditos..." id="creditos"
      name="creditos" required pattern="^[0-9]{1,4}$" min="1" [(ngModel)]="curso.creditos" #creditos="ngModel">
    <div *ngIf="creditos.valid || creditos.pristine;then space else creditosErr"></div>
    <ng-template #creditosErr>
      <div *ngIf="creditos.errors?.required" class="alert alert-danger p-0 mb-1">
        Se necesita asignarle créditos al curso.
      </div>
      <div *ngIf="creditos.errors?.pattern" class="alert alert-danger p-0 mb-1">
        Ingresar un numero entero positivo menor de 4 dígitos.
      </div>
      <div *ngIf="creditos.errors?.min" class="alert alert-danger p-0 mb-1">
        Debe ser mayor que cero.
      </div>
    </ng-template>
  </div>


  <div class="form-group">
    <input class="form-control bg-light shadow-sm" type="number" placeholder="* Horas de teoría..." id="horas_teoria"
      name="horas_teoria" required pattern="^[0-9]{1,4}$" min="1" [(ngModel)]="curso.horasTeoria"
      #horas_teoria="ngModel">
    <div *ngIf="horas_teoria.valid || horas_teoria.pristine;then space else horas_teoriaErr"></div>
    <ng-template #horas_teoriaErr>
      <div *ngIf="horas_teoria.errors?.required" class="alert alert-danger p-0 mb-1">
        Se necesita asignarle horas de teoría al curso.
      </div>
      <div *ngIf="horas_teoria.errors?.pattern" class="alert alert-danger p-0 mb-1">
        Ingresar un numero entero positivo menor de 4 dígitos.
      </div>
      <div *ngIf="horas_teoria.errors?.min" class="alert alert-danger p-0 mb-1">
        Debe ser mayor que cero.
      </div>
    </ng-template>
  </div>



  <div class="form-group">
    <input class="form-control bg-light shadow-sm" type="number" placeholder="* Horas de práctica..."
      id="horas_practica" name="horas_practica" required pattern="^[0-9]{1,4}$" min="0"
      [(ngModel)]="curso.horasPractica" #horas_practica="ngModel">
    <div *ngIf="horas_practica.valid || horas_practica.pristine;then space else horas_practicaErr"></div>
    <ng-template #horas_practicaErr>
      <div *ngIf="horas_practica.errors?.required" class="alert alert-danger p-0 mb-1">
        Se necesita asignarle horas de práctica al curso. (colocar cero si no tiene).
      </div>
      <div *ngIf="horas_practica.errors?.pattern" class="alert alert-danger p-0 mb-1">
        Ingresar un numero entero positivo menor de 4 dígitos.
      </div>
      <div *ngIf="horas_practica.errors?.min" class="alert alert-danger p-0 mb-1">
        Debe ser mayor o igual que cero.
      </div>
    </ng-template>
  </div>



  <div class="form-group">
    <textarea class="form-control bg-light shadow-sm" placeholder="* Escriba una sumilla..." name="sumilla"
      id="sumilla" rows="10" required [(ngModel)]="curso.sumilla" #sumilla="ngModel"></textarea>
    <div *ngIf="sumilla.valid || sumilla.pristine;then space else sumillaErr"></div>
    <ng-template #sumillaErr>
      <div *ngIf="sumilla.errors?.required" class="alert alert-danger p-0 mb-1">
        El curso necesita una breve sumilla.
      </div>
    </ng-template>
  </div>


  <div class="d-grid gap-2">
    <button class="btn btn-primary" type="submit" [disabled]="saveForm.invalid">{{formButton}}</button>
    <a class="btn btn-outline-primary" routerLink="/">Cancelar</a>
  </div>
</form>

<ng-template #space>
  <br />
</ng-template>

</div> */