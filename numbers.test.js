import { addNumbers } from "./numbers.js";

describe('addNumbers', () => {
  test("it should add two numbers together", () => {
    expect(addNumbers(1, 2)).toBe(3);
  });
});

describe('multiplyNumbers', () => {
  test("it should multiply two numbers", () => {
    expect(multiplyNumbers(2, 3)).toBe(6);
  });
});