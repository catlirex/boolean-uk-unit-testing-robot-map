const sizeOfGrid = {
  width: 10,
  height: 10,
};

const objects = [
  { x: 4, y: 3 },
  { x: 1, y: 2 },
];

const moveLeft = (currentPosition, objects = []) => {
  if (currentPosition.x === 0) return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x - 1,
  };

  if (objectHitCheckAndPrint(newPosition, objects)) return currentPosition;
  return newPosition;
};

const moveRight = (currentPosition, objects = []) => {
  if (currentPosition.x === sizeOfGrid.width) return currentPosition;
  const newPosition = {
    ...currentPosition,
    x: currentPosition.x + 1,
  };
  if (objectHitCheckAndPrint(newPosition, objects)) return currentPosition;
  return newPosition;
};

const moveUp = (currentPosition, objects = []) => {
  if (currentPosition.y === sizeOfGrid.height) return currentPosition;
  const newPosition = {
    ...currentPosition,
    y: currentPosition.y + 1,
  };
  if (objectHitCheckAndPrint(newPosition, objects)) return currentPosition;
  return newPosition;
};

const moveDown = (currentPosition, objects = []) => {
  if (currentPosition.y === 0) return currentPosition;
  const newPosition = {
    ...currentPosition,
    y: currentPosition.y - 1,
  };
  if (objectHitCheckAndPrint(newPosition, objects)) return currentPosition;
  return newPosition;
};

const objectHitCheckAndPrint = (newPosition, objects = []) => {
  if (
    objects.find(
      (object) => object.x === newPosition.x && object.y === newPosition.y
    )
  ) {
    console.log("Ouch!");
    return true;
  }
  return false;
};

module.exports = {
  moveLeft,
  moveRight,
  moveDown,
  moveUp,
  objectHitCheckAndPrint,
};
