import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
<Layout> 
		<div style={{ color: `teal` }}>
		<Link to="/">Home</Link>
		<Header headerText="Contact" />
		<p><a href="mailto:noud4@home.nl">Send noud4 at home dot nl a message!</a></p>
	</div>
</Layout> 
)