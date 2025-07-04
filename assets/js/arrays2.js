// Loop through the JSON array from Strapi and output it on the page. 

const xmlhttp2 = new XMLHttpRequest();

xmlhttp2.open("GET", "https://proud-approval-39492e9709.strapiapp.com/api/introduction", false);

xmlhttp2.onload = function() {
    const introObj = JSON.parse(this.responseText);
    let favouriteIntro = "";

    for(let i = 0, l = introObj.data.length; i < l; i++) {

        favouriteIntro += "<p>" + introObj.data[i].Introduction + "</p>"; 

        document.getElementById("favsIntro").innerHTML = favouriteIntro;
    }
}

xmlhttp2.send();

