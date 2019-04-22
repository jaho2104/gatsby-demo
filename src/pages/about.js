import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"

const AboutPage = () => (
    <Layout>
        <Head title="About" />
        <h1>About Me</h1>
        <p>I'm a software developer loving JS</p>
        <p>
            Contact me <Link to="/contact">Here</Link>
        </p>
    </Layout>
)

export default AboutPage
