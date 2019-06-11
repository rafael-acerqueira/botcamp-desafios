
import styled from 'styled-components'

const AudioQuestion = styled.audio.attrs(props => ({
  src: props.src,
  type: 'audio/mp3',
  controls: 'controls'
}))`
  background-color: rgba(238, 62, 37, 0.83);
  border-radius: 15px 0 15px 15px;
  padding: 5px;
  float: right;
  height: 40px;
  margin-right 20px;
  margin-bottom: 20px;
`

export default AudioQuestion