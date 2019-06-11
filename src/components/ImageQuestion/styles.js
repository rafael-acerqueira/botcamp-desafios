import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  float: right;
  margin-right 20px;
  margin-bottom: 20px;
`

export const Mask = styled.span`
  align-items: center
  color: #FFF;
  cursor: pointer;
  display: flex;
  font-size: 30px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px 0 15px 15px;
  justify-content: center;
  top: 2px;
  left: 2px;
  width: 100%;
  height: 100%;
`

export const Content = styled.img`
background-color: rgba(238, 62, 37, 0.83);
border-radius: 15px 0 15px 15px;
cursor: pointer;
display: block;
padding: 2px;
width: 100%;
height: 100%;

${props => !props.images && css`
  width: 200px;
  height: 200px;
  float: right;
  margin-right 20px;
  margin-bottom: 20px;
`}  
`