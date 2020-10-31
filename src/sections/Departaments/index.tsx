import React from 'react'

import Card from '../../components/Card'
import Dep from '../../components/Departaments'
import Section from '../../components/section'
import { DepartamentContainer } from '../../components/section/styles'
// import { Container } from './styles';

interface iDepartament {
  name: string
  url?: string
  img: string
  mentor: string
}
interface iDepartaments {
  departaments: Array<iDepartament>
}
const Departaments: React.FC<iDepartaments> = ({ departaments }) => {
  return (
    <Section variant="departaments">
      <DepartamentContainer>
        <h1>Departamentos</h1>
        <Dep>
          {departaments.map(departament => (
            <Card
              key={departament.name}
              name={departament.name}
              url={departament.url}
              img={departament.img}
              mentor={departament.mentor}
            />
          ))}
        </Dep>
      </DepartamentContainer>
    </Section>
  )
}

export default Departaments
