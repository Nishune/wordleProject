export default function wordleFeedback(guess, correctWord) {
  guess = guess.replace(/\s/g, "").toUpperCase();
  correctWord = correctWord.replace(/\s/g, "").toUpperCase();

  if (guess.length !== correctWord.length) {
    return `Din gissning måste innehålla ${correctWord.length} antal bokstäver.`;
  }

  if (guess === correctWord) {
    return "Grattis! Du har gissat rätt ord!";
  }

  const result = [];

  const guessArray = guess.split("");
  const correctWordArray = correctWord.split("");

  for (let i = 0; i < guessArray.length; i++) {
    const currentChar = guessArray[i];

    if (i < correctWordArray.length && currentChar === correctWordArray[i]) {
      result.push({
        letter: currentChar,
        result: "correct",
      });

      correctWordArray[i] = null;
    } else {
      result.push({
        letter: currentChar,
        result: "pending",
      });
    }
  }

  for (let i = 0; i < guessArray.length; i++) {
    if (result[i].result === "pending") {
      const currentChar = guessArray[i];
      const correctIndex = correctWordArray.indexOf(currentChar);

      if (correctIndex !== -1) {
        result[i].result = "misplaced";
        correctWordArray[correctIndex] = null;
      } else {
        result[i].result = "incorrect";
      }
    }
  }
  return result;
}
const testResult = wordleFeedback("Dansa", "cykla");
console.log(testResult);
