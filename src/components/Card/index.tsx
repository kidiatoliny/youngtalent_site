import React from 'react'

import share from '../../assets/external-link.svg'
import {
  CardBody,
  CardButton,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Container,
  Mentor,
  CardImg
} from './styles'

interface IDepartament {
  name: string
  url?: string
  mentor: string
  img: string
}
const Card: React.FC<IDepartament> = ({ name, mentor, url, img }) => {
  return (
    <Container>
      <CardHeader>
        <CardTitle> {name}</CardTitle>
        <Mentor>
          <b>Responsavel : </b> <i> {mentor} </i>
        </Mentor>
      </CardHeader>

      <CardBody>
        <CardImg src={img} alt="img" />
      </CardBody>

      <CardFooter>
        {url && (
          <CardButton href={url} target="_blank">
            <CardIcon src={share} alt="external-link" />
            Visitar Site
          </CardButton>
        )}
      </CardFooter>
    </Container>
  )
}

export default Card
