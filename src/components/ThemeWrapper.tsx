import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeType } from '../theme/theme';

const GlobalStyle = styled.div`
  background-color: ${props => props.theme.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: ${props => props.theme.textColor};
  font-size: large;
`
export const ThemeWrapper = (props: { theme: ThemeType, children: JSX.Element | JSX.Element[]; }) => {

  return (
    <ThemeProvider theme={() => props.theme}>
      <GlobalStyle theme={props.theme}>
        {props.children}
      </GlobalStyle>
    </ThemeProvider>
  );
}