import * as React from 'react'
import { Link } from 'gatsby'
import { container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText } from './layout.module.css'

const Layout = ({ title, children }) => {
  return (
    <main className={container}>
      <title>{title}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
        </ul>
      </nav>
      <h1 className={heading}>{title}</h1>
      {children}
    </main>
  )
}
export default Layout