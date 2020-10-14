import React from 'react';
import Icon from '../Icon';
import { Container } from './styles';

interface iSocialMedia{
  icon:string,
  url:string,
  name:string,
}

interface iProps{
  socialMedia:Array<iSocialMedia>,
  size:number
}

const SocialMedia: React.FC<iProps> = ({socialMedia, size}) => {
  return (
    <Container>
       {
        socialMedia.map(social=>(
          <Icon icon={social.icon} url={social.url} name={social.name} size={size}/>
        ))
      }
    </Container>
  );
}

export default SocialMedia;