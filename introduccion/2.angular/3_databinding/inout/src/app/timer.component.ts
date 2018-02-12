import { Component } from '@angular/core';

@Component({
  selector: 'timer',
  template: `
    <h1>{{ minutos }}: {{ segundos | number: '2.0' }}</h1>
    <p>
      <button class="btn btn-danger" (click)="togglePause()">{{ btnLabel }}</button>
    </p>
  `
})
export class TimerComponent {
  minutos: number;
  segundos: number;
  estaPausado: boolean;
  btnLabel: string;

  constructor() {
    this.minutos = 24;
    this.segundos = 59;
    setInterval(() => this.tick(), 1000);
  }

  reset() {
    this.minutos = 24;
    this.segundos = 59;
    this.btnLabel = 'Comenzar';
    this.togglePause();
  }

  private tick() {
    if (!this.estaPausado) {
      this.btnLabel = 'Pausar';
      if (--this.segundos < 0) {
        this.segundos = 59;
        if (--this.minutos < 0) {
          this.reset();
        }
      }
    }
  }

  togglePause() {
    this.estaPausado = !this.estaPausado;
    // if countdown has started
    if (this.minutos < 24 || this.segundos < 59) {
      this.btnLabel = this.estaPausado ? 'Resume' : 'Pausar';
    }
  }
}
