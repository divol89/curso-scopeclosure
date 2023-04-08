// variables
var a; // declarando
var b = 'b'; //declaramos / asignamos
b ='bb'; //reasignacion 
var a = 'a'; // redeclaracion

//global scope
var fruit = 'Apple'; // global
console.log(fruit);
function bestFruit() {
    console.log(fruit);
}

bestFruit();




function countries() {
    country = 'colombia'; //global
    console.log(country);
}

countries();
console.log(country);