function wordleLogic(guess, correctWord) {
  guess = guess.toUpperCase().trim();
  correctWord = correctWord.toUpperCase().trim();

  //   console.log(guess.length);
  //   console.log(correctWord.length);
  if (guess.length !== correctWord.length) {
    console.log("Gissning måste vara 5 bokstäver.");
    return;
  } else {
    console.log("Gissning är 5 bokstäver.");
  }

  guessToString = guess.split("");
  correctWordToString = correctWord.split("");
  console.log(guessToString);
  console.log(correctWordToString);
}
wordleLogic("hello", "world");
