import { cn } from "../utils";

describe("cn", () => {
  it("handles conditional classes", () => {
    expect(cn("foo", false && "bar", "baz")).toBe("foo baz");
  });

  it("returns an empty string if no classes are provided", () => {
    expect(cn()).toBe("");
  });
});
