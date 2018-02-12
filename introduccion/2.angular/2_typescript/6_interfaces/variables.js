var Estudiante = /** @class */ (function () {
    function Estudiante() {
        this.nombre = 'Jose';
        this.edad = 42;
    }
    //Metodos
    Estudiante.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Estudiante.prototype.getNombre = function () {
        return this.nombre;
    };
    Estudiante.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Estudiante.prototype.getEdad = function () {
        return this.edad;
    };
    return Estudiante;
}());
var nuevoEstudiante = new Estudiante();
console.log(nuevoEstudiante.getNombre());
console.log(nuevoEstudiante.getEdad());
document.getElementById("nombre").innerHTML = nuevoEstudiante.getNombre();
document.getElementById("edad").innerHTML = nuevoEstudiante.getEdad().toFixed(0);
