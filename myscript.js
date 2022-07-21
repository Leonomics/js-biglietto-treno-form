let userNamePlusSurname;

function saveUserData() {
     userNamePlusSurname = document.getElementById('user_name').value;
     userKm = document.getElementById('user_km').value;
     userAgeRange = document.getElementById('age_range').value;

     if(isNaN (userKm))    {
        alert("Scrivi i kilometri in cifre");
     }

     console.log("nome e cogmome: " + userNamePlusSurname);
     console.log("km" + userKm);
     console.log("età" + userAgeRange);
  }

