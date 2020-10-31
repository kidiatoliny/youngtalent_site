import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 300px;
    height: 300px;
    margin-top: 20px;
    border-radius: 50%;
    box-shadow: -7px 0 5px -6px rgba(0, 0, 0, 0.075);

    @media (max-width: 768px) {
      width: 150px;
      height: auto;
    }
  }
`
