let nb1;
let nb2;
let tentatives;
let choix="oui";
while (choix=="oui") {
    nb1 = prompt("Donner un nombre 1");
    tentatives=10;
    let victoire="D";
    while (tentatives>0 && victoire!="V") {
        nb2 = prompt("Donner un nombre 2");
        if (nb1==nb2) {
            alert("Bravo!");
            victoire= "V";
        }
        else if (nb2>nb1) {
            tentatives==tentatives-1;
            alert("C'est -");
        } else {
            alert("C'est +");
        }
    }
    choix = prompt("Voulez-vous recommencer?");
}
