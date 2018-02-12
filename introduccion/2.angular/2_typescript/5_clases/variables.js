var Curso = /** @class */ (function () {
    function Curso() {
        this.descripcion = "Curso de introducción Typescript";
    }
    //Metodos
    Curso.prototype.getEstudiantes = function () {
        return this.estudiantes;
    };
    Curso.prototype.setEstudiantes = function (estudiantes) {
        this.estudiantes = estudiantes;
    };
    Curso.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    Curso.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Curso.prototype.addEstudiante = function () {
        this.estudiantes++;
    };
    Curso.prototype.remEstudiante = function () {
        this.estudiantes--;
    };
    return Curso;
}());
var cursoAngular = new Curso();
cursoAngular.setEstudiantes(8);
cursoAngular.addEstudiante();
cursoAngular.remEstudiante();
cursoAngular.remEstudiante();
cursoAngular.remEstudiante();
console.log(cursoAngular.getEstudiantes());
console.log(cursoAngular.getDescripcion());
