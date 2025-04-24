const words = ['apple', 'banana', 'cherry', 'grape', 'mango']; // Example word list
let targetWord = words[Math.floor(Math.random() * words.length)];
let attempts = 0;

const board = document.getElementById('board');
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
    const guess = guessInput.value.toLowerCase();
    if (guess.length !== 5) {
        alert('Guess must be 5 letters');
        return;
    }

    attempts++;
    let feedback = '';
    for (let i = 0; i < 5; i++) {
        if (guess[i] === targetWord[i]) {
            feedback += `<div class="green">${guess[i]}</div>`;
        } else if (targetWord.includes(guess[i])) {
            feedback += `<div class="yellow">${guess[i]}</div>`;
        } else {
            feedback += `<div class="gray">${guess[i]}</div>`;
        }
    }
    board.innerHTML += `<div class="row">${feedback}</div>`;
    guessInput.value = '';
    guessInput.focus();

    if (guess === targetWord) {
        alert('You win!');
    } else if (attempts === 6) {
        alert('You lose! The word was ' + targetWord);
    }
});
