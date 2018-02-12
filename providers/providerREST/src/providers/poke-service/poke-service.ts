import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PokeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokeServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PokeServiceProvider Provider');
  }
  getPokemones() {
     return this.http.get('http://pokeapi.co/api/v2/pokemon');
     }
}
