// Function to toggle the mobile menu
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Simulate enhancing image and caption with AI
function enhanceWithAI() {
    alert("Enhancing your content with AI...");
    // In a real-world case, this would link to an AI service like OpenAI's API for processing.
}

// Form submission for Contact Us page (if applicable)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            alert("Your message has been sent successfully!");
        });
    }
});
