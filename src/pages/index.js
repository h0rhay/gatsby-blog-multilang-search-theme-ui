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
      <h2>A super simple Gatsby Starter site with the following functionality:</h2>
      <ul>
        <li>Markdown blog post pages</li>
        <li>Search functionality</li>
        <li>Styled Components</li>
        <li>Responsive Typography on a modular scale <a href="https://www.codementor.io/@ricardozea/100-responsive-typography-system-using-a-modular-scale-s5rhft58g" target='_blank' rel='noopener noreferrer'><strong>(ref)</strong></a> </li>
        <li>A reusable Image component you can pass an Image file to. <a href="https://spectrum.chat/gatsby-js/general/using-variables-in-a-staticquery~abee4d1d-6bc4-4202-afb2-38326d91bd05" target='_blank' rel='noopener noreferrer'><strong>(Deep Joy!)</strong></a></li>
        <li>Fixed bottom footer</li>
      </ul>
      <div style={{ maxWidth: `300px`, margin: `0 auto`, textAlign: `center` }}>
        <hr style={{ marginTop: `4rem` }} />
        <h3>Oh, and a little Meerkat:</h3>
        <Image src={`meerkat-by-dusan-smetana.jpg`} />
        <small>
          Photo by Dušan Smetana on Unsplash
        </small>
      </div>
    </SiteWrapConstrainer>
  </Layout>
)

export default IndexPage
