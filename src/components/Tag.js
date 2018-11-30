import React from 'react'
import { Link } from 'gatsby'

class Tag extends React.Component {
  render() {
    const tagLabel = this.props.name || ''
    const slug = this.props.slug ? `tag/${this.props.slug}` : `404`

    if (tagLabel) {
      return (
        <Link className="tag-link" to={slug}>
          {tagLabel}
        </Link>
      )
    }
    return null
  }
}

export default Tag
