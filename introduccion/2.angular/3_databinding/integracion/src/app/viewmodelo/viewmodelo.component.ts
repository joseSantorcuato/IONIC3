import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../modelos/sucursales.model';
@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {
sucursal1 = new Sucursal (1, 'Las Condes', 'Apoquindo 3452', 'Santiago');
  constructor() { }

  ngOnInit() {
  }

}
