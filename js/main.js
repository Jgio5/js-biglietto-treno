const costoKm = 0.21;
const costoKmsconto20 = 0.21 - (0.21 * 0.2); //sconto 20% minorenni
const costoKmsconto40 = 0.21 - (0.21 * 0.4); //sconto 40% over 65

var etaPasseggero = prompt("Inserisci la tua età");
console.log(etaPasseggero);
document.getElementById('age').innerHTML = etaPasseggero;

var kmTotali = prompt("Inserisci i km del tuo viaggio");
console.log(kmTotali);
document.getElementById('km').innerHTML = kmTotali;

var prezzoKmStandard = (Math.round((kmTotali * costoKm) * 100)/100).toFixed(2);
var prezzoKmYoung = (Math.round(kmTotali * costoKmsconto20 * 100)/100).toFixed(2);
var prezzoKmSilver = (Math.round(kmTotali * costoKmsconto40 * 100)/100).toFixed(2);

//verifica Input numerici
if ( (isNaN(etaPasseggero)) && (isNaN(kmTotali)) ) {
  alert("Inserisci SOLO valori numerici");
}
else if ( isNaN(etaPasseggero) ) {
  alert("Inserisci un valore numerico per l'età");
}
else if ( isNaN(kmTotali) ) {
  alert("Inserisci un valore numerico per i km");
}
// Input numerici inseriti
  else {
  if (etaPasseggero <= 17) {
    document.getElementById('price').innerHTML =  prezzoKmYoung;
    document.getElementById('sconto').innerHTML = "Sconto Young 20%";
  }
  else if (etaPasseggero >= 65) {
    document.getElementById('price').innerHTML = prezzoKmSilver;
    document.getElementById('sconto').innerHTML = "Sconto Silver 40%";
  }
  else {
    document.getElementById('price').innerHTML = prezzoKmStandard;
    document.getElementById('sconto').innerHTML = "Non sono stati applicati degli sconti";
  }
}
