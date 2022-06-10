let nb;
let choix = "oui";


while (choix=="oui") {
    nb = prompt("donnez un nombre:");

    if (nb%2==1) {
        console.log("le nombre est impair");
    }
    else{
        console.log("le nombre est pair");
    }
    choix = prompt("voulez-vous recommencer ?")
}