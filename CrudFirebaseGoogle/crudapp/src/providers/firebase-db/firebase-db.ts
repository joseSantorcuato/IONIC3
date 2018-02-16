import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AutenticaProvider } from '../../providers/autentica/autentica';
import * as firebase from 'firebase/app';
/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  constructor(public afDb: AngularFireDatabase, public auth: AutenticaProvider) {
    console.log('Hello FirebaseDbProvider Provider');
  }

addEstudiante(estudiante){
  if(!estudiante.id){
  estudiante.id = Date.now();

  }

  return this.afDb.database.ref('estudiantes/'+this.auth.getUser()+'/'+estudiante.id).set(estudiante);
}

getEstudiantes(){
    return this.afDb.list('estudiantes/'+this.auth.getUser()).valueChanges();
  }



  guardaEstudiante(estudiante){
   if(!estudiante.id){
      estudiante.id  = Date.now();
    }
    return this.afDb.database.ref('estudiantes/'+this.auth.getUser()+'/'+estudiante.id).set(estudiante)
  }

  modificaEstudiante(estudiante){

    return this.afDb.database.ref('estudiantes/'+this.auth.getUser()+'/'+estudiante.id).update(estudiante)
  }

  public borrarEstudiante(id){
        this.afDb.database.ref('estudiantes/'+this.auth.getUser()+'/'+id).remove();

}

}
