import styled from 'styled-components';

import robotSvg from '../images/robot.svg'

const RobotBotcamp = styled.img.attrs({
  src: robotSvg,
  alt: "Robô"
})`
  background-color: #26265e;
  border-radius: 100%;  
  padding: 7px;
`;


export default RobotBotcamp;