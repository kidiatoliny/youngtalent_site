import styled from 'styled-components'

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--color-tertiary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    position: absolute;
    margin: 5px 10px;
    padding: 13px 18px;
    top: 0;
    right: 0;
    font-size: 16px;
    border: none;
    cursor: pointer;
    background: none;
    &:hover {
      opacity: 0.87;
    }
    &:focus {
      outline: none;
    }
  }

  @media (min-width: 1024px) {
    width: calc(100% / 3);
    box-shadow: -7px 0 5px -6px rgba(0, 0, 0, 0.075);
  }

  @media (min-width: 1440px) {
    width: calc(480px + ((100vw - 1440px) / 6));
  }

  transform: translateX(100%);
  transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);
  &.open {
    transform: translateX(0);
  }
  @media (min-width: 1024px) {
    &.scrollOpen {
      transform: translateX(0);
    }
    &.scrollOpen .action--close {
      display: none;
    }
  }
`

export const Description = styled.div`
  footer {
    color: var(--color-primary);
    line-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: color-interpolation-filters;

    small {
      margin: 10px auto;
      opacity: 0.5;
      text-transform: capitalize;
    }
    hr {
      background: var(--color-primary);
      height: 4px;
    }

    > div {
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        filter: grayscale(100%);
        margin: 0;
      }
    }
  }
`
