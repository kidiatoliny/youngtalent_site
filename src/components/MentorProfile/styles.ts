import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 768px) {
    width: 340px;
    height: auto;
  }
`

export const MentorContent = styled.div`
  /* margin: 10px; */
  /* padding: 5px; */
`
export const MentorAvatar = styled.img`
  width: 90px;
  height: 90px;
  background: #e5e5e5;
  border-radius: 50%;
`
export const MentorName = styled.h2`
  border-bottom: #5a5959 1px solid;
  margin: 10px auto;
  padding-bottom: 10px;
  font-weight: normal;
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: bold;
  }
`
export const MentorJob = styled.p`
  text-transform: capitalize;
  color: #5a5959;
`
