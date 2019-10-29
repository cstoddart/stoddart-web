import styled from 'styled-components';

export const StyledCanvas = styled.canvas`
  opacity: 0.05;
  position: absolute;
  top: ${({ top }) => top || '0'}px;
  left: 0px;
  z-index: -1;
`;