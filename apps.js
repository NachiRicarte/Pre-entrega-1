console.log("conectado")

let nombre = prompt ("Por favor ingrese su nombre");

if (nombre === ""){

    alert ("No ingresaste nada");

} else{ 

    alert("Hola," + nombre + "!");

}

//La edad es un numero 

let edad = parseInt(prompt("Por favor, ingrese su edad:"));
if (!isNaN(edad))
  if (edad >= 18) {
    alert("Podes Ingresar, sos mayor de edad.");
  } else {
    alert("Sos menor de edad, no podes ingresar");
  }
else {
  alert("La entrada no es un número válido.");
}

