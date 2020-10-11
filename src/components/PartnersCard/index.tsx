import React from 'react';


 import { Container,PartnerCardImg, PartnerCard } from './styles';

interface iPartners{
  name:string,
  url?:string,
  logo:string
}

interface iProps{
  partners:Array<iPartners>
}
const PartnersCard: React.FC<iProps> = ({children, partners}) => {
  return (
    <Container>
      {
        partners.map(partner=>(
          <PartnerCard>
            <PartnerCardImg src={partner.logo}/>
          </PartnerCard>
        ))
      }
    </Container>
  );
}

export default PartnersCard;