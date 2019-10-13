import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Grid } from 'react-virtualized';

const StyledHexagonBackground = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
`;

const Row = styled.div`
  display: flex;
  position: relative;

  &:nth-child(odd) {
    left: 10px;
  }

  &:not(:last-of-type) {
    margin-bottom: -6px;
  }
`;

let i = 0;
const rows = [];
while (i < 50) {
  rows.push(i);
  i++;
}

i = 0;
const hexagons = [];
while (i < 100) {
  hexagons.push(i);
  i++;
}

const variants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
    transition: {
      delay: 2,
    },
  },
};

function shape1({ row, position }) {
  return [
    { row, position },
    { row, position: position + 3 },
    { row, position: position + 3 },
    { row: row + 1, position },
    { row: row + 1, position: position + 1 },
    { row: row + 1, position: position + 2 },
    { row: row + 1, position: position + 3 },
    { row: row + 1, position: position + 4 },
    { row: row + 1, position: position + 5 },
    { row: row + 2, position: position + 1 },
  ];
}

const hiddenHexagons = [
  ...shape1({ row: 2, position: 2 }),
  ...shape1({ row: 5, position: 14 }),
  // { row: 0, position: 0 },
  // { row: 2, position: 3 },
  // { row: 3, position: 6 },
  // { row: 3, position: 3 },
  // { row: 4, position: 3 },
  // { row: 6, position: 3 },
  // { row: 6, position: 8 },
  // { row: 7, position: 1 },
  // { row: 8, position: 4 },
  // { row: 9, position: 1 },
];

const Hexagon = ({ width, show }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 87.6 101.15"
      fill="none"
      stroke="#000"
      animate={show ? 'show' : 'hide'}
      variants={variants}
      initial="show"
    >
      <polygon points="0.5 25.58 0.5 75.58 43.8 100.58 87.1 75.58 87.1 25.58 43.8 0.58 0.5 25.58" />
      <polyline points="87.1 25.58 43.8 50.58 0.5 25.58" />
      <line x1="43.8" y1="100.58" x2="43.8" y2="50.58" />
    </motion.svg>
  );
};

export const HexagonBackground = () => {
  const [hexagonMap, setHexagonMap] = useState({});

  useEffect(() => {
    const object = {};
    rows.forEach((row) => {
      object[row] = hexagons.map((hexagon) => true);
    });
    hiddenHexagons.forEach((hiddenHexagon) => {
      if (!object[hiddenHexagon.row]) return;
      object[hiddenHexagon.row][hiddenHexagon.position] = false;
    });
    setHexagonMap(object);
  }, []);

  return (
    <StyledHexagonBackground>
      {Object.keys(hexagonMap).map((hexagonRow, rowIndex) => (
        <Row key={rowIndex}>
          {hexagonMap[hexagonRow].map((hexagon, hexagonIndex) => (
            <Hexagon
              key={hexagonIndex}
              width={20}
              show={hexagonMap[rowIndex][hexagonIndex]}
            />
            // <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   width={20}
            //   viewBox="0 0 87.6 101.15"
            //   fill="none"
            //   stroke="#000"
            //   key={hexagonIndex}
            // >
            //   <polygon points="0.5 25.58 0.5 75.58 43.8 100.58 87.1 75.58 87.1 25.58 43.8 0.58 0.5 25.58" />
            //   <polyline points="87.1 25.58 43.8 50.58 0.5 25.58" />
            //   <line x1="43.8" y1="100.58" x2="43.8" y2="50.58" />
            // </svg>
          ))}
        </Row>
      ))}

    </StyledHexagonBackground>
  );
}
