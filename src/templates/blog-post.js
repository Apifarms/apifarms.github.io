import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import './blog-post.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const include_hr = !get(post, "frontmatter.exclude_hr");
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const image = get(post, "frontmatter.image");

    const title = get(post,"frontmatter.title");

    return (
      <div>
        <Helmet 
          title={
            post.frontmatter.title ? 
            `${post.frontmatter.title} | ${siteTitle}` :
            siteTitle
          }
        />
        <div className="blog-post-heading">
          { !isEmpty(title) && 
            <h1 className="blog-post-title">
              {title}
            </h1>
          }
          { image && 
            <div className="blog-post-thumbnail-container">
              <img 
                src={image.childImageSharp.responsiveSizes.src}
                aria-hidden
                className="blog-post-thumbnail"
                style={{
                  maxWidth: "400px",
                  maxHeight: "400px",
                }}
              />
            </div>
          }
        </div>
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
        image {
          childImageSharp {
            responsiveSizes {
              src
            }
          }
        }
      }
    }
  }
`
