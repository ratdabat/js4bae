const storyText = document.querySelector('.story-text');
const nextButton = document.getElementById('next');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const buttonContainer = document.querySelector('.button-container');
const huzzahText = document.getElementById('huzzahText');

const storyTexts = [
    "hi carrie",
    "you've made my life so happy lately",
    "i really cannot thank you enough",
    "so i want to remind you how much you mean to me...",
    "jan 4th 2024, 9:00pm, my place? (most parks are closed that late :( )"
];

let currentIndex = 0;

function showNextStoryText() {
    if (currentIndex <= storyTexts.length - 1) {
        storyText.classList.add('hidden');
        setTimeout(() => {
            storyText.textContent = storyTexts[currentIndex];
            storyText.classList.remove('hidden');
            currentIndex++;
        }, 500); // Wait for fade-out transition before updating text
    } else {
        // End of the story, hide the "Next" button, show the "Yes" and "No" buttons
        nextButton.style.opacity = 0;
        buttonContainer.style.opacity = 1;
        yesButton.classList.add('visible');
        noButton.classList.add('visible');
    }
}

nextButton.addEventListener('click', showNextStoryText);

// Original functionality for the "Yes" and "No" buttons

noButton.addEventListener("mouseenter", function() {
    moveButton(noButton);
});

function moveButton(button) {
    const maxX = window.innerWidth - 500; // Maximum X position (500 pixels from the right)
    const maxY = window.innerHeight - 500; // Maximum Y position (500 pixels from the bottom)

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.transform = `translate(${newX}px, ${newY}px)`;
}


// Original functionality for the "Yes" button
yesButton.addEventListener("click", function() {
   showHuzzahText();
});

function showHuzzahText() {
    // Hide the existing text and buttons
    storyText.classList.add('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');

    // Fade in the "Huzzah!" text
    huzzahText.classList.remove('hidden');
    setTimeout(() => {
        huzzahText.style.opacity = '1';
    }, 1); // Delay for smoother transition
}

function showMessage(message) {
    alert(message);
}

// Event listener for spacebar key press
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        showNextStoryText();
    }
});
