import React from 'react';
import { DepartamentContainer } from '../../components/section/styles';
import PartnersCard from '../../components/PartnersCard';
import Section from '../../components/section'
interface iPartners{
  name:string,
  url?:string,
  logo:string
}

interface iProps{
  partners:Array<iPartners>
}
const Partners: React.FC<iProps> = ({partners}) => {
  return (
<Section
    variant="partners">

  <DepartamentContainer color="white">

    <h1>Nossos Parceiros</h1>
    <div>
        <PartnersCard partners={partners}/>
    </div>
  </DepartamentContainer>
</Section>
  );
}

export default Partners;