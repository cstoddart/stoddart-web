function shape1({ hexagonMap, initialY, initialX }) {
  const hiddenHexagonCoordinates = [
    [initialY + 0, initialX + 0],
    [initialY + 0, initialX + 1],
    [initialY + 0, initialX + 2],
    [initialY + 1, initialX + 0],
    [initialY + 1, initialX + 1],
    [initialY + 1, initialX + 2],
    [initialY + 2, initialX + 0],
    [initialY + 2, initialX + 1],
    [initialY + 2, initialX + 2],
    [initialY + 2, initialX + 3],
    [initialY + 3, initialX + 2],
    [initialY + 4, initialX + 3],
  ];
  hiddenHexagonCoordinates.forEach((hiddenHexagonCoordinate) => {
    if (
      !hexagonMap[hiddenHexagonCoordinate[0]] || 
      !hexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]]
    ) return;
    hexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]] = false;
  });
}

function shape2({ hexagonMap, initialY, initialX }) {
  const hiddenHexagonCoordinates = [
    [initialY + 0, initialX + 0],
    [initialY + 0, initialX + 1],
    [initialY + 0, initialX + 2],
    [initialY + 1, initialX + 0],
    [initialY + 1, initialX + 1],
    [initialY + 1, initialX + 2],
    [initialY + 1, initialX + 3],
    [initialY + 1, initialX + 4],
    [initialY + 2, initialX + 2],
    [initialY + 2, initialX + 3],
    [initialY + 2, initialX + 4],
    [initialY + 2, initialX + 5],
    [initialY + 3, initialX + 2],
    [initialY + 4, initialX + 2],
    [initialY + 4, initialX + 3],
    [initialY + 5, initialX + 2],
    [initialY + 5, initialX + 3],
    [initialY + 5, initialX + 4],
    [initialY + 5, initialX + 5],
    [initialY + 6, initialX + 2],
    [initialY + 6, initialX + 3],
    [initialY + 6, initialX + 4],
    [initialY + 6, initialX + 5],
  ];
  hiddenHexagonCoordinates.forEach((hiddenHexagonCoordinate) => {
    if (
      !hexagonMap[hiddenHexagonCoordinate[0]] || 
      !hexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]]
    ) {
      return;
    }
    hexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]] = false;
  });
}

function shape3({ hexagonMap, initialY, initialX }) {
  const hiddenHexagonCoordinates = [
    [initialY + -1, initialX + 0],
    [initialY + -1, initialX + 1],
    [initialY + 0, initialX + 0],
    [initialY + 0, initialX + 1],
    [initialY + 0, initialX + 2],
    [initialY + 0, initialX + 3],
    [initialY + 0, initialX + 4],
    [initialY + 1, initialX + 1],
    [initialY + 1, initialX + 2],
    [initialY + 1, initialX + 3],
    [initialY + 1, initialX + 4],
    [initialY + 1, initialX + 5],
    [initialY + 2, initialX + 1],
    [initialY + 2, initialX + 2],
    [initialY + 2, initialX + 3],
    [initialY + 2, initialX + 4],
    [initialY + 2, initialX + 5],
    [initialY + 3, initialX + 1],
    [initialY + 3, initialX + 2],
    [initialY + 4, initialX + 1],
    [initialY + 5, initialX + 1],
    [initialY + 6, initialX + 1],
    [initialY + 6, initialX + 2],
    [initialY + 7, initialX + 1],
    [initialY + 7, initialX + 2],
    [initialY + 8, initialX + 1],
    [initialY + 8, initialX + 2],
    [initialY + 9, initialX + 1],
  ];
  hiddenHexagonCoordinates.forEach((hiddenHexagonCoordinate) => {
    if (
      !hexagonMap[hiddenHexagonCoordinate[0]] || 
      !hexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]]
    ) {
      return;
    }
    hexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]] = false;
  });
}

function shape4({ hexagonMap, initialY, initialX }) {
  const hiddenHexagonCoordinates = [
    [initialY + 0, initialX + 1],
    [initialY + 0, initialX + 2],
    [initialY + 0, initialX + 3],
    [initialY + 1, initialX + 2],
    [initialY + 1, initialX + 3],
    [initialY + 2, initialX + 1],
    [initialY + 2, initialX + 2],
    [initialY + 2, initialX + 3],
    [initialY + 2, initialX + 4],
    [initialY + 3, initialX + 2],
    [initialY + 3, initialX + 3],
    [initialY + 3, initialX + 4],
    [initialY + 4, initialX + 3],
    [initialY + 4, initialX + 4],
    [initialY + 5, initialX + 2],
    [initialY + 5, initialX + 3],
    [initialY + 6, initialX + 1],
    [initialY + 6, initialX + 2],
    [initialY + 6, initialX + 3],
    [initialY + 7, initialX + 2],
    [initialY + 7, initialX + 3],
    [initialY + 8, initialX + 2],
    [initialY + 8, initialX + 3],
  ];
  hiddenHexagonCoordinates.forEach((hiddenHexagonCoordinate) => {
    if (
      !hexagonMap[hiddenHexagonCoordinate[0]] || 
      !hexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]]
    ) {
      return;
    }
    hexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]] = false;
  });
}

function shape5({ hexagonMap, initialY, initialX }) {
  const hiddenHexagonCoordinates = [
    [initialY + -1, initialX + 2],
    [initialY + -1, initialX + 3],
    [initialY + 0, initialX + 2],
    [initialY + 0, initialX + 3],
    [initialY + 0, initialX + 4],
    [initialY + 0, initialX + 5],
    [initialY + 1, initialX + 2],
    [initialY + 1, initialX + 3],
    [initialY + 1, initialX + 4],
    [initialY + 1, initialX + 5],
    [initialY + 2, initialX + 4],
    [initialY + 2, initialX + 5],
    [initialY + 3, initialX + 4],
    [initialY + 3, initialX + 5],
    [initialY + 4, initialX + 4],
    [initialY + 4, initialX + 5],
    [initialY + 5, initialX + 3],
    [initialY + 5, initialX + 4],
    [initialY + 6, initialX + 4],
  ];
  hiddenHexagonCoordinates.forEach((hiddenHexagonCoordinate) => {
    if (
      !hexagonMap[hiddenHexagonCoordinate[0]] || 
      !hexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]]
    ) {
      return;
    }
    hexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]] = false;
  });
}

export const hiddenShapes = [
  shape1,
  shape2,
  shape3,
  shape4,
  shape5,
];
