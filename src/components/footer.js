import React from 'react';
import SiteWrapConstrainer from './siteWrapConstrainer';
import styled from 'styled-components'

const FooterStyle = styled.footer`
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem 0;
`
const Footer = () => (
  <FooterStyle>
    <SiteWrapConstrainer>
      © {new Date().getFullYear()}, Built with
          {` `}
      <a
        href="https://georgedesign.co.uk"
        style={{
          textDecoration: 'none'
        }}
      >
        <span
          role='img'
          aria-label='love-link'
        >
          ❤️
        </span>
      </a>
    </SiteWrapConstrainer>
  </FooterStyle >
)

export default Footer