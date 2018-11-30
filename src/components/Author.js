import React from 'react'
import { Link } from 'gatsby'

class Author extends React.Component {
  render() {
    const authorLabel = this.props.name || ''
    const slug = this.props.slug ? `author/${this.props.slug}` : `404`

    if (authorLabel) {
      return (
        <Link className="author-link" to={slug}>
          {authorLabel}
        </Link>
      )
    }
    return null
  }
}

export default Author
