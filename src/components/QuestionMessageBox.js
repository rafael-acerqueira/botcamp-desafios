import React from 'react'

import TextQuestion from './TextQuestion'
import ImageQuestion from './ImageQuestion'
import AudioQuestion from './AudioQuestion'

const QuestionMessageBox = ({ content, type, images, onClick }) => {
  const questionTypes = {
    text: TextQuestion,
    image: ImageQuestion,
    audio: AudioQuestion
  };
  const QuestionComponnent = questionTypes[type]
  return(
		type === 'text' 
		? 
    	<QuestionComponnent>{content}</QuestionComponnent>
		: 
			<QuestionComponnent src={content} imagesLength={images} onClick={type === 'image' ? onClick : null} />
	)	
}

export default QuestionMessageBox;
