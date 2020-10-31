import ambiente from '../assets/ambient.svg'
import audiovisual from '../assets/audiovisual.svg'
import cmpn from '../assets/cmpn.jpg'
import empreendedorismo from '../assets/empreendedorismo.svg'
import enapor from '../assets/enapor.png'
import facebookIcon from '../assets/facebook .svg'
import githubIcon from '../assets/github.svg'
import instagramIcon from '../assets/instagram.svg'
import music from '../assets/music.svg'
import raizes from '../assets/raizes.png'
import social from '../assets/social.svg'
import tech from '../assets/tech.svg'
import twitterIcon from '../assets/twitter.svg'
import youtubeIcon from '../assets/youtube.svg'
import { Props as MentorProps } from './../components/MentorProfile'
export const data = [
  {
    title: 'Bem Vindo a Familia YOUNG TALENT',
    description:
      'YOUNG TALENT é uma organização (instituição) não-governamental, de carácter nacional, humanitário, de desenvolvimento tecnológico, económico, social, cultural, musical, empreendedorismo social e cultural, comunitário, desportivo e ambiental, sem fins lucrativos com muita incidência na potencialização, projeção dos jovens talentos e bem como na sua formação, capacitação e orientação. Começou por ser um projeto virado para os jovens que dedicavam ao estilo de música hip hop. A sua apresentação foi feita na aldeia cultural “Nox Reiz” no dia 16 de Dezembro de 2017.'
  },
  {
    title: 'Departamento do Ambiente',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    title: 'Parceiros',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis.'
  },
  {
    title: 'Tech',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Social',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis.'
  }
]

export const socialMedia = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/youngtalentpn',
    icon: facebookIcon
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/youngtalentpn',
    icon: twitterIcon
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/young_talent_pn/',
    icon: instagramIcon
  },
  {
    name: 'Youtube',
    url: 'https://youtube.com/youngtalentpn',
    icon: youtubeIcon
  }
]

export const devData = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/kidiatoliny.goncalves',
    icon: facebookIcon
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/akira.photography_',
    icon: instagramIcon
  },
  // {
  //   name:'Twitter',
  //   url:'https://facebook.com',
  //   icon:twitterIcon,
  // },

  {
    name: 'Github',
    url: 'https://github.com/kidiatoliny',
    icon: githubIcon
  }
]

interface iDepartament {
  name: string
  img: string
  mentor: string
  url?: string
}

type Departament = iDepartament[]

export const departaments: Departament = [
  {
    name: 'Musica',
    mentor: 'Samuel David',
    img: music
  },
  {
    name: 'Ambiente e Mudancas Climaticas',
    mentor: 'Teodoro Graça',
    url: 'http://ambiente.youngtalentcv.com',
    img: ambiente
  },

  {
    name: 'Tecnologia E Comunicacao',
    mentor: 'Kidiatoliny Goncalves',

    img: tech
  },
  {
    name: 'Audio Visual',
    mentor: 'Kidiatoliny & Samuel ',

    img: audiovisual
  },

  {
    name: 'Empreendedorismo',
    mentor: 'Jaqueline Simone',

    img: empreendedorismo
  },
  {
    name: 'Social',
    mentor: 'Lisiane Lima',

    img: social
  }
]
interface iPartners {
  name: string
  url?: string
  logo: string
  id: number
}

type Partners = Array<iPartners>
export const partners: Partners = [
  {
    id: 1,
    name: 'CMPN',
    url: 'https://www.facebook.com/CamaraMunicipalPortoNovo',
    logo: cmpn
  },
  { id: 2, name: 'Enapor', url: 'http://www.enapor.cv/en_US/', logo: enapor },
  { id: 3, name: 'Raizes', url: 'https://www.raizes.adpm.pt/', logo: raizes }
]

interface Goal {
  id: number
  goal: string
  title: string
}
type Goals = Array<Goal>
export const Goals: Goals = [
  {
    id: 1,
    title: 'missão',
    goal:
      'Tem por objetivo valorizar e promover o TALENTO JOVEM no Concelho do Porto Novo de uma forma integrada. Com o objetivo de identificar, potencializar e capacitar jovens talentos nas diferentes áreas artística e tecnológica.'
  },
  {
    id: 2,
    title: 'visão',
    goal:
      'Ser uma organização de referência em Cabo Verde e no continente africano na matéria da Juventude.'
  },
  {
    id: 3,
    title: 'valores',
    goal:
      'Combater a pobreza material e espiritual, principalmente no seio da juventude com varias ferramentas técnicas, culturais e psicológicas.'
  }
]
type Mentors = MentorProps[]
export const Mentors: Mentors = [
  {
    id: 1,
    name: 'Teodoro Graça',
    avatar:
      'http://ambiente.youngtalentcv.com/storage/teams/August2020/BNiEfFGKZ7RgdGq8LgNn.jpg',
    job: 'Professor'
  },
  {
    id: 2,
    name: 'Samuel David',
    avatar:
      'http://ambiente.youngtalentcv.com/storage/teams/August2020/PdhTL17it9eeRRi0QHNI.jpg',
    job: 'Designer'
  },
  {
    id: 3,
    name: 'kidiatoliny gonçalves',
    avatar:
      'https://scontent.frai1-1.fna.fbcdn.net/v/t1.0-9/118117293_165491471742228_15518813647110566_n.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_ohc=3u-ui1nZ_lIAX87TnIf&_nc_ht=scontent.frai1-1.fna&oh=ac1099a4ecc31782a7187a41cb04a18a&oe=5FC329AF',
    job: 'Eng. Software'
  }
]
