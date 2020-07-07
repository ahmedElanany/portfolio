import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'


const Blog = ({ 
  data: 
  { 
    allStrapiBlogs: { 
      nodes: blogs 
    } 
  } 
}) => {

  return (
    <Layout>
      <SEO title='My Blogs' description='please take a look' />
      <section className='blog-page'>
        <Blogs blogs={blogs} title='Blog Page' />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
