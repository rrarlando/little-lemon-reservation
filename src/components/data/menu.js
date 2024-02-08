import greekSaladImage from '../../images/greek-salad.jpg';
import bruchettaImage from '../../images/bruchetta.png';
import lemonDessertImage from '../../images/lemon dessert.jpg';

const menu = [
  {
    id: 1,
    title: 'Greek salad',
    price: 12.99,
    image: greekSaladImage,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons',
  },
  {
    id: 2,
    title: 'Bruchetta',
    price: 5.99,
    image: bruchettaImage,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: 4.78,
    image: lemonDessertImage,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default menu;
