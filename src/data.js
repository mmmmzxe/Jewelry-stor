// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,

} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/a3.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';


import jImg from '../src/assets/img/team/j1.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'about' },
  { href: '/', name: 'products' },
  { href: '/', name: 'contact' },
];

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Jewelry For You',
  subtitle:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  btnText: 'Find out more',
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },

  
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur, quasi minima molestiae ex exercitationem culpa quisquam architecto quaerat, iusto dolores labore, sapiente magni rem commodi aperiam ad dolorem neque ducimus. Placeat vel non quod quis pariatur a aperiam, aliquam adipisci voluptatum voluptatem sit cupiditate dolore natus beatae earum omnis.',
  btnText: 'find out more',
  image: AboutImg,
};

export const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  
};

export const teamData = {
  pretitle: 'jewelry stand neck',
  title: 'Beautiful and luxury necklace',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  name: 'maryem mostafa',
  occupation: 'executive jewelry',
  jImg: jImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Rick Thompson',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'John Doe',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Henry A.',
      occupation: 'CEO of Delightful',
    },
  ],
};





export const footerData = {
  
  
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
     
    ],
  },
};
