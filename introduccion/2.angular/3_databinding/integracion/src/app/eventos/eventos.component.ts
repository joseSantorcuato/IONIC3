import { Component, OnInit } from '@angular/core';
import { ViewmodeloComponent } from '../viewmodelo/viewmodelo.component';
import { Sucursal } from '../modelos/sucursales.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent extends ViewmodeloComponent implements OnInit {

texto = 'Originalmente el texto se carga así';
sucursal1 = new Sucursal (1, 'Las Condes', 'Apoquindo 3452', 'Santiago');

modTexto() {
this.texto = 'Al pulsar el botón el texto se muestra así';
this.sucursal1 = new Sucursal (3, 'La reina', 'Loreley 987', 'Santiago');


}
  constructor() {
  super();
  }

  ngOnInit() {
  }

}
