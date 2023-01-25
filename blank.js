function displaydate() {
    document.getElementById("blank").innerHTML = Date();
}

function addtwo() {
    let x = 3;
    let y = 3;

    document.getElementById("sum").innerHTML = (x + y);
}

function no1() {
    let x = document.getElementById("num1").value;
    alert(x*x);
}

function ave() {
    let a = parseInt(document.getElementById("math").value);
    let b = parseInt(document.getElementById("science").value);
    let c = parseInt(document.getElementById("econ").value);
    let d = parseInt(document.getElementById("english").value);
    alert((a+b+c+d)/4);
}

function drawline() {
    let e = document.getElementById("can");
    let pen = e.getContext("2d");
    pen.moveTo(0,0);
    pen.lineTo(50,50);
    pen.stroke();
}