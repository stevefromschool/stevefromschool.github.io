// Loop through the JSON array in data.json and output it on the page. 

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
const myObj = JSON.parse(this.responseText);

let favouriteList = "";

for(let i = 0, l = myObj.data.length; i < l; i++) {

favouriteList += "<li>" + myObj.data[i].favourite + "</li>"; 

document.getElementById("favsList").innerHTML = favouriteList;

}

}
xmlhttp.open("GET", "http://localhost:1337/api/favourites");
xmlhttp.send();

