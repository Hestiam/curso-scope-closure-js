// variables

var a; //delcarando
var b = 'b'; // Declaramo y asignamos

b= 'bb'; //Reasignamos
var a = 'aa' //redeclaramos


//Global Scope
var fruit = 'apple'; //scope global

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
    country = 'Colombia';// Si solo asignamos una variable , no importa si esta dentro de una función esta quedara con scope global
    console.log(country);
}

countries();
console.log(country);


