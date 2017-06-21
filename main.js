function klik() {
    document.getElementById("start2").style.display = "block";
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.uvod_cir[1].aetos + "<br> " + myObj.uvod_cir[1].autor;
        
    }
};
xmlhttp.open("GET", "text.txt", true);
xmlhttp.send();




