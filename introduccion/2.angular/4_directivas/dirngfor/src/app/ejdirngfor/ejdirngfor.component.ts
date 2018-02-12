import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirngfor',
  templateUrl: './ejdirngfor.component.html',
  styleUrls: ['./ejdirngfor.component.css']
})
export class EjdirngforComponent implements OnInit {
cursos: string[];
  constructor() {
    this.cursos = ['Angular', 'Ionic', 'Html5'];

  }
  ngOnInit() {
  }

}
