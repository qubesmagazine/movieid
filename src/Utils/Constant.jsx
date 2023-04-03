import {BiTrendingUp} from 'react-icons/bi'
import {BsPeopleFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

export const categories =  [
    {
      name: 'Popular Movies',
      icon: <BiTrendingUp/>,
      href: 'movies/popular'
   },
    {
      name: 'Top Rated Movies',
      icon: <BsPeopleFill/>,
      href: 'movies/top_rated'
   },
    {
      name: 'Popular People',
      icon: <AiFillStar/>,
      href: 'person/popular'
   }
]