import React from 'react';

import { Container } from './styles';

const Departaments: React.FC = ({children}) => {
  return (
    <Container>
    {children}
    </Container>
  );
}

export default Departaments;