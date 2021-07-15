import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Page = ({ data }) => {

  return (
    <Layout title="Blog Posts">
      <ul>
        {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

   export const query_names = graphql`
      query {
        allFile {
          nodes {
            name
          }
        }
      }
          `

export default Page

