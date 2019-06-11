import React from 'react'
import RobotBotcamp from '../RobotBotcamp'
import MessageBox from '../QuestionMessageBox/TextQuestion'
import { Wrapper } from './styles'

const AnswerMessageBox = ({ children }) => (
  <Wrapper>
    <RobotBotcamp />
    <MessageBox answer>{children}</MessageBox>
  </Wrapper>
)

export default AnswerMessageBox