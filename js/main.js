const costoKm = 0.21;
const costoKmsconto20 = 0.21 - (0.21 * 0.2);
const costoKmsconto40 = 0.21 - (0.21 * 0.4);

var etaPasseggero = prompt("Inserisci la tua età");
console.log(etaPasseggero);

var kmTotali = prompt("Inserisci i km del tuo viaggio");
console.log(kmTotali);


if (etaPasseggero <= 17) {
  alert("Il prezzo del biglietto è di " + (Math.round(kmTotali * costoKmsconto20 * 100)/100).toFixed(2) + " euro");
}
else if (etaPasseggero >= 65) {
  alert("Il prezzo del biglietto è di " + (Math.round(kmTotali * costoKmsconto40 * 100)/100).toFixed(2) + " euro");
}
else {
  alert("Il prezzo del biglietto è di " + kmTotali * costoKm + " euro");
}
