import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    grid-column: 2 / span 6;
  }
`
