import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const LinkStyle = styled.div`
  margin-top: 2rem;
  font-weight: bold;
  a {
    text-decoration: none;
  }
`

const HomeLink = () => (
  <LinkStyle>
    <Link to="/">
      &larr;
      {` `}
      <span
        role='img'
        aria-label='home-link'
      >🏠</span>
    </Link>
  </LinkStyle>
)

export default HomeLink