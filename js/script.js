// prompt inserimento nome da parte dell'utente
let name = prompt("Inserisci il tuo nome");
// prompt inserimento cognome da parte dell'utente
let surname = prompt("Inserisci il tuo cognome");
// prompt inserimento colore preferito da parte dell'utente
let color = prompt("Inserisci il tuo colore preferito");
// generazione password
document.getElementById("g-password").innerHTML = name + surname + color + 21;