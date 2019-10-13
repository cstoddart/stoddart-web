import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

function drawHexagon({ context, width, initialX, initialY }) {
  console.log('DRAW', );
  let currentX = initialX;
  let currentY = initialY;
  const yOffset = Math.tan(30 * Math.PI / 180) * (width / 2);
  const sideLength = (width / 2) / Math.cos(30 * Math.PI / 180)

  const side1 = () => {
    const changeInX = width / 2;
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
    const changeInX = -1 * width / 2;
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
    const changeInX = -1 * width / 2;
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
    const changeInX = width / 2;
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
  context.strokeStyle = "#fff";
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
    const width = 50;
    for (let i = 0; i < 20; i++) {
      drawHexagon({ context, width, initialX: i * 50 + 0.5, initialY: 0.5 });
    }
    for (let i = 0; i < 20; i++) {
      drawHexagon({ context, width, initialX: i * 50 + 0.5, initialY: 100.5 });
    }
    for (let i = 0; i < 20; i++) {
      drawHexagon({ context, width, initialX: i * 50 + 0.5, initialY: 200.5 });
    }
    for (let i = 0; i < 20; i++) {
      drawHexagon({ context, width, initialX: i * 50 + 0.5, initialY: 300.5 });
    }
    for (let i = 0; i < 20; i++) {
      drawHexagon({ context, width, initialX: i * 50 + 0.5, initialY: 400.5 });
    }
    for (let i = 0; i < 20; i++) {
      drawHexagon({ context, width, initialX: i * 50 + 25.5, initialY: 50.5 });
    }
    for (let i = 0; i < 20; i++) {
      drawHexagon({ context, width, initialX: i * 50 + 25.5, initialY: 150.5 });
    }
    for (let i = 0; i < 20; i++) {
      drawHexagon({ context, width, initialX: i * 50 + 25.5, initialY: 250.5 });
    }
    for (let i = 0; i < 20; i++) {
      drawHexagon({ context, width, initialX: i * 50 + 25.5, initialY: 350.5 });
    }
    for (let i = 0; i < 20; i++) {
      drawHexagon({ context, width, initialX: i * 50 + 25.5, initialY: 450.5 });
    }
  }, [context]);

  return (
    <Canvas ref={canvasRef}></Canvas>
  );
}