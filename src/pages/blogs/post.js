import React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function Component (props) {

//   const mdx_content = props.location.state.content
//   const title = props.location.state.title
//   const date = props.location.state.date

  return (
    // <Layout title = {title}>
    // <div>
    //   <h3><b>By Ashar Farooq</b></h3>
    //   <i>{date}</i>
    //   <br/>
    //   <br/>
    //   <MDXRenderer>
    //     {mdx_content}
    //   </MDXRenderer>
    // </div>
    // </Layout>

    <div>
        <Layout title = "Post">
            <h1>Each Blog Post</h1>
        </Layout>
    </div>
  )
}