import React from "react"
import { graphql } from "gatsby"
import ReactPaginate from "react-paginate"

import Layout from "../components/layout"
import SharedHero from "../components/shared/hero/SharedHero"
import Cards from "../components/shared/cards/Cards"
import Pagination from "../components/shared/pagination/Pagination"

const BlogList = props => {
  console.log(props)
  return (
    <Layout>
      {/* <SharedHero
            heroImage={data.placeholderImage}
            title="Blog"
            description="Maecenas mattis, tortor non imperdiet porttitor, nisl quam pulvinar massa, eget lacinia elit justo non mi."
          />  */}
      <div className="section py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-5">Our all posts</h2>
          <Cards data={props.data.posts.edges} />
        </div>
      </div>
      <section className="container mx-auto text-center">
        <Pagination paginationData={props.pageContext} />
      </section>
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      limit: $limit
      skip: $skip
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