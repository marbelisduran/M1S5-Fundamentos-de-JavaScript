console.log('Hola desde el archivo');
//String
var nombre;
console.log(nombre);

nombre = "Pedro";
console.log(nombre);

nombre = 'Otro\' \' Nombre';
console.log(nombre);

const id = 1645;
console.log(id);

/* id=888; */

console.log("172973")

//Number
var num = 15;
var num2 = 10.5

console.log(num, num2);

console.log(100 / 0);
console.log("hola" * 5)

//Boolean
var condicion = false;
var condicion2 = true;

console.log(condicion, condicion2);

var variableNull = null;

console.log(variableNull);

//Coerción/convrsión de datos
//Declao un tipo de dato numérico
var num=5;
console.log(String (num))
console.log(typeof String(num))
console.log((num+""))
console.log(typeof (num+""))

//Declaro un tipo de dato string

var numero="150"
console.log(numero);

console.log(+numero);
console.log(typeof(+numero));

console.log((Number+numero));
console.log(typeof((Number+numero)));


//Declaro un tipo de dato numerico
var condicion2=1;
//Declaro un tipo de dato String
var condicion="";

console.log(condicion2)
console.log(condicion)

console.log(Boolean(condicion2))

console.log(Boolean(condicion))

console.log(!!condicion2)

console.log(!!condicion)

/*
if(condicion){
    //se ejecuta este codigo si es true
}else if(Otra condicion){


} else{
    //se ejecuta si la condicon es false
}*/

var respuesta ="asdsa";
var mensaje="";
if(respuesta===3) {
    console.log("respuesta correta")
} else if (respuesta % 2 ==0) {
    console.log("Casi!!")
} else {
    console.log("respuesta incorreta")
    mensaje="Todo mal!!"
}

console.log(mensaje);



//Switch

var respuesta = 398;

switch(respuesta){
    case 3:
        console.log("respuesta correcta");
        break;
    case 2:
        console.log("casi!!!")
        break;
    default:
        console.log("mal")
}

//for
for(var i=0;i<=10;i++){
    console.log(i);
}

//while

var l = 0;
while (1 <= 10) {
    console.log(l);
    l++;
}

//do while

var l = 0;
do {
    console.log(l);
    l++;
} while (l !== 0);

//Funciones

function miPrimeraFuncion() {
    console.log("Hola, qué tal?" + nombre);
    
}

miPrimeraFuncion("Ramon")
miPrimeraFuncion("156")
miPrimeraFuncion("true")



var segudaFuncion = function (edad){
    console.log("Esta es una expresion de funcion" + edad);
}

segudaFuncion(15)


(function (nombre) {
    console.log("Hola, qué tal?" + nombre);
})("Ivan")