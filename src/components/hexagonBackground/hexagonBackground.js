import React, { useRef, useState, useEffect } from 'react';

import { renderHexagons } from './renderHexagons';
import { hiddenShapes } from './hiddenShapes';
import { getPageHeight } from '../../utilities';
import { DuplicateCanvas } from './duplicateCanvas';
import { StyledCanvas } from './styled';

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

export const HexagonBackground = ({ location }) => {
  const canvasRef = useRef();
  const currentPathRef = useRef();
  
  const [duplicateCanvases, setDuplicateCanvases] = useState([]);
  const [pageHeight, setPageHeight] = useState(null);
  
  const hexagonDimensions = useRef({});
  const hexagonsPerRow = useRef(null);
  const hexagonRows = useRef(null);

  useEffect(() => {
    //Set hexagon dimensions
    const hexagonWidth = 30;
    const yOffset = Math.tan(30 * Math.PI / 180) * (hexagonWidth / 2);
    const sideLength = (hexagonWidth / 2) / Math.cos(30 * Math.PI / 180);
    const hexagonHeight = yOffset + sideLength + yOffset;
    const sectionHeight = (6 * yOffset) + (4 * sideLength);
    hexagonDimensions.current = {
      hexagonWidth,
      yOffset,
      sideLength,
      hexagonHeight,
      sectionHeight,
    };
    hexagonsPerRow.current = window.innerWidth / hexagonWidth + 1;
    hexagonRows.current = (window.innerHeight / hexagonHeight) * 3; // This 3 could probably be replaced by a calculation
  }, []);
  
  useEffect(() => {
    const {
      hexagonWidth,
      yOffset,
      sideLength,
      hexagonHeight,
      sectionHeight,
    } = hexagonDimensions.current;

    // Set canvas dimensions
    canvasRef.current.width = window.innerWidth + (hexagonWidth / 2);
    canvasRef.current.height = Math.ceil(window.innerHeight / sectionHeight) * sectionHeight;

    // Get canvas context
    const canvasContext = canvasRef.current.getContext('2d');
    canvasContext.strokeStyle = '#fff';
    canvasContext.lineWidth = 0.75;

    // Render map with hidden shapes
    const hexagonsByRow = buildHexagonsByRow({ hexagonRows: hexagonRows.current, hexagonsPerRow: hexagonsPerRow.current });
    const hexagonMap = hideHexagons(hexagonsByRow);
    renderHexagons({
      canvasContext,
      canvasRef,
      hexagonWidth,
      yOffset,
      sideLength,
      hexagonHeight,
      hexagonRows: hexagonRows.current,
      hexagonsPerRow: hexagonsPerRow.current,
      hexagonMap,
    });
  }, [canvasRef, hexagonRows, hexagonsPerRow]);

  useEffect(() => {
    if (location.pathname === currentPathRef.current) return;

    // Reset page
    currentPathRef.current = location.pathname;
    setDuplicateCanvases([]);
    setTimeout(() => {
      const height = getPageHeight();
      setPageHeight(height);
    }, 100); // Wait for clientHeight to reach full values
  }, [location]);

  useEffect(() => {
    if (!pageHeight) return;

    // Determine number of canvases needed
    const totalCanvasCount = Math.ceil(pageHeight / canvasRef.current.height);
    const duplicateCanvasCount = totalCanvasCount - 1;
    setDuplicateCanvases([...Array(duplicateCanvasCount).keys()]);
  }, [pageHeight]);

  return (
    <>
      <StyledCanvas ref={canvasRef} hexagonWidth={hexagonDimensions.current.hexagonWidth} />
      {duplicateCanvases.map((index) => (
        <DuplicateCanvas
          key={index}
          originalCanvas={canvasRef.current}
          index={index}
          isLast={index === duplicateCanvases.length -1}
          pageHeight={pageHeight}
          hexagonWidth={hexagonDimensions.current.hexagonWidth}
          yOffset={hexagonDimensions.current.yOffset}
        />
      ))}
    </>
  );
};
