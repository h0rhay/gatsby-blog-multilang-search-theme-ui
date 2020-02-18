import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteWrapConstrainer from "../components/siteWrapConstrainer"
import HomeLink from "../components/homeLink"
import Image from '../components/Image'

const SecondPage = () => (
  <Layout>
    <SiteWrapConstrainer>
      <SEO title="About Page" />
      <h1>Hi from the About page</h1>
      <p>Welcome to another lovely page where you can add some more info about your lovely project.</p>
      <div style={{ maxWidth: `300px`, margin: `0 auto`, textAlign: `center` }}>
        <hr style={{ marginTop: `4rem` }} />
        <h3>We all love a Lollipop:</h3>
        <Image src={`lollipop-by-jamie-albright.jpg`} />
        <small>
          Photo by Jamie Albright on Unsplash
        </small>
      </div>
      <HomeLink />
    </SiteWrapConstrainer>
  </Layout>
)

export default SecondPage
