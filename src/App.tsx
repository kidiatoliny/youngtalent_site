import React from 'react';
import GlobalStyle from './styles/GlobalStyles'
import Section from './components/section'
import RigthSideInformation from './components/RightSideInformation'
import {data, socialMedia, departaments,partners} from './data'
import Logo from './components/logo';
import Icon from './components/Icon';
import SocialIcon from './components/SocialIcon';
import { DepartamentContainer } from './components/section/styles';
import Departaments from './components/Departaments';

import Card from './components/Card';
import PartnersCard from './components/PartnersCard';
function App() {
  return (
    <>
    <Section
    variant="main"
    title={data[0].title}
    description={data[0].description}
    />
        <Section variant="departaments">
     <DepartamentContainer>

       <h1>Nossos Departamentos</h1>
       <Departaments>
        {
          departaments.map(departament=>
            <Card
            name={departament.name}
            url={departament.url}
            img={departament.img}
            mentor={departament.mentor}
            />
          )
        }
       </Departaments>

     </DepartamentContainer>
     </Section>
      <Section
    variant="partners">


<DepartamentContainer color="white">

<h1>Nossos Parceiros</h1>
<Departaments>
     <PartnersCard partners={partners}/>
</Departaments>
</DepartamentContainer>
    </Section>

      <Section
    variant="tech"
    title={data[3].title}
    description={data[3].description}
    />
      <Section
    variant="social"
    title={data[4].title}
    description={data[4].description}
    />
    <RigthSideInformation>
      <Logo/>

    <SocialIcon>
    {
        socialMedia.map(social=>(
          <Icon icon={social.icon} url={social.url} name={social.name} size={48}/>
        ))
      }
    </SocialIcon>

    </RigthSideInformation>
    <GlobalStyle/>
    </>
  );
}

export default App;
