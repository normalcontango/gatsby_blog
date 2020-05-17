import React from "react"
import { CardWrapper, P, H2 } from "../elements"
import { Button } from "./Button"

export const ContentCard = ({ date, title, excerpt, slug }) => {
  return (
    <CardWrapper>
      <P>{date}</P>
      <H2>{title}</H2>
      <P>{excerpt}</P>
      <Button href={slug}>Read More</Button>
    </CardWrapper>
  )
}
