import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background-color: ${props => props.theme.colors.lightBlue};
  padding: 1em 1em;
  box-shadow: 3px 2px 2px rgba(0, 0, 10, 0.7);
  z-index: 10;

  @media (max-width: 768px) {
    grid-column: 2 / span 6;
  }

  @media (max-width: 480px) {
    padding: 0.5em 0.5em;
  }
`
