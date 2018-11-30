import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import smartTruncate from 'smart-truncate'
import dateFormat from 'dateformat'

import Layout from '../components/Layout'
import Tags from '../components/Tags'
import Authors from '../components/Authors'
import { rhythm } from '../utils/typography'

class AuthorTemplate extends Component {
  render() {
    const pageContext = this.props.pageContext
    const currentPosts = this.props.data.allGhostPost
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const excerptMaxLength = get(
      this,
      'props.data.site.siteMetadata.excerptMaxLength'
    )

    return (
      <Layout location={this.props.location} siteTitle={siteTitle}>
        <h1>{pageContext.name}</h1>
        {currentPosts
          ? currentPosts.edges.map(({ node }) => {
              const title = node.title || node.slug
              const postDate = new Date(node.updated_at || node.published_at)
              return (
                <div key={node.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: 'none' }} to={node.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{dateFormat(postDate, 'mmmm dS yyyy')}</small>
                  {node.tags ? <Tags tags={node.tags} /> : null}
                  {node.authors ? <Authors authors={node.authors} /> : null}
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        node.custom_excerpt ||
                        smartTruncate(node.plaintext, excerptMaxLength),
                    }}
                  />
                </div>
              )
            })
          : null}
      </Layout>
    )
  }
}

export default AuthorTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        excerptMaxLength
      }
    }
    allGhostPost(filter: { authors: { elemMatch: { slug: { eq: $slug } } } }) {
      edges {
        node {
          title
          slug
          custom_excerpt
          plaintext
          updated_at
          published_at
          tags {
            id
            slug
            name
          }
          authors {
            id
            slug
            name
          }
        }
      }
    }
  }
`
