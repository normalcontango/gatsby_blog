import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonWrapper = styled(props => <Link {...props} />)`
  padding: 0.5rem 0.75rem;
  background-color: navy;
  border-radius: 0.5rem;
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: blue;
  }
`
