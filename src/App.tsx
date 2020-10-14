import React from 'react';
import GlobalStyle from './styles/GlobalStyles'
import Section from './components/section'
import RigthSideInformation from './components/RightSideInformation'
import {data, socialMedia, departaments,partners} from './data'
import Logo from './components/logo';

import SocialIcon from './components/SocialMedia';
import Departaments from './sections/Departaments';
import Partners from './sections/Partners'
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <>
    <Section
    variant="main"
    title={data[0].title}
    description={data[0].description}
    />
    <Departaments departaments={departaments}/>
    <Partners partners={partners}/>


      {/* <Section
    variant="tech"
    title={data[3].title}
    description={data[3].description}
    />
      <Section
    variant="social"
    title={data[4].title}
    description={data[4].description}
    /> */}
    <RigthSideInformation>
      <Logo/>
      <SocialMedia socialMedia={socialMedia} size={48}/>
    </RigthSideInformation>
    <GlobalStyle/>
    </>
  );
}

export default App;
