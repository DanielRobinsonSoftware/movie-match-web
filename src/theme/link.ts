import styled from 'styled-components';

export const Link = styled.a`
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  :hover {
        color: ${props => props.theme.textColor};
        text-decoration: underline;
    }
`