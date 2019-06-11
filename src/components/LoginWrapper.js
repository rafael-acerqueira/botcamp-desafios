import styled from 'styled-components';

import background from '../images/background.svg';

const LoginWrapper = styled.main`
  align-items: center;
  background: url(${background}) no-repeat center center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default LoginWrapper;