import { search } from "../utils/search";

describe("normalized search", () => {
  test("search with whitespace to equal no whitespace", () => {
    expect(search(" bulbasaur ")).toBe("bulbasaur");
  });
});
