import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (

    <Layout title="Home Page">
      <h3>Welcome to my blog!</h3>   
      <StaticImage src = "../images/ashar.jpg" alt ="picture of Ashar Farooq"/> 
    </Layout>
  )
}
export default IndexPage