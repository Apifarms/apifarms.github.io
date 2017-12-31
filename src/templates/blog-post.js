import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const include_hr = !get(post, "frontmatter.exclude_hr");
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')


    return (
      <div>
        <Helmet 
          title={
            post.frontmatter.title ? 
            `${post.frontmatter.title} | ${siteTitle}` :
            siteTitle
          }
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            fontSize: "0.8rem",
            display: 'block',
            marginBottom: "1.45rem",
            marginTop: "-1rem",
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        { include_hr && 
          <hr style={{marginBottom: "1.45rem"}} />
        }
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        exclude_hr
        exclude
      }
    }
  }
`
