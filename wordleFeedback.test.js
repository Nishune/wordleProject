import { expect, describe, test } from "@jest/globals";
import wordleFeedback from "./wordleFeedback";

/*
///
/Test-strategy for algoritm A (wordleFeedback.js)
///

1. Length control
-Verifies that the function return an error message when the guess
has another length than the "secret-word".

*/

describe("wordleFeedback", () => {
  //Test 1 checks the length for a short guess.
  it("Returns a error message when the guess is to short", () => {
    const result = wordleFeedback("HEJ", "CYKEL");
    expect(result).toBe("Din gissning måste innehålla 5 antal bokstäver.");
  });

  it("returns a message when the guess is to long", () => {
    const result = wordleFeedback("ELEFANTER", "CYKEL");
    expect(result).toBe("Din gissning måste innehålla 5 antal bokstäver.");
  });
});
