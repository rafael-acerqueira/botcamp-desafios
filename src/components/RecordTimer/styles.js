import styled from 'styled-components'

export const Content = styled.div`
  animation: show-timer 1s linear
  align-items: center;
  background-color: #fbfbff;
  color: #ee3e25;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  justify-content: flex-end;
  height: 100%;
  font-size: 25px;
  font-weight: bold;
  width: 85%

  @keyframes show-timer {
    0% {
      left: -352px;
    }
    100% {
      left: 0;
    }
  }  
`