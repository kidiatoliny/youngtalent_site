import React from 'react';

import { Container } from './styles';

import logo from '../../assets/YT.jpg'
const Logo: React.FC = () => {
  return (
    <Container>
 <img src={logo} alt='logo'/>
    </Container>
  );
}

export default Logo;