function shape1({ hexagonMap, initialY, initialX }) {
  const updatedHexagonMap = { ...hexagonMap };
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
      !updatedHexagonMap[hiddenHexagonCoordinate[0]] || 
      !updatedHexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]]
    ) return;
    updatedHexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]] = false;
  })
  return updatedHexagonMap;
}

function shape2({ hexagonMap, initialY, initialX }) {
  const updatedHexagonMap = { ...hexagonMap };
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
    [initialY + 3, initialX + 3],
    [initialY + 3, initialX + 4],
    [initialY + 3, initialX + 5],
  ];
  hiddenHexagonCoordinates.forEach((hiddenHexagonCoordinate) => {
    if (
      !updatedHexagonMap[hiddenHexagonCoordinate[0]] || 
      !updatedHexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]]
    ) {
      return;
    }
    updatedHexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]] = false;
  })
  return updatedHexagonMap;
}

function shape3({ hexagonMap, initialY, initialX }) {
  const updatedHexagonMap = { ...hexagonMap };
  const hiddenHexagonCoordinates = [
    [initialY + 0, initialX + 0],
    [initialY + 0, initialX + 1],
    [initialY + 0, initialX + 2],
    [initialY + 0, initialX + 4],
    [initialY + 1, initialX + 1],
    [initialY + 1, initialX + 2],
    [initialY + 1, initialX + 3],
    [initialY + 1, initialX + 4],
    [initialY + 2, initialX + 1],
    [initialY + 3, initialX + 1],
  ];
  hiddenHexagonCoordinates.forEach((hiddenHexagonCoordinate) => {
    if (
      !updatedHexagonMap[hiddenHexagonCoordinate[0]] || 
      !updatedHexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]]
    ) {
      return;
    }
    updatedHexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]] = false;
  })
  return updatedHexagonMap;
}

function shape4({ hexagonMap, initialY, initialX }) {
  const updatedHexagonMap = { ...hexagonMap };
  const hiddenHexagonCoordinates = [
    [initialY + 0, initialX + 0],
    [initialY + 0, initialX + 1],
    [initialY + 1, initialX + 1],
    [initialY + 2, initialX + 2],
    [initialY + 3, initialX + 1],
  ];
  hiddenHexagonCoordinates.forEach((hiddenHexagonCoordinate) => {
    if (
      !updatedHexagonMap[hiddenHexagonCoordinate[0]] || 
      !updatedHexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]]
    ) {
      return;
    }
    updatedHexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]] = false;
  })
  return updatedHexagonMap;
}

function shape5({ hexagonMap, initialY, initialX }) {
  const updatedHexagonMap = { ...hexagonMap };
  const hiddenHexagonCoordinates = [
    [initialY + 0, initialX + 0],
    [initialY + 0, initialX + 1],
    [initialY + 0, initialX + 2],
    [initialY + 1, initialX + 1],
    [initialY + 1, initialX + 2],
    [initialY + 2, initialX + 2],
    [initialY + 2, initialX + 3],
    [initialY + 2, initialX + 4],
    [initialY + 3, initialX + 3],
    [initialY + 3, initialX + 4],
    [initialY + 4, initialX + 3],
  ];
  hiddenHexagonCoordinates.forEach((hiddenHexagonCoordinate) => {
    if (
      !updatedHexagonMap[hiddenHexagonCoordinate[0]] || 
      !updatedHexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]]
    ) {
      return;
    }
    updatedHexagonMap[hiddenHexagonCoordinate[0]][hiddenHexagonCoordinate[1]] = false;
  })
  return updatedHexagonMap;
}

export const shapes = [
  shape1,
  shape2,
  shape3,
  shape4,
  shape5,
];
