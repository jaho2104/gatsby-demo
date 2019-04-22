import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: { fields: publishedDate, order: DESC }
            ) {
                edges {
                    node {
                        publishedDate(formatString: "MMMM Do, YYYY")
                        slug
                        title
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog" />
            <h2>This is my Blog</h2>

            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(edge => (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                            <h3>{edge.node.title}</h3>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                    </li>
                ))}
            </ol>
        </Layout>
    )
}

export default BlogPage
