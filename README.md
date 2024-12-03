<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the Number Game</title>
    <link rel="stylesheet" href="stylesheet.css">
</head>
<body>
    <div class="game-container">
        <h1>Guess the Number</h1>
        <p>Guess a number between 1 and 100</p>
        
        <input type="number" id="guessInput" placeholder="Enter your guess">
        <button id="submitBtn">Submit</button>
        
        <p id="message"></p>
        <p id="attempts"></p>
    </div>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background-color: #f3f4f6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.game-container {
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #333;
}

input {
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #45a049;
}

p {
    color: #333;
}

#message {
    font-weight: bold;
    font-size: 18px;
    color: #ff6347;
}

#attempts {
    font-size: 16px;
    color: #666;
}
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
