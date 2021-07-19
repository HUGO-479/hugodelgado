//declarando variables para los controles
var txtCor = document.getElementById("txtCor");
var txtCon = document.getElementById("txtCon");
var btnRegistrar = document.getElementById("btnRegistrar")

function Limpiar(){
    txtCor.value=="";
    txtCon.value=="";
    txtCor.focus();
}

//creamos un procedimiento para registrar
function Registrar(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    }else{
        var cor=txtCor.value;
        var con=txtCon.value;
        
        auth.createUserWithEmailAndPassword(cor,con)
        .then((userCredential) => {
        alert("Se registro el usuario");
        Limpiar();
        })
        .catch((error) =>{
            alert("No se registro el usuario");
            var errorCode = error.code;
            var errorMessage = error.message;
        });

    }
}
//llamamos al procedimiento para registrar
btnRegistrar.addEventListener("click",Registrar);