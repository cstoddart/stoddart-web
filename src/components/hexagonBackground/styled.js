import styled from 'styled-components';

export const StyledCanvas = styled.canvas`
opacity: 0.05;
position: absolute;
top: ${({ top }) => top || '0'}px;
left: ${({ even, hexagonWidth }) => even ? hexagonWidth / 2 * -1 : 0}px;
z-index: -1;
`;