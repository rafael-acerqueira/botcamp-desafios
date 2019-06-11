import React from 'react'
import { Wrapper, Content, Mask } from './styles'

const ImageQuestion = ({ src, imagesLength, onClick }) => {
  return (
    imagesLength > 0
      ?
        (
          <Wrapper>
            <Content src={src} images={imagesLength} />
            <Mask onClick={onClick}>mais {imagesLength - 1}</Mask>
          </Wrapper>
        )
      :
        <Content src={src} images={imagesLength} onClick={onClick} />
    
  )
}

export default ImageQuestion