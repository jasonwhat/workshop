import React from 'react'
import FaceIconGraphic from '../../assets/face.svg'

class FaceIcon extends React.Component {
  render() {
    return (
      <img
        alt="Face Icon"
        src={FaceIconGraphic}
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

export default FaceIcon
