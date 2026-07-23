// Welcome message
window.onload = function () {
    console.log("Welcome to Legacy Books!");
};

// Search button
const searchButton = document.querySelector(".search-box button");

if (searchButton) {
    searchButton.addEventListener("click", function () {
        alert("Search feature will be available soon!");
    });
}

// Explore button
const exploreButton = document.querySelector(".hero-btn");

if (exploreButton) {
    exploreButton.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelector(".featured-books").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// View Details buttons
const buttons = document.querySelectorAll(".book-card button");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        alert("Book details page coming soon!");
    });
});