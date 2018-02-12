interface DatosEstudiantes {
  nombre: string;
  direccion :string;
}


class Estudiante implements DatosEstudiantes {

//Variables
public nombre: string;
public edad: number;


constructor(){

  this.nombre = 'Jose';
  this.edad = 42;
}
//Metodos
public setNombre(nombre: string) {
this.nombre = nombre;
}

public getNombre() {
return this.nombre;
}

public setEdad(edad: number) {
this.edad = edad;
}

public getEdad() {
return this.edad;
}


}

var nuevoEstudiante = new Estudiante();


console.log(nuevoEstudiante.getNombre());
console.log(nuevoEstudiante.getEdad());
document.getElementById("nombre").innerHTML = nuevoEstudiante.getNombre();
document.getElementById("edad").innerHTML = nuevoEstudiante.getEdad().toFixed(0);
