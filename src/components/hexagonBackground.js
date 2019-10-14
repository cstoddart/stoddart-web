import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  opacity: 0.08;
  position: absolute;
  top: 0;
  left: 0;
`;

function drawHexagon({ context, hexagonWidth, initialX, initialY, color }) {
  let currentX = initialX;
  let currentY = initialY;
  const yOffset = Math.tan(30 * Math.PI / 180) * (hexagonWidth / 2);
  const sideLength = (hexagonWidth / 2) / Math.cos(30 * Math.PI / 180);

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
  context.strokeStyle = "#ffffff";
  context.stroke();
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
    const hexagonWidth = 30;
    const yOffset = Math.tan(30 * Math.PI / 180) * (hexagonWidth / 2);
    const sideLength = (hexagonWidth / 2) / Math.cos(30 * Math.PI / 180);
    const hexagonHeight = yOffset + sideLength + yOffset;
    const hexagonsPerRow = window.innerWidth / hexagonWidth + 1;
    const hexagonRows = (window.innerHeight / hexagonHeight) * 3;
    for (let rowIndex = 0; rowIndex < hexagonRows; rowIndex++) {
      for (let hexagonIndex = 0; hexagonIndex < hexagonsPerRow; hexagonIndex++) {
        switch (rowIndex % 8) {
          case 0:
            drawHexagon({
              context,
              hexagonWidth,
              initialX: (hexagonIndex * hexagonWidth) + (hexagonWidth / 2) + 0.5,
              initialY: Math.floor(rowIndex / 8) * 3 * hexagonHeight + 0.5,
              color: '#f00',
            });
            break;
          case 1:
            drawHexagon({
              context,
              hexagonWidth,
              initialX: (hexagonIndex * hexagonWidth) + 0.5,
              initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + yOffset + 0.5,
              color: '#0f0',
            });
            break;
          case 2:
            drawHexagon({
              context,
              hexagonWidth,
              initialX: hexagonIndex * hexagonWidth + 0.5,
              initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + yOffset + sideLength + 0.5,
              color: '#00f',
            });
            break;
          case 3:
            drawHexagon({
              context,
              hexagonWidth,
              initialX: (hexagonIndex * hexagonWidth) + (hexagonWidth / 2) + 0.5,
              initialY: (Math.floor(rowIndex / 8) * 3 *hexagonHeight) + hexagonHeight + 0.5,
              color: '#ff0',
            });
            break;
          case 4:
            drawHexagon({
              context,
              hexagonWidth,
              initialX: (hexagonIndex * hexagonWidth) + (hexagonWidth / 2) + 0.5,
              initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + hexagonHeight + sideLength + 0.5,
              color: '#f0f',
            });
            break;
          case 5:
            drawHexagon({
              context,
              hexagonWidth,
              initialX: hexagonIndex * hexagonWidth + 0.5,
              initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + hexagonHeight + sideLength + yOffset + 0.5,
              color: '#f00000',
            });
            break;
          case 6:
            drawHexagon({
              context,
              hexagonWidth,
              initialX: hexagonIndex * hexagonWidth + 0.5,
              initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + hexagonHeight + hexagonHeight + yOffset + 0.5,
              color: '#00f000',
            });
            break;
          case 7:
            drawHexagon({
              context,
              hexagonWidth,
              initialX: (hexagonIndex * hexagonWidth) + (hexagonWidth / 2) + 0.5,
              initialY: (Math.floor(rowIndex / 8) * 3 * hexagonHeight) + hexagonHeight + hexagonHeight + sideLength + 0.5,
              color: '#0000f0',
            });
            break;
          default:
            break;
        }
        // drawHexagon({
        //   context,
        //   hexagonWidth: hexagonWidth,
        //   initialX: rowIndex % 5 === 0 || rowIndex % 5 === 3 || rowIndex % 5 === 4
        //     ? (hexagonIndex * hexagonWidth) + 0.5
        //     : (hexagonIndex * hexagonWidth) + (hexagonWidth / 2) + 0.5,
        //   initialY: rowIndex % 6 === 0
        //     ? (rowIndex / 6) * hexagonHeight + 0.5
        //     : rowIndex % 6 === 1
        //       ? (Math.floor(rowIndex / 6) * hexagonHeight) + yOffset + 0.5
        //       : rowIndex % 6 === 2
        //         ? (Math.floor(rowIndex / 6) * hexagonHeight) + yOffset + sideLength + 0.5
        //         : rowIndex % 6 === 3
        //           ? (Math.floor(rowIndex / 6) * (hexagonHeight * 2)) + 0.5
        //           : rowIndex % 6 === 4
        //             ? (Math.floor(rowIndex / 6) * hexagonHeight) + hexagonHeight + sideLength + 0.5
        //             : (Math.floor(rowIndex / 6) * hexagonHeight) + hexagonHeight + sideLength + 0.5,
        //   color: rowIndex % 6 === 0
        //     ? '#f00'
        //     : rowIndex % 6 === 1
        //       ? '#0f0'
        //       : rowIndex % 6 === 2
        //         ? '#00f'
        //         : rowIndex % 6 === 3
        //           ? '#ff0'
        //           : '#0ff',
        // });
      }
    }
  }, [context]);

  return (
    <Canvas ref={canvasRef}></Canvas>
  );
}