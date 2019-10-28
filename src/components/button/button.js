import styled from 'styled-components';

import { colors } from '../../constants';
import { Link } from 'gatsby';

export const Button = styled.a.attrs(({ to }) => ({
  as: to ? Link : 'a'
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightBlue};
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 15px;

  &:hover {
    color: ${colors.blue};
    background-color: ${colors.yellow};
  }
`;
