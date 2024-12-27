import CS2Logo from '~/assets/images/cs2.png'
import DotaLogo from '~/assets/images/dota.png'
import ForniteLogo from '~/assets/images/fortnite.png'
import LOLLogo from '~/assets/images/lol.png'
import OW2Logo from '~/assets/images/ow2.png'
import ValorantLogo from '~/assets/images/valorant.png'
import OW2Background from '~/assets/images/ow2-bg.jpeg'
import DotaBackground from '~/assets/images/dota2-bg.jpg'
import FortniteBackground from '~/assets/images/fortnite-bg.jpg'
import LOLBackground from '~/assets/images/lol-bg.jpg'
import ValorantBackground from '~/assets/images/valorant-bg.jpg'
import CS2Background from '~/assets/images/cs2-bg.jpg'

export default {
  TOP_MENU: [
    {
      title: 'home',
      path: '/',
    },
    {
      title: 'about',
      path: '/about',
    },
    {
      title: 'faq',
      path: '/faq',
    },
    {
      title: 'contact',
      path: '/contact',
    },
  ],

  FOOTER_MENU: [
    {
      title: 'terms',
      path: '/terms',
    },
    {
      title: 'privacy',
      path: '/privacy',
    },
  ],

  GAMES_CAROUSEL_ITEMS: [
    {
      id: 'cs2',
      title: 'Counter Strike 2',
      image: CS2Logo,
      backgroundImage: CS2Background,
    },
    {
      id: 'dota2',
      title: 'Dota 2',
      image: DotaLogo,
      backgroundImage: DotaBackground,
    },
    {
      id: 'fortnite',
      title: 'Fortnite',
      image: ForniteLogo,
      backgroundImage: FortniteBackground,
    },
    {
      id: 'lol',
      title: 'League of Legends',
      image: LOLLogo,
      backgroundImage: LOLBackground,
    },
    {
      id: 'ow2',
      title: 'Overwatch 2',
      image: OW2Logo,
      backgroundImage: OW2Background,
    },
    {
      id: 'valorant',
      title: 'Valorant',
      image: ValorantLogo,
      backgroundImage: ValorantBackground,
    },
  ],
}
