import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SharedHero from "../components/shared/hero/SharedHero"


const postTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, description, date } = frontmatter

  return (
    <Layout>
      <SharedHero heroImage={data.placeholderImage} title={title} description={description}/>
      <div className="container mx-auto px-4" dangerouslySetInnerHTML={{__html: html}} />
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
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "heroBg.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            quality: 90
            traceSVG: { color: "#F20977" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
  }
`
