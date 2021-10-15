/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi
fino a quando ne avrà tanti quanti l’altro. */

/* const array1 = [15, 2, 7];
const array2 = [5]; */

const array1 = ["ciao"];
const array2 = ["hola", "hello"];

//imposto un ciclo che si interromperà quando i due array avranno la stessa lunghezza
console.log(
  "I due array hanno la stessa lunghezza?: " + array1.length != array2.length
);
while (array1.length != array2.length) {
  //genero un nuovo elemento da aggiungere all'array deficitario
  let newElement = Math.round(Math.random() * 100);
  console.log(
    "Nuovo elemento da inserire nell'array deficitarion: " + newElement
  );
  //Imposto un if per definire quale dei due array ha un numero maggiore di elementi
  if (array1.length < array2.length) {
    //Aggiungo l'elemento generato all'array deficitario
    console.log("Inserisco il nuovo elemento nell'array 1");
    array1.push(newElement);
    console.log("Array 1 aggiornato: " + array1);
  } else {
    //Aggiungo l'elemento generato all'array deficitario
    console.log("Inserisco il nuovo elemento nell'array 2");
    array2.push(newElement);
    console.log("Array 2 aggiornato: " + array2);
  }
}

//Stampo a console il risultato del ciclo
console.log("Ciclo terminato i due array hanno la stessa lunghezza: ");
console.log(array1);
console.log(array2);
