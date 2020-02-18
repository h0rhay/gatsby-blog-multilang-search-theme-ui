import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SiteWrapConstrainer from "../components/siteWrapConstrainer"

const IndexPage = () => (
  <Layout>
    <SiteWrapConstrainer>
      <SEO title="Home" />
      <h1>Welcome to Gatsby Simplz!</h1>
      <h2>A simple Gatsby Starter site with the following functionality:</h2>
      <ul>

        <li>Blog post pages</li>
        <li>Search functionality</li>
        <li>Styled Components</li>
        <li>Responsive Typography on a modular scale <a href="https://www.codementor.io/@ricardozea/100-responsive-typography-system-using-a-modular-scale-s5rhft58g" target='_blank' rel='noopener noreferrer'><strong>(ref)</strong></a> </li>
      </ul>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </SiteWrapConstrainer>
  </Layout>
)

export default IndexPage
