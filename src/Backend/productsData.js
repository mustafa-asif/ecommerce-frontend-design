import watchImg from '../assets/Images/tech/watch.jpg';
// import bluePhoneImg from '../assets/Images/tech/bluePhone.jpg';
import camera from '../assets/Images/tech/camera.jpg';
// import redPhoneImg from '../assets/Images/tech/redPhone.jpg';
import blackPhoneImg from '../assets/Images/tech/blackPhone.jpg';
import laptopImg from '../assets/Images/tech/laptop.jpg';
// import kettleImg from '../assets/Images/tech/kettle.jpg';
import headPhoneImg from '../assets/Images/tech/headphones.jpg';
// import headPhoneWhiteImg from '../assets/Images/tech/headPhoneWhite.jpg'



//defince array of object to store data of products
const productsData = [
  {
    id: 1,
    name:"smart watches",
    price: 1000,
    img:watchImg,
    discount:'25%',
    rating: 4.5
  },
  {
    id: 2,
    name:"Laptops",
    price: 1000,
    img:laptopImg,
    discount:'15%',
    rating: 4.5
  },
  {
    id: 3,
    name:"GoPro Camera",
    price: 1000,
    img:camera,
    discount:'40%',
    rating: 4.5
  },
  {
    id: 4,
    name:"HeadPhones",
    price: 1000,
    img:headPhoneImg,
    discount:'25%',
    rating: 4.5
  },
  {
    id: 5,
    name:"Canon camreras",
    price: 1000,
    img:blackPhoneImg,
    discount:'25%',
    rating: 4.5
  },
];


  //export the array of object to use in other files from function
export const getProductsData = () => {
    return productsData;
  };

//   fetch product ID from arroy of objects

export const getProductById = (id) => {
    return productsData.find((product) => product.id === id);
  }


