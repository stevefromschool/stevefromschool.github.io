// Get current month as number

var currentMonth = new Date().getMonth();

// Test for other months
// var currentMonth = currentMonth + 1;
// console.log(currentMonth);

    // Apply different styles depending on current month
    if (currentMonth === 11) {
        // December
        document.getElementById("bg-picker").classList.add('christmas-theme');
        document.querySelector("button.seasonal-button p").innerText = 'Christmas';
        document.querySelector("button.seasonal-button i").classList.add('fa-gift');

        } else if (currentMonth === 0) {
        // January
        document.getElementById("bg-picker").classList.add('ny-theme');
        document.querySelector("button.seasonal-button p").innerText = "New Year's";
        document.querySelector("button.seasonal-button i").classList.add('fa-champagne-glasses');

        } else if (currentMonth === 1) {
        // February
        document.getElementById("bg-picker").classList.add('valentines-theme');
        document.querySelector("button.seasonal-button p").innerText = "Valentine's Day";
        document.querySelector("button.seasonal-button i").classList.add('fa-heart');

        } else if (currentMonth >= 2 && currentMonth <= 4) {
        // Spring months March - May
        document.getElementById("bg-picker").classList.add('spring-theme');
        document.querySelector("button.seasonal-button p").innerText = 'Spring';
        document.querySelector("button.seasonal-button i").classList.add('fa-seedling');

        } else if (currentMonth >= 5 && currentMonth <= 8) {
        // Summer months June - September
        document.getElementById("bg-picker").classList.add('summer-theme');
        document.querySelector("button.seasonal-button p").innerText = 'Summer';
        document.querySelector("button.seasonal-button i").classList.add('fa-umbrella-beach');

        } else if (currentMonth >= 9 && currentMonth <= 10) {
        // Autumn months October - November
        document.getElementById("bg-picker").classList.add('autumn-theme');
        document.querySelector("button.seasonal-button p").innerText = 'Autumn';
        document.querySelector("button.seasonal-button i").classList.add('fa-wind');

        } else {
        // Winter/remaining months December - February 
        document.getElementById("bg-picker").classList.add('winter-theme');
        document.querySelector("button.seasonal-button p").innerText = 'Winter';
        document.querySelector("button.seasonal-button i").classList.add('fa-snowflake');
    }


