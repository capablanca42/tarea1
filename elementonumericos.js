//Autor:Jandry Zambrano Palacios
//Fecha: 11-07-2024
//Tema: elementos de la funcion.
/*
Declare un array de 10 elementos numéricos. El noveno debe ser una función flecha (=>) que recibe un entero que indica la cantidad de veces que se imprime una palabra cualquier definida dentro de esta función(use el bucle while).
*/
const elementos = [1,2,3,4,5,6,7,8,,9,10];
//Imprime los elememtos del array
function ImprimeArray(elementos)
{
    for(let i=0; i < elementos.length; i++)
    {
        console.log(elementos[i]);
    }
}
ImprimeArray(elementos); 
console.log("Imrpimiendo el array" ,elementos);

//Imprime elementos multiplicados por 10
console.log("elementos multiplicados por 10");
elementos.forEach((elemento)=>{
    console.log(elememto*10);
});
//Diseñe la función que imprima un array
const Impvector = (vector) => 
    vector.forEach((elementos)=>{
        console.log(`imprimiendo elemento ${elementos}`);
    })
    const numeros =[10,20 ,40,60,80,,90,100];
    const muliplicacion =[10*1,2,3,4,5,6,7,8,9,10]
    Impvector(numeros);
impvector(multiplicacion);
