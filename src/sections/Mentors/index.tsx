import React from 'react'

import MentorProfile from '../../components/MentorProfile'
import Section from '../../components/section'
import { Goals as data, Mentors as MentorsData } from './../../data'
import { Container, Goals, MentorsProfile } from './styles'

const Mentors: React.FC = () => {
  return (
    <Section variant="mentors">
      <Container>
        <Goals>
          {data.map(goal => {
            return (
              <>
                <h2>{goal.title}</h2>

                <p>{goal.goal}</p>
              </>
            )
          })}
        </Goals>
        <MentorsProfile>
          <h1>Mentores do Projeto</h1>
          {MentorsData.map(mentor => (
            <MentorProfile
              key={mentor.id}
              name={mentor.name}
              job={mentor.job}
              avatar={mentor.avatar}
            />
          ))}
        </MentorsProfile>
      </Container>
    </Section>
  )
}

export default Mentors
