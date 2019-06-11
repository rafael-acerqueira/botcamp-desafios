import styled, { css } from 'styled-components';

import recordSvg from '../images/record.svg';

const RecordButton = styled.img.attrs({
  src: recordSvg,
  alt: "Botão gravar"
})`
  background-color: #ee3e25;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: 4px;
  width: 25px;
  height: 25px;

  ${props => props.isRecording && css`
    animation: pulse .5s linear infinite alternate
    transform: scale(0.8)
    
  `}

  @keyframes pulse {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }   
`;



export default RecordButton