const {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  objectHitCheckAndPrint,
} = require("../movement");

describe("Test the movement functions", () => {
  describe("The move left function", () => {
    it("should move the robot to the left", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveLeft(currentPosition)).toEqual({ x: 4, y: 5 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 0, y: 5 };

      expect(moveLeft(currentPosition)).toEqual({ x: 0, y: 5 });
    });

    it("should not be able to move onto a coordinate where an object is located", () => {
      const objects = [
        { x: 4, y: 3 },
        { x: 1, y: 2 },
      ];
      const currentPosition = { x: 2, y: 2 };
      expect(moveLeft(currentPosition, objects)).toEqual({ x: 2, y: 2 });
    });
  });

  describe("The move right function", () => {
    it("should move the robot to the right", () => {
      const currentPosition = { x: 0, y: 5 };

      expect(moveRight(currentPosition)).toEqual({ x: 1, y: 5 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 10, y: 5 };

      expect(moveRight(currentPosition)).toEqual({ x: 10, y: 5 });
    });

    it("should not be able to move onto a coordinate where an object is located", () => {
      const objects = [
        { x: 4, y: 3 },
        { x: 1, y: 2 },
      ];
      const currentPosition = { x: 0, y: 2 };
      expect(moveRight(currentPosition, objects)).toEqual({ x: 0, y: 2 });
    });
  });

  describe("The move up function", () => {
    it("should move the robot to the up", () => {
      const currentPosition = { x: 0, y: 5 };

      expect(moveUp(currentPosition)).toEqual({ x: 0, y: 6 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 10, y: 10 };

      expect(moveUp(currentPosition)).toEqual({ x: 10, y: 10 });
    });

    it("should not be able to move onto a coordinate where an object is located", () => {
      const objects = [
        { x: 4, y: 3 },
        { x: 1, y: 2 },
      ];
      const currentPosition = { x: 1, y: 1 };
      expect(moveUp(currentPosition, objects)).toEqual({ x: 1, y: 1 });
    });
  });

  describe("The move down function", () => {
    it("should move the robot to the down", () => {
      const currentPosition = { x: 0, y: 5 };

      expect(moveDown(currentPosition)).toEqual({ x: 0, y: 4 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 10, y: 0 };

      expect(moveDown(currentPosition)).toEqual({ x: 10, y: 0 });
    });

    it("should not be able to move onto a coordinate where an object is located", () => {
      const objects = [
        { x: 4, y: 3 },
        { x: 1, y: 2 },
      ];
      const currentPosition = { x: 1, y: 3 };
      expect(moveDown(currentPosition, objects)).toEqual({ x: 1, y: 3 });
    });
  });
});

describe("this function check if there is object located in new position", () => {
  it("should print 'Ouch!' and return true if there is object", () => {
    const objects = [
      { x: 4, y: 3 },
      { x: 1, y: 2 },
    ];
    const newPosition = { x: 1, y: 2 };
    expect(objectHitCheckAndPrint(newPosition, objects)).toEqual(true);
  });
});
