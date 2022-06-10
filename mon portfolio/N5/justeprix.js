let nb1;
let nb2;
let tentatives;
let choix="oui";

while (choix=="oui") {
    nb1=prompt("donnez un nombre:")
tentatives=10;
let victoire="D";
    while (tentatives>0&&victoire!="V") {
        nb2=prompt("devinez le nombre:")

        if (nb2==nb1) {
            alert("Bravo !");
            victoire="V";
        }  
        
        else if (nb2>nb1) {
            tentatives=tentatives--;
            alert("c'est -");
        } else {
            alert("c'est +");
        }
        choix = prompt("voulez-vous recommencer?")
        if (tentatives==0) {
            alert("Vous avez perdu,le chiffre à deviner était "+ "nb1")
        }
    }
}

