import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SharedHero from "../components/shared/hero/SharedHero"
import Cards from "../components/shared/cards/Cards"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SharedHero
        heroImage={data.placeholderImage}
        title="Blog"
        description="Maecenas mattis, tortor non imperdiet porttitor, nisl quam pulvinar massa, eget lacinia elit justo non mi."
      />
      <div className="section py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-5">Our all posts</h2>
          <Cards data={data.posts.edges} />
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            description
            image {
              childImageSharp {
                fluid(
                  maxWidth: 500
                  quality: 90
                  traceSVG: { color: "#F20977" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "heroBg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 90, traceSVG: { color: "#F20977" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
