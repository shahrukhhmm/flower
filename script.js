onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        clearTimeout(c);
    }, 1000);
};


// Get the element
const textElement = document.querySelector('h2');

// Animation function
function animateText() {
    // Fade in and change color and size
    textElement.style.opacity = 1;
    textElement.style.color = 'rgb(255, 169, 169)';
    textElement.style.fontSize = '30px';

    // Wait for 2 seconds
    setTimeout(() => {
        // Fade out and change color and size
        textElement.style.opacity = 0.5;
        textElement.style.color = 'rgb(150, 100, 100)';
        textElement.style.fontSize = '25px';

        // Wait for another 2 seconds and repeat the animation
        setTimeout(animateText, 2000);
    }, 2000);
}

// Start the animation
animateText();