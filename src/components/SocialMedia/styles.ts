import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
  width: 80%;

  img {
    margin: 5px;
  }
  @media (max-width: 768px) {
    margin: 40px 0;
  }
`
