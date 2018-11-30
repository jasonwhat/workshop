import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import smartTruncate from 'smart-truncate'
import dateFormat from 'dateformat'

import Layout from '../components/Layout'
import Tags from '../components/Tags'
import Authors from '../components/Authors'
import Nav from '../components/Nav'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allGhostPost.edges')
    const excerptMaxLength = get(
      this,
      'props.data.site.siteMetadata.excerptMaxLength'
    )
    const pages = get(this, 'props.data.allGhostPage.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Nav blogPages={pages} />
        {posts.map(({ node }) => {
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
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        excerptMaxLength
      }
    }
    allGhostPost {
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
    allGhostPage {
      edges {
        node {
          title
          html
          slug
        }
      }
    }
  }
`
