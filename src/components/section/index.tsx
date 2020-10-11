import React from 'react';

import { Container, Content, HeaderWrapper, Header, DropboxLogo } from './styles';

interface Props{
  variant: 'main'|'departaments'|'partners'|'social'|'tech';
  title?:string;
  description?:string;
}
const section: React.FC <Props> = ({variant,description,title ,children}) => {
  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            {/* <DropboxLogo/> */}
            <span> Young Talent</span>
          </h1>
        </Header>
      </HeaderWrapper>
      <Content>
          <h2>{title}</h2>
          <p>{description}</p>
          {children}
      </Content>
    </Container>
  )
 }


export default section;