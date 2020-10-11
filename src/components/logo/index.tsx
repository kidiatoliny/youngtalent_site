import React from 'react';

import { Container } from './styles';

import logo from '../../assets/YT.png'
const Logo: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt='logo'/>
    </Container>
  );
}

export default Logo;