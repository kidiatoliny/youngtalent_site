import { MdMenu } from 'react-icons/md'
import styled from 'styled-components'

export const Container = styled.div`
--padding-top: 100px;
--padding-bottom: 120px;
--heading-font-size: 32px;
--content-width: 100%;
&.main {
  --bg-color: var(--color-primary);
  --text-color: var(--color-tertiary);
  --logo-color: var(--color-secondary);
}
&.departaments {
  --bg-color: var(--color-secondary);
  --text-color: var(--color-quaternary);
  --logo-color: var(--color-primary);
}
&.partners {
  --bg-color: var(--color-tertiary);
  --text-color: var(--color-quaternary);
  --logo-color: var(--color-primary);
}
&.mentors {
  --bg-color: #5a5959;
  --text-color: var(--color-tertiary);
  --logo-color: var(--color-tertiary);
  h1 {
    color: #fff;
  }
}
&.footer {
  --bg-color: var(--color-primary);
  --text-color: var(--color-tertiary);
  --logo-color: var(--color-secondary);
}
&.music {
  --bg-color: var(--color-tertiary);
  --text-color: var(--color-quaternary);
  --logo-color: var(--color-blue);
}
&:first-child {
  --padding-top: 130px;
  --heading-font-size: 51px;
  
  @media (min-width: 1300px) {
    --heading-font-size: 60px;
    --content-width: 70%;
    p {
      font-size: 16px;
    }
    h2 {
      font-size: 90px;
    }
  }
  @media (max-width: 1300px) {
    --heading-font-size: 60px;
    --content-width: 60%;
    p {
      font-size: 14px;
    }
    h2 {
      font-size: 60px;
    }
    
  }
  
  @media (max-width: 768px) {
    --heading-font-size: 60px;
    --content-width: 100%;
    p {
      font-size: 14px;
    }
    h2 {
      font-size: 50px;
    }
  }
  
}
background: var(--bg-color);
position: relative;

& .copy-right {
  text-align: center;
  font-size: 14px;
  right: 0;
  left: 0;
  
  bottom: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
}
}
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-color);
  clip: rect(auto, auto, auto, auto);
`

export const Header = styled.header`
  z-index: 3;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;
  > h1 {
    display: flex;
    align-items: center;
    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
    }
  }
  > button {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

export const Menu = styled(MdMenu)`
  width: 36px;
  height: auto;
  fill: var(--logo-color);
`

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }
  > p {
    margin-top: 20px;
    font-size: 20px;
    color: var(--text-color);
    max-width: var(--content-width);
    line-height: 40px;
  }
  padding: var(--padding-top) 32px var(--padding-bottom);
`

export const DepartamentContainer = styled.div`
  background: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
    font-weight: normal;
    margin: 50px 0;
    @media (max-width: 656px) {
      margin: 1px auto;
      text-align: center;
    }
  }
`
