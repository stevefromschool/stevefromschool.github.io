// Loop through the JSON array in data.json and output it on the page. 

const xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "https://proud-approval-39492e9709.strapiapp.com/api/favourites", false);

xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    let favouriteList = "";

    for(let i = 0, l = myObj.data.length; i < l; i++) {

        favouriteList += "<li>" + myObj.data[i].Name + "</li>"; 

        document.getElementById("favsList").innerHTML = favouriteList;
    }
}

xmlhttp.send();
