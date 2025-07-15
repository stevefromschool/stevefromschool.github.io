// Custom function for button toggle 

function darkMode() {
    var darkPicker = document.querySelector("#bg-picker");
    darkPicker.classList.remove("seasonal-bg");
    darkPicker.classList.remove("default-bg");
    darkPicker.classList.add("dark-bg");
    document.querySelector(".default-button p").classList.remove('active');
    document.querySelector(".seasonal-button p").classList.remove('active');
    document.querySelector(".dark-button p").classList.add('active');
}

function seasonalMode() {
    var seasonalPicker = document.querySelector("#bg-picker");
    seasonalPicker.classList.remove("dark-bg");
    seasonalPicker.classList.remove("default-bg");
    seasonalPicker.classList.add("seasonal-bg");
    document.querySelector(".default-button p").classList.remove('active');
    document.querySelector(".dark-button p").classList.remove('active');
    document.querySelector(".seasonal-button p").classList.add('active');
}

function defaultMode() {
    var defaultPicker = document.querySelector("#bg-picker");
    defaultPicker.classList.remove("dark-bg");
    defaultPicker.classList.remove("seasonal-bg");
    defaultPicker.classList.add("default-bg");
    document.querySelector(".default-button p").classList.add('active');
    document.querySelector(".dark-button p").classList.remove('active');
    document.querySelector(".seasonal-button p").classList.remove('active');
}