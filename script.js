let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const attemptsMessage = document.getElementById('attempts');

// Function to handle the game logic
submitBtn.addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100!";
        message.style.color = "red";
        return;
    }

    attempts++;
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.style.color = "green";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "orange";
    } else {
        message.textContent = "Too high! Try again.";
        message.style.color = "orange";
    }

    attemptsMessage.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
    guessInput.focus();
});
