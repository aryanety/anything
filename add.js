function addfruit() {
    let listitem = document.createElement("li");
    let froot = document.getElementById("froot").value;
    
    if (froot.trim() != "") {

        let fruit = document.createTextNode(froot);

        listitem.appendChild(fruit);
        document.getElementById("froots").appendChild(listitem);

    } 
    
    else { 
        alert("enter a fruit");

    }
    
}

