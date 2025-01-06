// Get current month as number

var currentMonth = new Date().getMonth();

// Test for other months
var currentMonth = currentMonth + 1;
// console.log(currentMonth);

    // Apply different styles depending on current month
    if (currentMonth === 11) {
        // December
        document.getElementById("bg-picker").classList.add('christmas-theme');
        document.querySelector("button.seasonal-button span").innerText = 'Christmas Theme';
        document.querySelector("button.seasonal-button i").classList.add('fa-gift');

        } else if (currentMonth === 0) {
        // January
        document.getElementById("bg-picker").classList.add('ny-theme');
        document.querySelector("button.seasonal-button span").innerText = "New Year's Theme";
        document.querySelector("button.seasonal-button i").classList.add('fa-champagne-glasses');

        } else if (currentMonth === 1) {
        // February
        document.getElementById("bg-picker").classList.add('valentines-theme');
        document.querySelector("button.seasonal-button span").innerText = "Valentine's Day Theme";
        document.querySelector("button.seasonal-button i").classList.add('fa-heart');

        } else if (currentMonth >= 2 && currentMonth <= 4) {
        // Spring months March - May
        document.getElementById("bg-picker").classList.add('spring-theme');
        document.querySelector("button.seasonal-button span").innerText = 'Spring Theme';
        document.querySelector("button.seasonal-button i").classList.add('fa-seedling');

        } else if (currentMonth >= 5 && currentMonth <= 7) {
        // Summer months June - August
        document.getElementById("bg-picker").classList.add('summer-theme');
        document.querySelector("button.seasonal-button span").innerText = 'Summer Theme';
        document.querySelector("button.seasonal-button i").classList.add('fa-umbrella-beach');

        } else if (currentMonth >= 8 && currentMonth <= 10) {
        // Autumn months September - November
        document.getElementById("bg-picker").classList.add('autumn-theme');
        document.querySelector("button.seasonal-button span").innerText = 'Autumn Theme';
        document.querySelector("button.seasonal-button i").classList.add('fa-wind');

        } else {
        // Winter/remaining months December - February 
        document.getElementById("bg-picker").classList.add('winter-theme');
        document.querySelector("button.seasonal-button span").innerText = 'Winter Theme';
        document.querySelector("button.seasonal-button i").classList.add('fa-snowflake');
    }


