/* isNaN(), devuelve NaN si le paso por parámetro un texto
   Number(), 
*/


// let num1= parseFloat(prompt(`Escribe el primer número:`));
// let num2= parseFloat(prompt(`Escribe el segundo número:`));
// let resultado = parseFloat(num1) + parseFloat(num2);
// alert(`El resultado de sumar ${num1} y ${num2} es igual a ${resultado}`);

// var nombre = `Maria`;
// let apellido = `Cruzado`;
// console.log(`EL dato es de tipo es ` + typeof(num1));
// console.log(`EL dato es de tipo es ` + typeof(num2));

let nombreUser = prompt("Introduzca su nombre");
let edadUser = parseInt(prompt("Introduzca su edad"));
document.write(`Bienvenido a la web ${nombreUser}! `);
document.write(`Su edad es de ${edadUser} y su edad al cuadrado es ${edadUser ** 2}. <br>`);

let precio1 = parseFloat(prompt("Introduzca el valor del primer producto"));
let precio2 = parseFloat(prompt("Introduzca el valor del segundo producto"));
document.write(`Gracias por su compra. El precio total es ${precio1 + precio2}`);


