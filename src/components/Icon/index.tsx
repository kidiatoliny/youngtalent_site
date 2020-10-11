import React from 'react';
import { Container } from './styles';

 interface IProps{
  icon:string,
  name:string,
  url?:any,
  size:number
}
const Icon: React.FC <IProps> = ({icon, name, url, size}) => {
  return (
    <Container>

         <a href={url} target='_blank' rel="noopener noreferrer">
            <img src={icon} alt={name} width={size}/>
         </a>

    </Container>
  );
}

export default Icon;