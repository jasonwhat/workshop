import React from 'react'
import { Link } from 'gatsby'

class Nav extends React.Component {
  render() {
    const blogPages = this.props.blogPages || []

    return (
      <ul
        css={{
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
        }}
      >
        {blogPages.map(({ node }) => (
          <li
            key={node.slug}
            css={{
              float: 'left',
              textTransform: 'uppercase',
            }}
          >
            <Link
              to={node.slug}
              css={{
                display: 'block',
                textAlign: 'center',
                paddingRight: '1rem',
                textDecoration: 'none',
                boxShadow: 'none',
              }}
            >
              {node.name || node.slug}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default Nav
