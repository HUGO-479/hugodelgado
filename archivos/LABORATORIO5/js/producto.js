
var Producto=[];


function Registrar(nomproducto,preproducto,catproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        precio:preproducto,
        categoria:catproducto,
        cantidad:canproducto

    };
    Producto.push(NuevoProducto);

}
function Mostrar(){
    return Producto;
}