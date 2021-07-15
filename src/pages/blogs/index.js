import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  navLinkText
   } from '../../components/layout.module.css'

const Page = ({ data }) => {

  return (
    <Layout title="Blog">
        {
        data.allMdx.nodes.map(node => (
          <div>
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p><strong>Posted:</strong> {node.frontmatter.date}</p>
             <Link     activeStyle={{ color: "red" }}
 state={{ content: node.body, title: node.frontmatter.title, date:node.frontmatter.date }} className={navLinkText} to={`/blogs/${node.id}`}>Read Blog Post</Link>
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
  }
          `

export default Page

