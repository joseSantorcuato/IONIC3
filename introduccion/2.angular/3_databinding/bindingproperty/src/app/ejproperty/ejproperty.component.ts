import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejproperty',
  templateUrl: './ejproperty.component.html',
  styleUrls: ['./ejproperty.component.css']
})
export class EjpropertyComponent implements OnInit {

  texto = 'Escribe algo';
  constructor() {
    setTimeout(() => {
    this.texto = 'por favor'; }, 3000);
}

  ngOnInit() {
  }

}
