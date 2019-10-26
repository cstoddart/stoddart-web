import React, { useRef, useState, useEffect } from 'react';

import { StyledCanvas } from './styled';

export const DuplicateCanvas = ({ originalCanvas, index, isLast, pageHeight, hexagonWidth, yOffset }) => {
  const canvasRef = useRef();
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    if (isLast) {
      const height = pageHeight - (originalCanvas.height * (index + 1));
      canvasRef.current.height = height + (yOffset * (index + 1));
    } else {
      canvasRef.current.height = originalCanvas.height;
    }
    canvasRef.current.width = originalCanvas.width;
    
    const canvasContext = canvasRef.current.getContext('2d');
    canvasContext.drawImage(originalCanvas, 0, 0);

    setTopOffset((index + 1) * originalCanvas.height - (yOffset * (index + 1)));
  }, [canvasRef, originalCanvas, index, isLast, pageHeight, yOffset]);

  return (
    <StyledCanvas
      ref={canvasRef}
      top={topOffset}
      hexagonWidth={hexagonWidth}
    />
  );
};
