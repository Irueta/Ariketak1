
//1 Crea un array con los números del 1 al 10
const numerosArr = [1,2,3,4,5,6,7,8,9,10];



//2 Crea una función que reciba un array numérico y devuelva la suma de todos los elementos.
function sumaArr(arr) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}


//3 Crea una función que reciba un array con las edades de los clientes y devuelva un array con los que tienen la edad mínima.
function comprobarEdad(arr) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i]);
    }
    
}


//4 Crea una función que reciba una palabra y un array y busque la palabra en el array. Si la encuentra, devolverá true. Si no, devolverá false.
function buscarPalabra(palabra, arr) {
    for (let i = 0; i < array.length; i++) {
        if (arr[i] === palabra) {
            return true;
        }else{
            return false;
        }
    }
    
}


//5 Crea una función que reciba una palabra y cambie todos sus caracteres por "*".
function censurarPalabra(palabra) {
    let censurado = "";
    for (let i = 0; i < palabra.length; i++) {
        censurado += "*";
    }
    return censurado;
}

//6 Crea una función que reciba una frase y un array con las palabras que se deben censurar. La función devolverá la frase censurada.
let frase = "hola soy Jon";
const arr = ["hola", "Jon"];


 function censurarFrase(frase, arr) {
    const newArr = frase.split(" ");
    const newFraseArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if(arr[i]===newArr[j]){
                newFraseArray.push("*".repeat(newArr[j].length));
            } else {
                newFraseArray.push(newArr[j]);
            }
        } 
    } return newFraseArray.join(" ");
 }
