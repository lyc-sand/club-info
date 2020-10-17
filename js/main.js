function seconde() {
  var NAME = document.getElementById("classe-scolaire-1")
  NAME.className="btn btn-outline-secondary active"
  document.getElementById("classe-scolaire-2").style.display = "none";
  document.getElementById("classe-scolaire-3").style.display = "none";
  document.getElementById("classe_input").innerHTML= '<input class="input1" type="text" name="classe" value="Seconde">';
}
function premiere() {
  var NAME = document.getElementById("classe-scolaire-2")
  NAME.className="btn btn-outline-secondary active"
  document.getElementById("classe-scolaire-1").style.display = "none";
  document.getElementById("classe-scolaire-3").style.display = "none";
  document.getElementById("classe_input").innerHTML= '<input class="input1" type="text" name="classe" value="Première">';
}
function terminale() {
  var NAME = document.getElementById("classe-scolaire-3")
  NAME.className="btn btn-outline-secondary active"
  document.getElementById("classe-scolaire-1").style.display = "none";
  document.getElementById("classe-scolaire-2").style.display = "none";
    document.getElementById("classe_input").innerHTML= '<input class="input1" type="text" name="classe" value="Terminale">';
}

function inscription() {
  var prenom = document.getElementById("prenom").value;
  Swal.fire({
  icon: 'success',
  title: 'Merci, '+ prenom +' !',
  text: 'Ton inscription est validée.',
  footer: '<a>Club d\'informatique du Lycée George-Sand.</a>'
  })
}

function error_inscription() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Vous avez oublié une information.',
    footer: '<a>Veuillez compléter l\'inscription.</a>'
  })
}
