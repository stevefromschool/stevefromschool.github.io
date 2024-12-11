// Get current month as number

function darkMode() {
    var darkPicker = document.querySelector("#bg-picker");
    darkPicker.classList.remove("seasonal-bg");
    darkPicker.classList.remove("default-bg");
    darkPicker.classList.toggle("dark-bg");
}

function seasonalMode() {
    var seasonalPicker = document.querySelector("#bg-picker");
    seasonalPicker.classList.remove("dark-bg");
    seasonalPicker.classList.remove("default-bg");
    seasonalPicker.classList.toggle("seasonal-bg");
}


var currentMonth = new Date().getMonth();

    // Test other months
    var currentMonth = currentMonth - 0;
    console.log(currentMonth);

    if (currentMonth === 11) {
        // December
        document.getElementById("bg-picker").classList.add('christmas-theme');
        document.querySelector("button.seasonal-button span").innerText = 'Christmas Theme';
        document.querySelector("button.seasonal-button i").classList.add('fa-tree');
        
        } else if (currentMonth === 0) {
        // January
        document.getElementById("bg-picker").classList.add('ny-theme');
        document.querySelector("button.seasonal-button span").innerText = 'New Year Theme';
        document.querySelector("button.seasonal-button i").classList.add('fa-champagne-glasses');

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


