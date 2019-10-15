const  createHexagonRenderer = ({ context, hexagonWidth, yOffset, sideLength }) => ({ initialX, initialY }) => {
  let currentX = initialX;
  let currentY = initialY;

  const side1 = () => {
    const changeInX = hexagonWidth / 2;
    const changeInY = yOffset;
    const newX = currentX + changeInX;
    const newY = currentY + changeInY;
    currentX = newX;
    currentY = newY;
    return [
      newX,
      newY,
    ];
  };

  const side2 = () => {
    const changeInX = 0;
    const changeInY = sideLength;
    const newX = currentX + changeInX;
    const newY = currentY + changeInY;
    currentX = newX;
    currentY = newY;
    return [
      newX,
      newY,
    ];
  };

  const side3 = () => {
    const changeInX = -1 * hexagonWidth / 2;
    const changeInY = yOffset;
    const newX = currentX + changeInX;
    const newY = currentY + changeInY;
    currentX = newX;
    currentY = newY;
    return [
      newX,
      newY,
    ];
  };

  const side4 = () => {
    const changeInX = -1 * hexagonWidth / 2;
    const changeInY = -1 * yOffset;
    const newX = currentX + changeInX;
    const newY = currentY + changeInY;
    currentX = newX;
    currentY = newY;
    return [
      newX,
      newY,
    ];
  };

  const side5 = () => {
    const changeInX = 0;
    const changeInY = -1 * sideLength;
    const newX = currentX + changeInX;
    const newY = currentY + changeInY;
    currentX = newX;
    currentY = newY;
    return [
      newX,
      newY,
    ];
  };

  const side6 = () => {
    const changeInX = hexagonWidth / 2;
    const changeInY = -1 * yOffset;
    const newX = currentX + changeInX;
    const newY = currentY + changeInY;
    currentX = newX;
    currentY = newY;
    return [
      newX,
      newY,
    ];
  };
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineTo(...side1());
  context.lineTo(...side2());
  context.lineTo(...side3());
  context.lineTo(...side4());
  context.lineTo(...side5());
  context.lineTo(...side6());
  context.stroke();
};

export function renderHexagons({
  context,
  hexagonWidth,
  yOffset,
  sideLength,
  hexagonHeight,
  hexagonRows,
  hexagonsPerRow,
  hexagonMap,
}) {
  for (let rowIndex = 0; rowIndex < hexagonRows; rowIndex++) {
    for (let hexagonIndex = 0; hexagonIndex < hexagonsPerRow; hexagonIndex++) {
      if (hexagonMap[rowIndex][hexagonIndex] === false) continue;

      const renderHexagon = createHexagonRenderer({
        context,
        hexagonWidth,
        yOffset,
        sideLength,
        hexagonMap,
      });

      switch (rowIndex % 8) {
        case 0:
          renderHexagon({
            initialX: (hexagonIndex * hexagonWidth) + (hexagonWidth / 2) + 0.5,
            initialY: Math.floor(rowIndex / 8) * 3 * hexagonHeight + 0.5,
          });
          break;
        case 1:
          renderHexagon({
            initialX: (hexagonIndex * hexagonWidth) + 0.5,
            initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + yOffset + 0.5,
          });
          break;
        case 2:
          renderHexagon({
            initialX: hexagonIndex * hexagonWidth + 0.5,
            initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + yOffset + sideLength + 0.5,
          });
          break;
        case 3:
          renderHexagon({
            initialX: (hexagonIndex * hexagonWidth) + (hexagonWidth / 2) + 0.5,
            initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + hexagonHeight + 0.5,
          });
          break;
        case 4:
          renderHexagon({
            initialX: (hexagonIndex * hexagonWidth) + (hexagonWidth / 2) + 0.5,
            initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + hexagonHeight + sideLength + 0.5,
          });
          break;
        case 5:
          renderHexagon({
            initialX: hexagonIndex * hexagonWidth + 0.5,
            initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + hexagonHeight + sideLength + yOffset + 0.5,
          });
          break;
        case 6:
          renderHexagon({
            initialX: hexagonIndex * hexagonWidth + 0.5,
            initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + hexagonHeight + hexagonHeight + yOffset + 0.5,
          });
          break;
        case 7:
          renderHexagon({
            initialX: (hexagonIndex * hexagonWidth) + (hexagonWidth / 2) + 0.5,
            initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + hexagonHeight + hexagonHeight + sideLength + 0.5,
          });
          break;
        default:
          break;
      }
    }
  }
}
