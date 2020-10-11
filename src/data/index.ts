import facebookIcon from '../assets/facebook .svg'
import instagramIcon from '../assets/instagram.svg'
import twitterIcon from '../assets/twitter.svg'
import githubIcon from '../assets/github.svg'
import youtubeIcon from '../assets/youtube.svg'
import ambiente from '../assets/ambient.svg'
import music from '../assets/music.svg'
import tech from '../assets/tech.svg'
import audiovisual from '../assets/audiovisual.svg'
import social from '../assets/social.svg'
import empreendedorismo from '../assets/empreendedorismo.svg'
import cmpnLogo from '../assets/empreendedorismo.svg'
import cmpn from '../assets/cmpn.jpg'
import enapor from '../assets/enapor.png'
export const data = [
  {
    title: 'Bem Vindo a Familia Young Talent',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptocmpnLogos himenaeos.',
  },
  {
    title: 'Departamento do Ambiente',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  },
  {
    title: 'Parceiros',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis.',
  },
  {
    title: 'Tech',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Social',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis.',
  },
];

export const socialMedia = [
  {
    name:'Facebook',
    url:'https://facebook.com/youngtalentpn',
    icon:facebookIcon
  }
  ,
  {
    name:'Twitter',
    url:'https://twitter.com/youngtalentpn',
    icon:twitterIcon
  }
  ,
  {
    name:'Instagram',
    url:'https://instagram.com/young_talent_pn/',
    icon:instagramIcon
  },
  {
    name:'Youtube',
    url:'https://youtube.com/youngtalentpn',
    icon:youtubeIcon
  }

]

export const devData = [
  {
    name:'Facebook',
    url:'https://facebook.com/kidiatoliny.goncalves',
    icon:facebookIcon,
  },
  {
    name:'Instagram',
    url:'https://instagram.com/akira.photography_',
    icon:instagramIcon,
  }
  ,
  // {
  //   name:'Twitter',
  //   url:'https://facebook.com',
  //   icon:twitterIcon,
  // },

  {
    name:'Github',
    url:'https://github.com/kidiatoliny',
    icon:githubIcon,cmpnLogo
  }

]

interface iDepartament{
  name:string,
  img:string,
  mentor:string,
  url?:string
}

type Departament=iDepartament[]

export const departaments:Departament = [
 {
   name:"Ambiente e Mudancas Climaticas",
   mentor:"Samuel David",
   url:"http://ambiente.youngtalentcv.com",
   img:ambiente
 },
 {
  name:"Musica",
  mentor:"Samuel David",
  url:"#",
  img:music
},
{
  name:"Tecnologia E Comunicacao",
  mentor:"Kidiatoliny Goncalves",
  url:"#",
  img:tech
},
{
  name:"Audio Visual",
  mentor:"Kidiatoliny Goncalves",
  url:"#",
  img:audiovisual
},

{

  name:"Empreendedorismo",
  mentor:"Kidiatoliny Goncalves",
  url:"#",
  img:empreendedorismo
},
{
  name:"Social",
  mentor:"Kidiatoliny Goncalves",
  url:"#",
  img:social
},
]
interface iPartners{
  name:string,
  url?:string,
  logo:string,
}

type Partners=Array<iPartners>
export const partners:Partners=[
{
  name:"CMPN",
  url:"cmpm.cv",
  logo:cmpn
},
{
  name:"CMPN",
  url:"http://www.enapor.cv/en_US/",
  logo:enapor
},
{
  name:"CMPN",
  url:"cmpm.cv",
  logo:cmpnLogo
},
{
  name:"CMPN",
  url:"cmpm.cv",
  logo:cmpnLogo
}
]