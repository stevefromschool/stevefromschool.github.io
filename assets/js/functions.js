// Custom function for button toggle 

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

function showContact() {
    var contactArea = document.querySelector("#subscribe_form");
    contactArea.classList.toggle("d-none");
}