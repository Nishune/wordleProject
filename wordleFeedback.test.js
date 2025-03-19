import { expect, describe, test } from "@jest/globals";
import wordleFeedback from "./wordleFeedback";

/*
//////////
///Test-strategy for algoritm A (wordleFeedback.js)
/////////

1. Length control
-Verifies that the function return an error message when the guess
has another length than the "secret-word".

2. Player guess the correct word.
-When a player guess the correct secret word, message displays.

3. Test for correct characters
-Test that checks for correct, misplaced, incorrect and repeated characters.

4. Special occurences
-Test for case sensetivity
-Test for white space
*/

////
//TEST 1
////

describe("wordleFeedback", () => {
  it("Returns a error message when the guess is to short", () => {
    const result = wordleFeedback("HEJ", "CYKEL");
    expect(result).toBe("Din gissning måste innehålla 5 antal bokstäver.");
  });

  it("returns a message when the guess is to long", () => {
    const result = wordleFeedback("ELEFANTER", "CYKEL");
    expect(result).toBe("Din gissning måste innehålla 5 antal bokstäver.");
  });

  ////
  //TEST 2
  ////

  it("Returns a message to the player, if the guess was correct.", () => {
    const result = wordleFeedback("CYKEL", "CYKEL");
    expect(result).toBe("Grattis! Du har gissat rätt ord!");
  });

  ////
  //TEST 3
  ////

  it("Identifies corrrect characters on the right place", () => {
    const result = wordleFeedback("CALLE", "CYKEL");
    expect(result[0]).toEqual({ letter: "C", result: "correct" });
    expect(result[1]).toEqual({ letter: "A", result: "incorrect" });
    expect(result[2]).toEqual({ letter: "L", result: "misplaced" });
    expect(result[3]).toEqual({ letter: "L", result: "incorrect" });
    expect(result[4]).toEqual({ letter: "E", result: "misplaced" });
  });

  ////
  //TEST 4
  ////

  it("Handles case sensetivity correct", () => {
    const result = wordleFeedback("CyKeL", "cYkEl");
    expect(result).toBe("Grattis! Du har gissat rätt ord!");
  });

  it("handles whitespace correct", () => {
    const result = wordleFeedback("C Y K E L", "CYKEL");
    expect(result).toBe("Grattis! Du har gissat rätt ord!");
  });

  it("");
});
