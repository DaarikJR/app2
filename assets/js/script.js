// variable qui appelle "back" sur tout le document / les parenthèses appelle une fonction (string=chaine de caractere) guillement pour déclarer l'id / point virgule en fin de ligne
var back = document.getElementById("back");
var close = document.getElementById("close");
var download = document.getElementById("download");
var app1Btn = document.getElementById("app1Btn");
var app1BtnDesk = document.getElementById("app1BtnDesk");
// pour une classe
var btnModal = document.getElementsByClassName("btnModal");
console.dir(btnModal);
console.dir(back);
// assigne une valeur "=""
back.style.display = "none";
// Fonction de fermeture de la modale
function closeModal() {


    // Réinitialise les variables
    back.style.display = "none";

}

// Fonction de déploiement de la modale
function openModal() {
    // Affiche le modal à l'aide de CSS


    // Réinitialise les variables
    back.style.display = "block";
}
download.addEventListener("click", openModal);
app1BtnDesk.addEventListener("click", openModal);
app1Btn.addEventListener("click", openModal);
btnModal[0].addEventListener("click", openModal);
btnModal[1].addEventListener("click", openModal);
close.addEventListener("click", closeModal);


