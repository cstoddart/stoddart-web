import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import { renderHexagons } from './renderHexagons';
import { hiddenShapes } from './hiddenShapes';
import { getPageHeight } from '../../utilities';

const hexagonWidth = 30;
const yOffset = Math.tan(30 * Math.PI / 180) * (hexagonWidth / 2);
const sideLength = (hexagonWidth / 2) / Math.cos(30 * Math.PI / 180);
const hexagonHeight = yOffset + sideLength + yOffset;

const StyledCanvas = styled.canvas`
  opacity: 0.05;
  position: absolute;
  top: ${({ top }) => top || '0'}px;
  left: ${({ even }) => even ? hexagonWidth / 2 * -1 : 0}px;
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
  const density = 20; // lower number is more dense
  const variance = 10;

  const hiddenShapCountX = window.innerWidth / 8;
  const hiddenShapCountY = window.innerHeight / 8;
  for (let xIndex = 0; xIndex < hiddenShapCountX; xIndex++) {
    for (let yIndex = 0; yIndex < hiddenShapCountY; yIndex++) {
      const randomIndex = Math.floor(Math.random() * hiddenShapes.length);
      const randomX = Math.floor(Math.random() * variance) + (xIndex * density);
      const randomY = Math.floor(Math.random() * variance) + (yIndex * density);
      hiddenShapes[randomIndex]({ hexagonMap, initialX: randomX, initialY: randomY });
    }
  }
  return hexagonMap;
}

const DuplicateCanvas = ({ originalCanvas, index }) => {
  const canvasRef = useRef();
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    canvasRef.current.width = originalCanvas.width;
    canvasRef.current.height = originalCanvas.height;

    const canvasContext = canvasRef.current.getContext('2d');
    canvasContext.strokeStyle = '#0F0';
    canvasContext.lineWidth = 1.75;
    canvasContext.drawImage(originalCanvas, 0, 0);

    setTopOffset((index + 1) * originalCanvas.height - yOffset);
  }, [canvasRef, originalCanvas, index]);

  return (
    <StyledCanvas ref={canvasRef} top={topOffset} even={index % 2 === 0 ? true : false} />
  );
}

export const HexagonBackground = ({ location }) => {
  const canvasRef = useRef();
  const [duplicateCanvases, setDuplicateCanvases] = useState([]);
  const [freshRender, setFreshRender] = useState(false);

  let pageHeight = getPageHeight();
  const hexagonsPerRow = window.innerWidth / hexagonWidth + 1;
  const hexagonRows = (window.innerHeight / hexagonHeight) * 3;

  let currentPath = '';
  
  useEffect(() => {
    // Set canvas dimensions
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = Math.floor(window.innerHeight / hexagonHeight) * hexagonHeight;
  
    // Get canvas context
    const canvasContext = canvasRef.current.getContext('2d');
    canvasContext.strokeStyle = '#fff';
    canvasContext.lineWidth = 0.75;

    // Render map with hidden shapes
    const hexagonsByRow = buildHexagonsByRow({ hexagonRows, hexagonsPerRow });
    const hexagonMap = hideHexagons(hexagonsByRow);
    renderHexagons({
      canvasContext,
      canvasRef,
      hexagonWidth,
      yOffset,
      sideLength,
      hexagonHeight,
      hexagonRows,
      hexagonsPerRow,
      hexagonMap,
    });
  }, [pageHeight, canvasRef, hexagonRows, hexagonsPerRow]);

  useEffect(() => {
    if (location.pathname === currentPath) return;

    // Reset page
    currentPath = location.pathname;
    setDuplicateCanvases([]);
    setFreshRender(true);
  }, [location]);
  
  useEffect(() => {
    if (!freshRender) return;
    setFreshRender(false);

    // Determine number of canvases needed
    pageHeight = getPageHeight();
    const totalCanvasCount = Math.ceil(pageHeight / window.innerHeight);
    const duplicateCanvasCount = totalCanvasCount - 1;
    const arr = [...Array(duplicateCanvasCount).keys()];
    setDuplicateCanvases(arr);
  }, [freshRender]);

  return (
    <>
      <StyledCanvas ref={canvasRef} />
      {duplicateCanvases.map((index) => (
        <DuplicateCanvas originalCanvas={canvasRef.current} index={index} key={index} />
      ))}
    </>
  );
};
