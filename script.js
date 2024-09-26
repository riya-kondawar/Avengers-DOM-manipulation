// Avengers scripts.js file


// Function to change the title text using innerHTML
function changeText() {
    const title = document.getElementById("title");
    title.innerHTML = "Assemble! The Avengers Are Here!";
}

// Function to highlight Avengers by changing the color of text using getElementsByClassName
function highlightAvengers() {
    const avengers = document.getElementsByClassName("avenger");
    for (let i = 0; i < avengers.length; i++) {
        avengers[i].style.color = "red"; // Changing text color to red
        avengers[i].style.fontSize = "22px"; // Changing font size
    }
}

// Function to change the image source using getElementById
function changeImage() {
    const img = document.getElementById("avenger-img");
    img.src = "assets/avengers-image2.png"; // Update with a new Avengers image
    img.alt = "New Avengers Image";
}

// Function to add a new Avenger to the list
function addAvenger() {
    const avengerList = document.getElementById("avenger-list");

    // Create new list item
    const newAvenger = document.createElement("li");
    newAvenger.className = "avenger"; // Add class to new element
    newAvenger.style.color = "white"; // Set the color of new avenger

    // Create text node and append it to the new li element
    const avengerName = document.createTextNode("Spider-Man");
    newAvenger.appendChild(avengerName);

    // Append new avenger to the list
    avengerList.appendChild(newAvenger);
}
