// PUNTO C.

/*1. Saludo personalizado
let Nombre = prompt("Porfavor Digite su nombre: ")
console.log("Hola" + Nombre)
*/


/*2. Area de un rectangulo
let A = parseInt(prompt("Ingrese la altura: "));
let B= parseInt(prompt("Ingrese la Base: "));
let Resultado = A*B;
alert("El resultado es: "+ Resultado);
*/


/*3. Promedio de tres notas
let N1 = parseInt(prompt("Ingresa el N1: "));
let N2 = parseInt(prompt("Ingrese el N2: "));
let N3 = parseInt(prompt("Ingrese el N3: "));
let Suma = ( N1 + N2 + N3) 
let Promedio= Suma/ 3
alert("El resultado es: " + Promedio)
*/


/*4. Conversion de monedas
let Valor = parseInt(prompt("Digite el valor en pesos colombeianos: "));
let Resultado = Valor/4000;
alert ("El resultado es: " + Resultado)
*/


/*5. Conversion de temperatura
let Celsius = parseInt(prompt("Digite la temperatura en Cº: "));
const  Fahrenheit= (Celsius * 9/5) + 32;
alert("La conversion a Fahrenheit es de: " + Fahrenheit);
*/


/*6. Calcular perimetro
let Lado = parseInt(prompt("Ingrese la longitud del lado: "));
let Resultado = Lado*Lado;
alert("El perimetro es: " + Resultado)
*/


/*7. Calcular doble o tiple 
let Num = parseInt(prompt("Ingrese el numero: "));

let doble = Num * 2;
let Tiple = Num * 3;

alert(`EL doble de ${Num} es: ${doble} y el tiple de ${Num} es: ${Tiple}   `)
*/


// PUNTO D. 

/* //1. Factura de compra simple
let Nombre = prompt("Ingrese el Nombre del producto: 1; ");
let Precio = parseInt(prompt("Ingrese el precio: "));
let Cantidad = prompt("Ingrese la cantidad: ")

let Total = Precio * Cantidad;
alert(`El total de pagar por ${Cantidad} ${Nombre} es: ${Total}`);

//2. Salario Semanal
let NumHoras = parseInt(prompt("Ingrese el numero de horas: "));
let ValorHora = 50000;
let Resultado = NumHoras * ValorHora;

alert(`El total de sus horas pagadas es de: ${Resultado}`);

//3. Promedio d edad en grupo
let P1 = parseInt(prompt("Digite su edad: "))
let P2 = parseInt(prompt("Digite su edad: "))
let P3 = parseInt(prompt("Digite su edad: "))
let P4 = parseInt(prompt("Digite su edad: "))

let Suma = P1 + P2 + P3 + P4
let Promedio = Suma / 4;
alert ("El promedio de la edad en grupo es de: "+ Promedio);


//4. Consumo de Gasolina
let Kilometros = parseInt(prompt("Ingrese la cantidad de kilometros recorridos: "));
let ConsumoKilometro = parseFloat (prompt("Digite la cantidad de consumo: "))

let Resultado = Kilometros* ConsumoKilometro;
alert ("La cantidad de consumo de gasolina es de: " + Resultado)

//5. Tiempo de viaje
let Distancia = parseFloat(prompt("Ingrese la distancia recorrida: "));
let VelocidadPromedio = parseFloat(prompt("Ingrese la cantida promedio: "));
let Resultado = Distancia/ VelocidadPromedio;
alert("El tiempo de viaje es de: " + Resultado)


//6. Conversion de minutos a horas y minutos
let Minutos = parseInt(prompt("Ingrese la cantidad de minutos: "));
let Horas = Math.floor(Minutos/60);
let MinutosRestantes = Minutos %0.60;
alert(`La conversion de ${Minutos} minutos es: ${Horas} Horas y ${NumHoras} minutos`);

// Calculo de descuento simple
let PrecioProducto= parseFloat(prompt("Ingrese el precio del producto: "));
let Descuento= 0.10;

let ValorDescuento = PrecioProducto * Descuento;
let Total = PrecioProducto - ValorDescuento;

alert(`El descuento es: ${ValorDescuento} y el precio total es: ${Total}`)
*/