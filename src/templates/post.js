import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

class PostTemplate extends Component {
  render() {
    const currentPost = this.props.data.ghostPost

    console.log(this.props)
    return (
      <Layout location={this.props.location}>
        <h1>{currentPost.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: currentPost.html }} />
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    ghostPost(id: { eq: $id }) {
      title
      html
    }
  }
`
