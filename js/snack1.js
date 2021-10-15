/* Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici. */

//Chiedo all'utente di inerire un numero e assegno l'entry alla variabile omonima
const entry = prompt("inserisci un numero:");
console.log("entry: " + entry);
//Faccio il casting dell'entry in un numero
let number = parseInt(entry);
console.log("number: " + number);
//Verifico che il number ottenuto non sia un Nan
console.log("number is Nan?: " + isNaN(number));
if (!isNaN(number)) {
  //Testo se l'entry è pari e assegno il valore alla variabile ePari
  let ePari = entry % 2 === 0;
  console.log("L'entry è pari? " + ePari);
  //Se ePari
  if (ePari) {
    //Stampo il numero
    console.log("Stampo numero pari " + number);
    alert(number);
  } else {
    //Stampo il numero successivo
    console.log("Stampo numero dispari " + (number + 1));
    alert(number + 1);
  }
}
