const { printPosition } = require("../print");

describe("Test print position function ", () => {
  it("take the position and print out a string", () => {
    const position = { x: 5, y: 5 };
    expect(printPosition(position)).toEqual("Robot is at { x: 5, y: 5 }");
  });
});
