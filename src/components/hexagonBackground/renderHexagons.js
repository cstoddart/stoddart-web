const  createHexagonRenderer = ({ canvasContext, hexagonWidth, yOffset, sideLength }) => ({ initialX, initialY }) => {
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
  canvasContext.beginPath();
  canvasContext.moveTo(initialX, initialY);
  canvasContext.lineTo(...side1());
  canvasContext.lineTo(...side2());
  canvasContext.lineTo(...side3());
  canvasContext.lineTo(...side4());
  canvasContext.lineTo(...side5());
  canvasContext.lineTo(...side6());
  canvasContext.stroke();
};

export function renderHexagons({
  canvasContext,
  canvasRef,
  hexagonWidth,
  yOffset,
  sideLength,
  hexagonHeight,
  hexagonRows,
  hexagonsPerRow,
  hexagonMap,
}) {
  canvasContext.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  for (let rowIndex = 0; rowIndex < hexagonRows; rowIndex++) {
    for (let hexagonIndex = 0; hexagonIndex < hexagonsPerRow; hexagonIndex++) {
      if (!hexagonMap[rowIndex] || hexagonMap[rowIndex][hexagonIndex] === false) continue;

      const renderHexagon = createHexagonRenderer({
        canvasContext,
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
