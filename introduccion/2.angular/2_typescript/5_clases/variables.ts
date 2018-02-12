class Curso {

//Variables
public nombre: string;
public descripcion: string;
public horas: number;
public estudiantes: number;

constructor(){



this.descripcion = "Curso de introducción Typescript";

}

//Metodos
public getEstudiantes() {
return this.estudiantes;
}

public setEstudiantes(estudiantes: number) {
this.estudiantes = estudiantes;
}

public setDescripcion(descripcion: string) {
this.descripcion = descripcion;
}

public getDescripcion() {
return this.descripcion;
}

public addEstudiante(){
 this.estudiantes++;
 }

 public remEstudiante() {
  this.estudiantes--;
  }

}
 var cursoAngular = new Curso();
 cursoAngular.setEstudiantes(8);
 cursoAngular.addEstudiante();
 cursoAngular.remEstudiante();
 cursoAngular.remEstudiante();
 cursoAngular.remEstudiante();



 console.log(cursoAngular.getEstudiantes());
 console.log(cursoAngular.getDescripcion());
