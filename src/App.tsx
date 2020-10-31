import React from 'react'

import Logo from './components/logo'
import RigthSideInformation from './components/RightSideInformation'
import Section from './components/section'
import SocialMedia from './components/SocialMedia'
import { data, socialMedia, departaments, partners } from './data'
import Departaments from './sections/Departaments'
import Footer from './sections/Footer'
import Mentors from './sections/Mentors'
import Partners from './sections/Partners'
import GlobalStyle from './styles/GlobalStyles'

function App() {
  return (
    <>
      <Section
        variant="main"
        title={data[0].title}
        description={data[0].description}
      />
      <Departaments departaments={departaments} />
      <Mentors />
      <Partners partners={partners} />
      <RigthSideInformation>
        <Logo />
        <SocialMedia socialMedia={socialMedia} size={48} />
      </RigthSideInformation>
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App
