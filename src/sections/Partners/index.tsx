import React from 'react'

import PartnersCard from '../../components/PartnersCard'
import Section from '../../components/section'
import { DepartamentContainer } from '../../components/section/styles'
interface iPartners {
  name: string
  url?: string
  logo: string
  id: number
}

interface iProps {
  partners: Array<iPartners>
}
const Partners: React.FC<iProps> = ({ partners }) => {
  return (
    <Section variant="partners">
      <DepartamentContainer color="white">
        <h1>Parceiros</h1>
        <div>
          <PartnersCard partners={partners} />
        </div>
      </DepartamentContainer>
    </Section>
  )
}

export default Partners
