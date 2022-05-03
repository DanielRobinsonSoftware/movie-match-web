import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeType } from '../theme/theme';

export const ThemeWrapper = (props: { theme: ThemeType, children: JSX.Element | JSX.Element[]; }) => {

  const GlobalStyle = styled.div`
    .App {
      background-color: ${props => props.theme.bgColor};
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: left;
      color: ${props => props.theme.textColor};
      transition: 0.35s;
    }
  `
  return (
    <ThemeProvider theme={() => props.theme}>
      <GlobalStyle>
        {props.children}
      </GlobalStyle>
    </ThemeProvider>
  );
}