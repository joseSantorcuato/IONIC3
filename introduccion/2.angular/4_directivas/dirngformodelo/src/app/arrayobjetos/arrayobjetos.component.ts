import { Component, OnInit } from '@angular/core';

import { Alumno } from 'app/modelos/alumno.model';

@Component({
  selector: 'app-arrayobjetos',
  templateUrl: './arrayobjetos.component.html',
  styleUrls: ['./arrayobjetos.component.css']
})
export class ArrayobjetosComponent implements OnInit {

  public alumnos: Array<Alumno> = [
    {id: 1 , nombre: 'Juan', apellido: 'Gutierrez', ciudad: 'Madrid'},
    {id: 2 , nombre: 'Pedro', apellido: 'Lopez', ciudad: 'Sevilla'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
