import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
import Layout from "../components/layout"

// export const query = graphql`
//     query($slug: String) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//         }
//     }
// `

export const query = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: { eq: $slug }) {
            body {
                json
            }
            publishedDate(formatString: "MMMM Do, YYYY")
            title
        }
    }
`

const Blog = props => {
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file["en-US"].url

                return <img src={url} alt={alt} />
            },
        },
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h2>{props.data.contentfulBlogPost.title}</h2>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(
                props.data.contentfulBlogPost.body.json,
                options
            )}
        </Layout>
    )
}

export default Blog
