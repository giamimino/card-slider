let currentIndex = 0;  // Track the current slide index
const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth + 20; // Get the width of one card plus gap (20px)

document.getElementById('right').addEventListener('click', function() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        slideContainer();
    }
});

document.getElementById('left').addEventListener('click', function() {
    if (currentIndex < cards.length + 1) {
        currentIndex--;
        slideContainer();
        
    }
});

function slideContainer() {
    container.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
}
