import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the Db provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DbProvider  {

  db : SQLiteObject = null;
  constructor(public sqlite: SQLite) {
    console.log('Hello Db Provider');
  }

  public openDb(){
      return this.sqlite.create({
          name: 'data.db',
          location: 'default' // el campo location es obligatorio
      })
      .then((db: SQLiteObject) => {
       this.db =db;
     })
  }

  public createTableSitios(){
    return this.db.executeSql("create table if not exists sitios( id INTEGER PRIMARY KEY AUTOINCREMENT, lat FLOAT, lng FLOAT, direccion TEXT, descripcion TEXT, foto TEXT )",{})
  }

  public addSitio(sitio){
    let sql = "INSERT INTO sitios (lat, lng, direccion, descripcion, foto) values (?,?,?,?,?)";
    return this.db.executeSql(sql,[sitio.lat,sitio.lng,sitio.direccion,sitio.descripcion,sitio.foto]);
  }

  public getSitios(){
    let sql = "SELECT * FROM sitios";
    return this.db.executeSql(sql,{});
  }

  public modificaSitio(sitio){
    let sql = "UPDATE sitios  SET lat = ?, lng = ?, direccion = ?, descripcion = ?, foto = ? WHERE id = ? ";
    return this.db.executeSql(sql,[sitio.lat,sitio.lng,sitio.direccion,sitio.deescripcion,sitio.foto, sitio.id]);
  }

}
