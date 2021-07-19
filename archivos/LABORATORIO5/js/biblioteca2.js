//delcarando variables para los controles 
var txtNom=document.getElementById("txtNom");
var txtPre=document.getElementById("txtPre");
var cboCategoria=document.getElementById("cboCategoria");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimiento para mostrar
function MostrarProducto(){
    //declaramos una variable para guardar los datos
    var listaproducto=Mostrar();
    //selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbProducto tbody");
    tbody.innerHTML="";
    
    //agregamos las columnas que se registren
    for(var i=0 ; i<listaproducto.length;i++){
    //declaramos una variable para la fila
    var fila=tbody.insertRow(i);
    //declaramos variables para los titulos
    var titulonombre=fila.insertCell(0);
    var tituloprecio=fila.insertCell(1);
    var titulocategoria=fila.insertCell(2);
    var titulocantidad=fila.insertCell(3);
    

    //agregamos los valores
    titulonombre.innerHTML=listaproducto[i].nombre;
    tituloprecio.innerHTML=listaproducto[i].precio;
    titulocategoria.innerHTML=listaproducto[i].categoria;
    titulocantidad.innerHTML=listaproducto[i].cantidad;
    tbody.appendChild(fila);
    }
}
//creamos un procedimiento registrar los datos

function RegistrarDatos(){
    //capturando valores
    var nom=txtNom.value;
    var pre=txtPre.value;
    var cat=cboCategoria.text;
    var can=txtCan.value;
    //llamamos al procedimiento registrar
    Registrar(nom,pre,cat,can);
    MostrarProducto();
}

//agregamos un evento al boton 
//btnRegistrar.addEventListener("click",function(){
//    alert("Registre los datos");
//});
//agregamos el evento boton
btnRegistrar.addEventListener("click",RegistrarDatos);
