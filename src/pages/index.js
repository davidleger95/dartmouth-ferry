import React from "react"

import Layout from "../components/layout"
import Skyline from "../components/Skyline"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Halifax Skyline" />
    <Skyline />
  </Layout>
)

export default IndexPage
