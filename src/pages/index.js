import React from "react"

import Layout from "../components/layout"
import Skyline from "../components/Skyline"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Dartmouth Ferry | dave.js"
      description="A CSS animation of the Dartmouth Ferry."
    />
    <Skyline />
  </Layout>
)

export default IndexPage
