// esercizio mail

// Chiedi all’utente la sua email
var emailUtente = prompt("Inserisci la tua email");
console.log(emailUtente);

// lista di email che hanno accesso al portale
var emailList = ["pippo@mail.it", "mario@mail.it", "silvia@mail.it", "fabio@mail.it", "dario@mail.it", "claudia@mail.it", "andrea@mail.it", "fabiana@mail.it"];

// controlla che sia nella lista di chi può accedere
var accessoAlPortale = false;
for (var i = 0; i < emailList.length; i++) {
  if (emailUtente == emailList[i]) {
    accessoAlPortale = true;
  }
}

// stampa un messaggio appropriato sull’esito del controllo.
if (accessoAlPortale == true) {
  console.log("esito riuscito! Benvenuto nel portale!");
}
else {
  console.log("esito fallito! Riprova..." );
}
