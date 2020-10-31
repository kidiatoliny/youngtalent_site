import React from 'react'

import { Container, PartnerCardImg, PartnerCard } from './styles'

interface iPartners {
  name: string
  url?: string
  logo: string
  id: number
}

interface iProps {
  partners: Array<iPartners>
}
const PartnersCard: React.FC<iProps> = ({ children, partners }) => {
  return (
    <Container>
      {partners.map(partner => (
        <a
          href={partner.url}
          key={partner.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PartnerCard>
            <PartnerCardImg src={partner.logo} />
          </PartnerCard>
        </a>
      ))}
    </Container>
  )
}

export default PartnersCard
