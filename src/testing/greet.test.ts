import { greet } from "../core/greet";

test("greet returns a string, greeting the passed name", () => {
    expect(greet("Zaphod")).toEqual("Hello, Zaphod");
    expect(greet("Mo")).toEqual("Hello, Mo");
});
