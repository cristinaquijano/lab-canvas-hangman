class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.letters = [];
    this.guessedLetters = "";
  }

  pickWord() {
   let randomIndex = Math.floor(Math.random()*this.words.length);
   let randomWord = this.words[randomIndex];
   return randomWord;
  }

  checkIfLetter(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  }
  return false;
} 
  
  checkClickedLetters(letter) {
  if (this.letters.indexOf(letter) <0) {
    return true;
  } 
  return false;
  }

  addCorrectLetter(letter) {
  this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
   if (this.addCorrectLetter = 0)
   this.letter.push;
   this.errorsLeft -= 1;
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
    return false;
    } 
      return true;
    }

  checkWinner() {
   if (this.guessedLetters.length === this.secretWord.length){
     return true;
   } else if  (this.guessedLetters.length !== this.secretWord.length) {
    return false;
   }
  } 
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
