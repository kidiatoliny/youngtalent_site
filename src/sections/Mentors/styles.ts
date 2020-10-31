import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* flex-direction: column; */
  width: 100%;
  h1 {
    margin-bottom: 50px;
    text-transform: uppercase;
    font-weight: normal;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Goals = styled.div`
  width: 45%;

  h2 {
    color: #2f2f2f;
    text-transform: capitalize;
    margin: 15px auto;
  }
  p {
    color: #e5e5e5;
    line-height: 28px;
    font-weight: 300;
  }
  @media (max-width: 768px) {
    margin-bottom: 80px;
    width: 100%;
  }
`

export const MentorsProfile = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin: 10px;
  }
`
