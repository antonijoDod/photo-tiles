import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/landing/hero/Hero"
import Intro from "../components/landing/intro/Intro"
import Download from "../components/landing/download/Download"
import News from "../components/landing/news/News"
import Started from "../components/landing/started/Started"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero data={data.hero.edges} />
    <Intro data={data.intro.edges} />
    <Download data={data.download.edges} />
    <News data={data.posts.edges} />
    <Started />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            buttonText
            buttonUrl
            heroImage {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#F20977" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            backgroundImage {
              childImageSharp {
                fluid(
                  maxWidth: 1920
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
    intro: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/intro/" } }
    ) {
      edges {
        node {
          frontmatter {
            sectionTitle
            cardOneIcon
            cardOneTitle
            cardOneDescription
            cardTwoIcon
            cardTwoTitle
            cardTwoDescription
            cardThreeIcon
            cardThreeTitle
            cardThreeDescription
          }
        }
      }
    }
    download: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/download/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            downloadButtonText
            downloadButtonUrl
            downloadImage {
              childImageSharp {
                fluid(
                  maxWidth: 1000
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
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      limit: 3
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
  }
`
