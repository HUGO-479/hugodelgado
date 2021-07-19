//delcarando variables para los controles 
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimiento para mostrar
function MostrarAlumno(){
    //declaramos una variable para guardar los datos
    var listaalumno=Mostrar();
    //selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    
    //agregamos las columnas que se registren
    for(var i=0 ; i<listaalumno.length;i++){
    //declaramos una variable para la fila
    var fila=tbody.insertRow(i);
    //declaramos variables para los titulos
    var titulonombre=fila.insertCell(0);
    var tituloapellido=fila.insertCell(1);
    var titulodni=fila.insertCell(2);
    var titulocurso=fila.insertCell(3);
    var tituloturno=fila.insertCell(4);
    var titulohabilitado=fila.insertCell(5);

    //agregamos los valores
    titulonombre.innerHTML=listaalumno[i].nombre;
    tituloapellido.innerHTML=listaalumno[i].apellido;
    titulodni.innerHTML=listaalumno[i].dni;
    titulocurso.innerHTML=listaalumno[i].curso;
    tituloturno.innerHTML=listaalumno[i].turno;
    titulohabilitado.innerHTML=listaalumno[i].habilitado;
    tbody.appendChild(fila);
    }
}
//creamos un procedimiento registrar los datos

function RegistrarDatos(){
    //capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    var cur=cboCurso.value;
    var tura=rbM.value;
    var hab=chkEst.value;
    //llamamos al procedimiento registrar
    Registrar(nom,ape,dni,cur,tura,hab);
    MostrarAlumno();
}

//agregamos un evento al boton 
//btnRegistrar.addEventListener("click",function(){
//    alert("Registre los datos");
//});
//function Mensaje(){
//    alert("Datos Registradors ");
//}
//agregamos el evento boton
btnRegistrar.addEventListener("click",RegistrarDatos);

