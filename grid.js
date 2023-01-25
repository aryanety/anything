let cost = 0;
let row = 0;

function dropbox() {
    let froot = document.getElementById("item").value;

    let banan = document.getElementById("cost").value;

    let cherry = document.getElementById("qty").value;

    let tomato = document.getElementById("tabel");

    document.getElementById("item").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("qty").value = "";

    if (froot.trim() == "" || banan.trim() == "" || cherry.trim() == "" ) { 
        alert("MISSING INPUT")
    }

    else {
        let ram = tomato.insertRow(-1);
        row += 1;

        let van = ram.insertCell(0);

        van.innerHTML = froot;

        let van1 = ram.insertCell(1);

        van1.innerHTML = banan;

        let van2 = ram.insertCell(2);

        van2.innerHTML = cherry;

        let van3 = ram.insertCell(3);

        van3.innerHTML = banan*cherry;
        cost += banan*cherry;
    }


}

function totel() {
    alert("The total is " + cost)
}

function cleer() {
    for (let i = 0; i < row; i++){
       document.getElementById("tabel").deleteRow(-1);
       cost = 0 
    }
}