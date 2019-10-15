import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import { renderHexagons } from './renderHexagons';
import { shapes } from './hiddenShapes';

const Canvas = styled.canvas`
  opacity: 0.08;
  position: absolute;
  top: 0;
  left: 0;
`;

function buildHexagonsByRow({ hexagonRows, hexagonsPerRow }) {
  const hexagonsByRow = {};
  for (let rowIndex = 0; rowIndex < hexagonRows; rowIndex++) {
    hexagonsByRow[rowIndex] = {};
    for (let hexagonIndex = 0; hexagonIndex < hexagonsPerRow; hexagonIndex++) {
      hexagonsByRow[rowIndex][hexagonIndex] = true;
    }
  }
  return hexagonsByRow;
}

function hideHexagons(hexagonsByRow) {
  const hexagonMap = { ...hexagonsByRow };
  const density = 7; // lower number is more dense
  const variance = 3;

  const numberOfAnimationsX = window.innerWidth / 8;
  const numberOfAnimationsY = window.innerHeight / 8;
  for (let xIndex = 0; xIndex < numberOfAnimationsX; xIndex++) {
    for (let yIndex = 0; yIndex < numberOfAnimationsY; yIndex++) {
        const randomIndex = Math.floor(Math.random() * shapes.length);
        const randomX = Math.floor(Math.random() * variance) + (xIndex * density);
        const randomY = Math.floor(Math.random() * variance) + (yIndex * density);
      shapes[randomIndex]({ hexagonMap, initialX: randomX, initialY: randomY });
    }
  }
  return hexagonMap;
}

export const HexagonBackground = () => {
  const canvasRef = useRef();
  const [context, setContext] = useState();

  useEffect(() => {
    setContext(canvasRef.current.getContext('2d'));
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
  }, [canvasRef]);

  useEffect(() => {
    if (!context) return;
    context.strokeStyle = "#fff";

    const hexagonWidth = 30;
    const yOffset = Math.tan(30 * Math.PI / 180) * (hexagonWidth / 2);
    const sideLength = (hexagonWidth / 2) / Math.cos(30 * Math.PI / 180);
    const hexagonHeight = yOffset + sideLength + yOffset;
    const hexagonsPerRow = window.innerWidth / hexagonWidth + 1;
    const hexagonRows = (window.innerHeight / hexagonHeight) * 3;

    const hexagonsByRow = buildHexagonsByRow({ hexagonRows, hexagonsPerRow });
    const hexagonMap = hideHexagons(hexagonsByRow);

    renderHexagons({
      context,
      hexagonWidth,
      yOffset,
      sideLength,
      hexagonHeight,
      hexagonRows,
      hexagonsPerRow,
      hexagonMap,
    });
  }, [context]);

  return (
    <Canvas ref={canvasRef}></Canvas>
  );
}