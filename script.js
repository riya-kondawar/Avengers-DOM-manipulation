// scripts.js

// Change the description of Iron Man
function changeIronManDescription() {
    const description = document.getElementById('iron-man-description');
    description.innerHTML = 'Iron Man, a leader of the Avengers, always steps up when the world needs a hero!';
    description.style.color = 'yellow'; // Change text color to yellow
}

// Change the Iron Man image
function changeIronManImage() {
    const ironManImage = document.getElementById('iron-man-img');
    ironManImage.src = 'iron-man-new.jpg'; // Change to a new Iron Man image
}

// Change the description of Captain America
function changeCaptainAmericaDescription() {
    const description = document.getElementById('captain-america-description');
    description.innerHTML = 'Captain America, the ultimate symbol of justice and honor, always defends the helpless.';
    description.style.color = 'lightblue'; // Change text color to light blue
}

// Change the Captain America image
function changeCaptainAmericaImage() {
    const captainAmericaImage = document.getElementById('captain-america-img');
    captainAmericaImage.src = 'captain-america-new.jpg'; // Change to a new Captain America image
}

// DOM manipulation using getElementsByClassName and getElementsByTagName
document.addEventListener('DOMContentLoaded', () => {
    // Change footer text color using getElementsByClassName
    const footerText = document.getElementsByClassName('footer-text')[0];
    footerText.style.color = 'green';

    // Change header title font size using getElementsByTagName
    const headerTitle = document.getElementsByTagName('h1')[0];
    headerTitle.style.fontSize = '4rem';
});
