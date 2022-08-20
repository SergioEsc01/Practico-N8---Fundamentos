function invocarCallback(cb) {
    // Invoca al callback `cb`
    // Aqui tu codigo
    var nombre="sergio";
    return cb(nombre)
}
function decirhola(nombre){
console.log("hola", nombre)
}
invocarCallback(decirhola)

function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    // Aqui tu codigo
    return cb(numeros)
}  
function suma(numeros){
    const initialValue = 0;

    const sumWithInitial = numeros.reduce(
    
    (previousValue, currentValue) => previousValue + currentValue,
    
    initialValue);
    console.log(sumWithInitial)
}
sumarArray([1,2,3,4,5],suma)

function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    // Aqui tu codigo
    return cb(array)
}  
function mostrar(array){
    array.forEach(function(elemento, indice) {

        console.log(elemento); 
    });
}
forEach([1,2,3,4,5],mostrar)

function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    // Aqui tu codigo
    return cb(array)
}  
function nuevoarray(array){
var array2=array.map(function(x){
return x
});
console.log(array2)
}
map([1,2,3,4,5,6,7],nuevoarray)
