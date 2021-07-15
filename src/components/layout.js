import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle } from './layout.module.css'

const Layout = ({ title, children }) => {
 
 const data = useStaticQuery(graphql`
    query {
  site {
    siteMetadata {
      title
      siteUrl
    }
  }
}
    `)
  return (
    <main className={container}>
      <title>{title} | {data.site.siteMetadata.title}</title>
       <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/blog">Blog</Link></li>
 
        </ul>
      </nav>
      <h1 className={heading}>{title}</h1>
      {children}
    </main>
  )
}
export default Layout