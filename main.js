function wordleLogic(guess, correctWord) {
  guess = guess.toUpperCase();
  correctWord = correctWord.toUpperCase();

  //   console.log(guess.length);
  //   console.log(correctWord.length);
  if (guess.length !== correctWord.length) {
    console.log("Gissning måste vara 5 bokstäver.");
    return;
  } else {
    console.log("Gissning är 5 bokstäver.");
  }
}
wordleLogic("hello", "world");
