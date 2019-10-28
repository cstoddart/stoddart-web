import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import texasIcon from '../../images/texas.svg';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding-bottom: 25px;
`;

const TexasIcon = styled.img`
  width 12px;
  margin-left: 5px;
`;

export const Footer = ({ setFooterHeight }) => {
  const footerRef = useRef();

  useEffect(() => {
    setFooterHeight(footerRef.current.clientHeight);
  }, [setFooterHeight]);

  return (
    <StyledFooter ref={footerRef}>
      Made in <TexasIcon src={texasIcon} />
    </StyledFooter>
  );
};
