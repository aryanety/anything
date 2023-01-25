
function dropbox() {
    let froot = document.getElementById("item").value;

    let banan = document.getElementById("cost").value;

    let cherry = document.getElementById("qty").value;

    let appel = document.createElement("div");
    appel.style.color = "blue" 
    appel.style.backgroundColor = "pink"

    let bee = document.createElement("br");

    let bee2 = document.createElement("br");

    let canteloupe = document.createTextNode(froot);

    let corn = document.createTextNode(banan);

    let pinaple = document.createTextNode(cherry);

    let oreng = document.getElementById("any");

    oreng.appendChild(appel);

    appel.appendChild(canteloupe);
    appel.appendChild(bee);
    appel.appendChild(corn);
    appel.appendChild(bee2);
    appel.appendChild(pinaple);
}