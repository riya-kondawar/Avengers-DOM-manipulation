// DOM: Avengers scripts.js file


// Change the title text
function changeText() {
    const title = document.getElementById("title");
    title.innerHTML = "Assemble! The Avengers Are Here!";
}

// highlight Avengers - changing the color & font size
function highlightAvengers() {
    const avengers = document.getElementsByClassName("avenger");
    for (let i = 0; i < avengers.length; i++) {
        avengers[i].style.color = "red"; 
        avengers[i].style.fontSize = "22px"; 
    }
}

// change image 
function changeImage() {
    const img = document.getElementById("avenger-img");
    img.src = "assets/avengers-image2.png"; 
    img.alt = "New Avengers Image";
}

// Add a new node
function addAvenger() {
    const avengerList = document.getElementById("avenger-list");

    const newAvenger = document.createElement("li");
    newAvenger.className = "avenger"; 
    newAvenger.style.color = "white"; 

    const avengerName = document.createTextNode("Spider-Man");
    newAvenger.appendChild(avengerName);

    // Append new node
    avengerList.appendChild(newAvenger);
}
