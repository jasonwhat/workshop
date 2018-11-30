import React from 'react'
import Author from './Author'
import AuthorIcon from './icons/FaceIcon'

class Authors extends React.Component {
  render() {
    const authors = this.props.authors || []

    return (
      <div>
        <AuthorIcon />
        {authors.map(author => (
          <Author
            key={author.slug}
            name={author.name || author.slug}
            slug={author.slug}
          />
        ))}
      </div>
    )
  }
}

export default Authors
