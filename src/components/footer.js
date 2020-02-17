import React from 'react';
import SiteWrapConstrainer from './siteWrapConstrainer';

const Footer = () => (
  <footer>
    <SiteWrapConstrainer>
      © {new Date().getFullYear()}, Built with
          {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </SiteWrapConstrainer>
  </footer>
)

export default Footer