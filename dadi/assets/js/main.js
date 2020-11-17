// esercizio DADI


// seleziono gli ID
var dadoUtente = document.getElementById("dado_utente");
var dadoPc = document.getElementById("dado_pc");

//genero numeri random da 1 a 6
numeroUtente = Math.floor((Math.random() * 6) + 1);
numeroPc = Math.floor((Math.random() * 6) + 1);


// attribuisco il valore generato dal calcolo random
dadoUtente.innerHTML =  numeroUtente;
dadoPc.innerHTML =  numeroPc;


// Stabilisco il vincitore, in base a chi fa il punteggio più alto.
var risultatoFinale = document.getElementById("risultato");

if (numeroUtente > numeroPc) {
  risultatoFinale.innerHTML = "Complimenti hai vinto!"
} else if (numeroUtente == numeroPc) {
  risultatoFinale.innerHTML = "Per un pelo, riprovaci!!!"
}else {
  risultatoFinale.innerHTML = "Hai perso, Loser!"
}
