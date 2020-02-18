import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SiteWrapConstrainer from "./siteWrapConstrainer"
import styled from 'styled-components'

const HeaderStyle = styled.header`
  background: dodgerblue;
  margin: 0 0 1.45rem 0;
  padding: 2rem 0;
  > div {
    display:flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      flex:3;
    }
    nav {
      flex:1;
      display:flex;
      justify-content:space-between;
    }
    h2, a {
      color:white;
      margin: 0;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <SiteWrapConstrainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <h2>
          <Link to="/about/">About</Link>
        </h2>
        <h2>
          <Link to="/blog/">Blog</Link>
        </h2>
      </nav>
    </SiteWrapConstrainer>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
