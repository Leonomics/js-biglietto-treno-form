let userNamePlusSurname;
let prezzoBase;
let prezzoScontato;
let underagedDiscount = 0.20;
let over65Discount = 0.40;
let prezzoFinale;
const pricePerKm = 0.21;

let nomePassseggeroDisplay;
let tipoOffertaDisplay;
let numeroCarrozzaDisplay;
let codiceCPDisplay;
let costoBigliettoDisplay;


function saveUserData() {
     userNamePlusSurname = document.getElementById('user_name').value;
     userKm = document.getElementById('user_km').value;
     userAgeRange = document.getElementById('age_range').value;

     userKm = parseInt(userKm);
     if(isNaN (userKm))    {
        alert("Scrivi i kilometri in cifre");
     }
     else  {
        console.log("nome e cogmome: " + userNamePlusSurname);
        console.log("km: " + userKm);
        console.log("età: " + userAgeRange);

        if(userAgeRange == "maggiorenne") {
            let prezzoBase = (userKm * pricePerKm);
            let prezzoFinale = Math.round((prezzoBase + Number.EPSILON) * 100) / 100;
            let tipoOfferta = "Biglietto standard";
            let numeroCarrozza = Math.floor(Math.random() * 10);
            let codiceCP= Math.floor(Math.random() * 1000 + 1000);
            
            nomePassseggeroDisplay = document.getElementById('nome_passeggero').innerHTML = userNamePlusSurname;
            tipoOffertaDisplay = document.getElementById('tipo_offerta').innerHTML = tipoOfferta;
            numeroCarrozzaDisplay = document.getElementById('numero_carrozza').innerHTML = numeroCarrozza;
            codiceCPDisplay = document.getElementById('codice_cp').innerHTML = codiceCP;
            costoBigliettoDisplay = document.getElementById('costo_biglietto').innerHTML = prezzoFinale + "€";
            
        }
        else if(userAgeRange == "minorenne") {
            prezzoBase = (userKm * pricePerKm);
            prezzoScontato = (prezzoBase) - ((prezzoBase) * underagedDiscount);
            prezzoFinale = Math.round((prezzoScontato + Number.EPSILON) * 100) / 100
            let tipoOfferta = "Sconto minorenni";
            let numeroCarrozza = Math.floor(Math.random() * 10);
            let codiceCP= Math.floor(Math.random() * 1000 + 1000);
            
            nomePassseggeroDisplay = document.getElementById('nome_passeggero').innerHTML = userNamePlusSurname;
            tipoOffertaDisplay = document.getElementById('tipo_offerta').innerHTML = tipoOfferta;
            numeroCarrozzaDisplay = document.getElementById('numero_carrozza').innerHTML = numeroCarrozza;
            codiceCPDisplay = document.getElementById('codice_cp').innerHTML = codiceCP;
            costoBigliettoDisplay = document.getElementById('costo_biglietto').innerHTML = prezzoFinale + "€";
        }
        else if(userAgeRange == "over65") {
            prezzoBase = (userKm * pricePerKm);
            prezzoScontato = (prezzoBase) - ((prezzoBase) * over65Discount);
            prezzoFinale = Math.round((prezzoScontato + Number.EPSILON) * 100) / 100
            let tipoOfferta = "Sconto over 65";
            let numeroCarrozza = Math.floor(Math.random() * 10);
            let codiceCP= Math.floor(Math.random() * 1000 + 1000);
            
            nomePassseggeroDisplay = document.getElementById('nome_passeggero').innerHTML = userNamePlusSurname;
            tipoOffertaDisplay = document.getElementById('tipo_offerta').innerHTML = tipoOfferta;
            numeroCarrozzaDisplay = document.getElementById('numero_carrozza').innerHTML = numeroCarrozza;
            codiceCPDisplay = document.getElementById('codice_cp').innerHTML = codiceCP;
            costoBigliettoDisplay = document.getElementById('costo_biglietto').innerHTML = prezzoFinale + "€";
        }
        else    {
            alert("Something went wrong");
        }
     }
  }

