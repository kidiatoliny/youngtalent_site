import React from 'react'

import { Container, Content, HeaderWrapper, Header, Menu } from './styles'

interface Props {
  variant: 'main' | 'departaments' | 'partners' | 'mentors' | 'footer'
  title?: string
  description?: string
}
const section: React.FC<Props> = ({
  variant,
  description,
  title,
  children
}) => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu()
  }

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <span> Young Talent</span>
          </h1>
          <button onClick={handleToggle}>
            <Menu />
          </button>
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

export default section
