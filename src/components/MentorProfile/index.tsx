import React from 'react'

import {
  Container,
  MentorAvatar,
  MentorJob,
  MentorName,
  MentorContent
} from './styles'

export interface Props {
  name: string
  avatar: string
  job: string
  id?: number
}
const MentorProfile: React.FC<Props> = ({ name, avatar, job }) => {
  return (
    <Container>
      <MentorAvatar src={avatar} alt={name} />
      <MentorContent>
        <MentorName>{name}</MentorName>
        <MentorJob>{job}</MentorJob>
      </MentorContent>
    </Container>
  )
}

export default MentorProfile
