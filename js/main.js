/* Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici. */

//Chiedo all'utente di inerire un numero e assegno l'entry alla variabile omonima
var entry = prompt("inserisci un numero:");
console.log("entry: " + entry);
//Faccio il casting dell'entry in un numero
var number = parseInt(entry);
console.log("number: " + number);
//Verifico che il number ottenuto non sia un Nan
console.log("number is Nan?: " + isNaN(number));
if (!isNaN(number)) {
  //Testo se l'entry è pari e
  let ePari = entry % 2 === 0;
  console.log("L'entry è pari?");
  if (ePari) {
    alert(number);
  } else {
    alert(number + 1);
  }
}
