import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import { renderHexagons } from './renderHexagons';
import { shapes } from './hiddenShapes';

const Canvas = styled.canvas`
  opacity: 0.05;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
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
  const density = 15; // lower number is more dense
  const variance = 10;

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
  const [hexagonsByRow, setHexagonsByRow] = useState(null);
  const [hexagonMap, setHexagonMap] = useState(null);

  const hexagonWidth = 30;
  const yOffset = Math.tan(30 * Math.PI / 180) * (hexagonWidth / 2);
  const sideLength = (hexagonWidth / 2) / Math.cos(30 * Math.PI / 180);
  const hexagonHeight = yOffset + sideLength + yOffset;
  const hexagonsPerRow = window.innerWidth / hexagonWidth + 1;
  const hexagonRows = (window.innerHeight / hexagonHeight) * 3;

  useEffect(() => {
    setContext(canvasRef.current.getContext('2d'));
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
  }, [canvasRef]);

  useEffect(() => {
    if (!context) return;
    context.strokeStyle = "#fff";
    const hexagonsByRow = buildHexagonsByRow({ hexagonRows, hexagonsPerRow });
    setHexagonsByRow(hexagonsByRow);
  }, [context, hexagonRows, hexagonsPerRow]);

  useEffect(() => {
    if (!hexagonsByRow) return;
    const hexagonMap = hideHexagons(hexagonsByRow);
    setHexagonMap(hexagonMap);
  }, [hexagonsByRow]);

  useEffect(() => {
    if (!context || !hexagonsByRow) return;
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    renderHexagons({
      context,
      hexagonWidth,
      yOffset,
      sideLength,
      hexagonHeight,
      hexagonRows,
      hexagonsPerRow,
      hexagonMap: hexagonMap || hexagonsByRow,
    });
  }, [
    context,
    hexagonWidth,
    yOffset,
    sideLength,
    hexagonHeight,
    hexagonRows,
    hexagonsPerRow,
    hexagonsByRow,
    hexagonMap,
  ]);

  return (
    <Canvas ref={canvasRef}></Canvas>
  );
}