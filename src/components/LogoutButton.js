import styled from 'styled-components';

import logoutSvg from '../images/logout.svg'

const LogoutButton = styled.img.attrs({
  src: logoutSvg,
  alt: "Botão de sair"
})`
  width: 30px;
`;


export default LogoutButton;

