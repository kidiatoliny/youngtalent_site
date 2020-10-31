import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  h2 {
    color: #e5e5e5;
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 30px;
  }
  img {
    width: 140px;
    height: auto;
    border-radius: 50%;
  }
  ul > li {
    padding: 5px;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const Content = styled.div`
  p {
    color: #fff;
    margin: 15px 0;
  }
  div {
    margin: 0 auto;
    a > img {
      width: 30px;
      height: auto;
      border-radius: 0;
    }
  }
  @media (max-width: 768px) {
    &:first-child {
      margin-top: 0px;
    }
    &:last-child {
      margin-top: 30px;
      h2 {
        display: none;
      }
    }
    h2 {
      margin-top: 40px;
      margin-bottom: 5px;
    }
  }
`
