import React from 'react'
import Tag from './Tag'
import TagIcon from './icons/TagIcon'

class Tags extends React.Component {
  render() {
    const tags = this.props.tags || []

    return (
      <div>
        <TagIcon />
        {tags.map(tag => (
          <Tag key={tag.slug} name={tag.name || tag.slug} slug={tag.slug} />
        ))}
      </div>
    )
  }
}

export default Tags
