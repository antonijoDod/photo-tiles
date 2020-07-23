import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SharedHero from "../components/shared/hero/SharedHero"


const postTemplate = ({ data }) => {
    console.log(data)
  const { frontmatter, html } = data.markdownRemark
  const { title, description, date } = frontmatter

  return (
    <Layout>
      <SharedHero heroImage={data.placeholderImage} title={title} description={description}/>
    </Layout>
  )
}

export default postTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
      }
    }
    placeholderImage: file(relativePath: { eq: "heroBg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`
