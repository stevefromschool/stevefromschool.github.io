// Only start after the whole DOM has loaded
document.addEventListener("load", function(){

// Loop through all <li> tags and count 
    var favItems = document.querySelectorAll("ul#favsList li");

    // Get number through console
    console.log(favItems.length);

    // Count and insert into #favsTotal
    for (var i = 0; i < favItems.length; i++) {
      document.getElementById("favsTotal").innerHTML = favItems.length;
    }

});
