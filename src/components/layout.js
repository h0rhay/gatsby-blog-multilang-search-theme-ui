import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    color: #555;
        > div {
      margin-top: 0;
    }
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: calc(12px + 0.35vw); /* Responsive base font size */
    line-height: calc(12px + 1.05vw); /* Responsive Vertical Rhythm */
  }

  h1 {
    font-size: 1.912em;
    line-height: calc(18px + 1.8vw); /* Responsive Vertical Rhythm */
  }

  h2 {
    font-size: 1.616em;
    line-height: calc(18px + 1vw); /* Responsive Vertical Rhythm */
  }

  h3 {
    font-size: 1.471em;
    line-height: calc(18px + 0.7vw); /* Responsive Vertical Rhythm */
  }

  h4 { font-size: 1.3em; }
  h5 { font-size: 1.243em; }
  h6 { font-size: 1.132em; }

  h4, h5, h6 { 
    line-height: calc(18px + .2vw); /* Responsive Vertical Rhythm */
  }

  h1, h2, h3, h4, h5, h6 {
    margin: calc(12px + 1.05vw) 0; /* Responsive margins */
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }
  /* More info: https://bit.ly/2PsCnzk */
  * + * {
    margin-top: 1rem;
  }

  li {
    margin-top: 0.25rem;
  }

  input, textarea, select, button {
    font-family: inherit;
    font-size: 100%;
    width : 100%;
    padding: 0;
    margin: 0;
  }
  
  input, textarea, select {
    padding:0.5rem;
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
