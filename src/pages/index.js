import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Header from "../components/header"
import { Helmet } from "react-helmet"

export default ({ data }) => (
<Layout> 
<Helmet>
<meta charSet="utf-8" />
<title>{data.site.siteMetadata.title}</title>
<link rel="canonical" href="http://localhost:9001" />
</Helmet>
<div style={{ color: `purple` }}>
     <Link to="/contact/">Contact</Link> 
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
</Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`