import React from 'react'
import TagIconGraphic from '../../assets/tag.svg'

class TagIcon extends React.Component {
  render() {
    return (
      <img
        alt="Tag Icon"
        src={TagIconGraphic}
        css={{
          margin: 0,
          width: '1.2rem',
          marginRight: '0.5rem',
          position: 'relative',
          top: '0.25rem',
        }}
      />
    )
  }
}

export default TagIcon
