import React, { useEffect, useState } from 'react';

 import { Container, Description } from './styles';
 import {devData} from '../../data'

import Icon from '../Icon';
const RightSideInformation: React.FC = ({ children }) => {
  const scrollThreshold = 100

  const [scrollY, setScrollY] = useState(0)
  const [isActive, setIsActive] = useState(false)
  useEffect(()=>{

    function onScroll() {
      setScrollY(window.scrollY)
      setIsActive(false)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)

  },[])

  const classes = [
    isActive ? 'open': '',
    scrollY <= scrollThreshold ? 'scrollOpen':'',

  ]

  const className = classes.join(' ').trim();

  return (
    <Container className={className}>

      { children }
      <Description>

        <footer>
          <span> Desenvolvido por: <strong>Kidiatoliny Goncalves</strong></span>

          <small>work hard play hard</small>
          <hr/>
            <div>



            {
                    devData.map(social=>(
                      <Icon
                      icon={social.icon}
                      url={social.url}
                      name={social.name}
                      size={24}/>
                    ))
                  }

            </div>
        </footer>
      </Description>
    </Container>
  );
}

export default RightSideInformation;