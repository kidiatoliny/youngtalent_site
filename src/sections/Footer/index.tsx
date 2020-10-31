import React from 'react'

import logo from '../../assets/YT.jpg'
import Section from '../../components/section'
import SocialMedia from '../../components/SocialMedia'
import { socialMedia } from '../../data'
import { Container, Content } from './styles'

const Footer: React.FC = () => {
  const date = new Date()
  return (
    <Section variant="footer">
      <Container>
        <Content>
          <h2>Associação Young Talent</h2>
          <img src={logo} alt="logo" />
        </Content>
        <Content>
          <h2>Localização</h2>
          <ul>
            <li>Porto Novo</li>
            <li>Santo Antão</li>
            <li>Cabo Verde</li>
          </ul>
        </Content>
        <Content>
          <h2>Contatos</h2>
          <ul>
            <li>
              Email: <b>youngtalentpn@gmail.com</b>
            </li>
            <li>
              Tel. <span>599 38 18 | 582 06 57 | 971 68 28</span>
            </li>
          </ul>
        </Content>
        <Content>
          <h2>Redes Socias</h2>
          <SocialMedia socialMedia={socialMedia} size={10} />
        </Content>
      </Container>
      <p className="copy-right"> © Copyright 2018-{date.getFullYear()}</p>
    </Section>
  )
}

export default Footer
