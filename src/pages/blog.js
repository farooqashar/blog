import * as React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  navLinkText
   } from '../components/layout.module.css'

const Page = ({ data }) => {

  return (
    <Layout title="Blog">
        {
        data.allMdx.nodes.map(node => (
          <div>
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <h3><b>By Ashar Farooq</b></h3>
            <i><strong>Posted:</strong> {node.frontmatter.date}</i>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
             {/* <Link state={{ content: node.body, title: node.frontmatter.title, date:node.frontmatter.date }} className={navLinkText} to="/blogs/post">Read Blog Post</Link> */}
          </article>
          <br/>
          <br/>
          </div>

        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
         title
         date
        }
        id
        body
      }
    }
  }`

export default Page

