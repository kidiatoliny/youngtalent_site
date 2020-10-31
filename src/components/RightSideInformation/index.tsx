import React, { useEffect, useState } from 'react'

import { devData } from '../../data'
import SocialMedia from '../SocialMedia'
import { Container, Description } from './styles'
declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined
  }
}
const RightSideInformation: React.FC = ({ children }) => {
  const scrollThreshold = 300

  const [scrollY, setScrollY] = useState(0)
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY)
      setIsActive(false)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : ''
  ]

  const className = classes.join(' ').trim()

  function toggleActiveMenu() {
    setIsActive(prev => !prev)
  }

  window.toggleActiveMenu = toggleActiveMenu
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu()
  }
  return (
    <Container className={className}>
      <button className="action--close" onClick={handleToggle}>
        ✕
      </button>
      {children}
      <Description>
        <footer>
          <span>
            Desenvolvido por: <strong>Kidiatoliny Goncalves</strong>
          </span>

          <small>work hard play hard</small>
          <hr />
          <div>
            <SocialMedia socialMedia={devData} size={24} />
          </div>
        </footer>
      </Description>
    </Container>
  )
}

export default RightSideInformation
