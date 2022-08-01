import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
// import UTrackerImg from '../images/utracker.jpg';
// import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
 
  {
    id: uuidv4(),
    name: 'Beach city',
    desc:
      'It`s a city beach, so you can not expect paradise. But the beach is wide and clean, nice water etc.',
    img: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Green city',
    desc:
      'Land area for green trees, physical training and sports for residential units: 15,999 m2.',
    img: 'https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Night city',
    desc:
      'One of the things that truly stand out in Night City is the people that populate the metropolis. ',
    img: 'https://images.pexels.com/photos/3834347/pexels-photo-3834347.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Modern City',
    desc:
      'Modern City provides new experiences for all those who wish to design beautiful interiors.',
    img: 'https://images.pexels.com/photos/8464898/pexels-photo-8464898.jpeg',
  },

];

export default projects;