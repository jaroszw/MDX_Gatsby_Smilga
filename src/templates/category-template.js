import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

export const query = graphql`
  query getSingleCategory($category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          category
          slug
          title
          readTime
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
              id
            }
          }
          author
          date(formatString: "MMMM, Do YYYY")
        }
        id
      }
    }
  }
`

const CategoryTemplate = props => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
    pageContext: { category },
  } = props

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`categorty / ${category}`} />
    </Layout>
  )
}

export default CategoryTemplate
