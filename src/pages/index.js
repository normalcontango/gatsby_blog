import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components/"

export const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 22 2020"
          title="Learn Gatsby"
          excerpt="blablablablabla, balblablabl"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
