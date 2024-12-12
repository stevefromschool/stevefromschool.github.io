
// 
var favItems = document.querySelectorAll(".loves ul li");

// Get number through console
console.log(favItems.length);

for (var i = 0; i < favItems.length; i++) {
    document.getElementById("favs").innerText = favItems.length;
}