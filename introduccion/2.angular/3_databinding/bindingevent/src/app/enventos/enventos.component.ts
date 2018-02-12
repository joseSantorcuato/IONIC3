import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enventos',
  templateUrl: './enventos.component.html',
  styleUrls: ['./enventos.component.css']
})
export class EnventosComponent implements OnInit {

  texto = 'Originalmente el texto se carga así';
  modTexto() {
  this.texto = 'Al pulsar el botón el texto se muestra así';
}

  constructor() { }

  ngOnInit() {
  }

}
