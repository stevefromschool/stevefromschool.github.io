import { CountUp } from '../countUp.js-2.8.0/dist/countUp.min.js';

// Only start after the whole DOM has loaded
window.addEventListener("load", function() {

    // Loop through all <li> tags and count 
    var favItems = document.querySelectorAll("ul#favsList li");
    const favsNumber = favItems.length

    // Count up to the favsNumber, put it back in #favsTotal. Only start counting after it is in view (scroll spy). 
      new CountUp('favsTotal', favsNumber);
        if (!countUp.error) {
            countUp.start();
        } else {
            console.error(countUp.error);
        }

});
