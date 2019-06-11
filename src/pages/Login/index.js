import React from 'react';
import { Link } from 'react-router-dom'

import ButtonBotcamp from '../../components/ButtonBotcamp'
import LogoBotcamp from '../../components/LogoBotcamp'
import LoginWrapper from '../../components/LoginWrapper'


const Login = () => (
  <LoginWrapper>
    <LogoBotcamp width='248px' />
    <Link to='/chat'>
      <ButtonBotcamp>Entrar</ButtonBotcamp>
    </Link>
  </LoginWrapper>
);

export default Login;