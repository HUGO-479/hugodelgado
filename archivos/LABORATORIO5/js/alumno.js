
var Alumno=[];


function Registrar(nombrealumno,apellidoalumno,dnialumno,cursoalumno,turnoalumno,habilitadoalumno){
    var Nuevoalumno={
        nombre:nombrealumno,
        apellido:apellidoalumno,
        dni:dnialumno,
        curso:cursoalumno,
        turno:turnoalumno,
        habilitado:habilitadoalumno

    };
    Alumno.push(Nuevoalumno);

}
function Mostrar(){
    return Alumno;
}