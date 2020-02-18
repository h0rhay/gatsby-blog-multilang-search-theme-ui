import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  /* More info: https://bit.ly/2PsCnzk */
  * + * {
    margin-top: 1rem;
  }
  html,
  body {
    margin: 0;
    color: #555;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 18px;
    line-height: 1.4;
    /* remove margin for the main div that Gatsby mounts into */
    > div {
      margin-top: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #222;
    line-height: 1.1;
    + * {
      margin-top: 0.5rem;
    }
  }
  strong {
    color: #222;
  }
  li {
    margin-top: 0.25rem;
  }
`

const Site = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
  > div {
    flex-grow:1;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Site>
        <div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
        </div>
        <Footer />
      </Site>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
