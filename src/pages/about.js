import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteWrapConstrainer from "../components/siteWrapConstrainer"

const SecondPage = () => (
  <Layout>
    <SiteWrapConstrainer>
      <SEO title="About Page" />
      <h1>Hi from the About page</h1>
      <p>Welcome to another lovely page where you can add some more info about your lovely project./</p>
      <Link to="/">Go back to the homepage</Link>
    </SiteWrapConstrainer>
  </Layout>
)

export default SecondPage
