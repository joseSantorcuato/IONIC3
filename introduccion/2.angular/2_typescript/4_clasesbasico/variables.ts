class Estudiante {

//Variables
public nombre: string;
public edad: number;


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
 nuevoEstudiante.setNombre('Jose');

 nuevoEstudiante.setEdad(42);



console.log(nuevoEstudiante.getNombre());
console.log(nuevoEstudiante.getEdad());
document.getElementById("nombre").innerHTML = nuevoEstudiante.getNombre();
document.getElementById("edad").innerHTML = nuevoEstudiante.getEdad().toFixed(0);
