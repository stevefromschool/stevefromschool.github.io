// Save email address and show it back as an alert
function saveData() {
    var fetchedData = document.getElementById('email').value;
    localStorage.setItem('savedData', fetchedData);

    var archivedData = localStorage.getItem('savedData');
    alert("Hello " + "'" + archivedData + "'" + ". Thank you for subscribing to my totally hypothetical fake newsletter!");
}
