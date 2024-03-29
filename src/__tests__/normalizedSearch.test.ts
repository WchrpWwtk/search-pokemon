import { search } from "../utils/search";

const cases = [
  [" bulbasaur ", "bulbasaur"],
  ["      bulbasaur", "bulbasaur"],
  ["bulbasaur      ", "bulbasaur"],
  ["BULBASAUR", "bulbasaur"],
  ["Bulbasaur", "bulbasaur"],
  ["bULBASAUR", "bulbasaur"],
];

describe("normalized search", () => {
  test.each(cases)(
    "search with whitespace to equal no whitespace",
    (term, result) => {
      expect(search(term)).toBe(result);
    }
  );
});
