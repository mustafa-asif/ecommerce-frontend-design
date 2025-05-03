import watchImg from '../assets/Images/tech/watch.jpg';
// import bluePhoneImg from '../assets/Images/tech/bluePhone.jpg';
import camera from '../assets/Images/tech/camera.jpg';
// import redPhoneImg from '../assets/Images/tech/redPhone.jpg';
import blackPhoneImg from '../assets/Images/tech/blackPhone.jpg';
import laptopImg from '../assets/Images/tech/laptop.jpg';
// import kettleImg from '../assets/Images/tech/kettle.jpg';
import headPhoneImg from '../assets/Images/tech/headphones.jpg';
// import headPhoneWhiteImg from '../assets/Images/tech/headPhoneWhite.jpg'
import softChairs from '../assets/Images/interior/softChairs.jpg';
import lamp from '../assets/Images/interior/lamp.jpg';
import kitchenDishes from '../assets/Images/interior/kitchenDishes.jpg';
import mudBowl from '../assets/Images/interior/mudBowl.jpg';
import juicer from '../assets/Images/interior/juicer.jpg';
import vaas from '../assets/Images/interior/vaas.jpg';
import blenders from '../assets/Images/interior/blenders.jpg';
import homeAppliances from '../assets/Images/interior/homeAppliances.jpg';
import bluePhone from '../assets/Images/tech/bluePhone.jpg';
import redPhone from '../assets/Images/tech/redPhone.jpg';
import kettle from '../assets/Images/tech/kettle.jpg';
import bag from '../assets/Images/cloth/bag.jpg';
import blazer from '../assets/Images/cloth/blazer.jpg';
import shorts from '../assets/Images/cloth/shorts.jpg';
import wallet from '../assets/Images/cloth/wallet.jpg';
import skyBlueShirt from '../assets/Images/cloth/skyBlueShirt.jpg';
import jeansJacket from '../assets/Images/cloth/jeansJacket.jpg';
import blueShirt from '../assets/Images/cloth/blueShirt.jpg';



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
// interior products data
const interiorProducts=[
  {
    id: 1,
    name:"Soft Chairs",
    price: "USD 19",
    img:softChairs,
    
  },
  {
    id: 2,
    name:"Lamp",
    price: "USD 19",
    img:lamp,
   
  },
  {
    id: 3,
    name:" Dishes",
    price: "USD 19",
    img:kitchenDishes,
   
  },
  {
    id: 4,
    name:"Bowl",
    price: "USD 19",
    img:mudBowl,
   
  },
  {
    id: 5,
    name:"Juicer",
    price: "USD 19",
    img:juicer,
   
  },
  {
    id: 6,
    name:"Vaas",
    price: "USD 19",
    img:vaas,
   
  },
  {
    id: 7,
    name:"Blenders",
    price: "USD 19",
    img:blenders,
   
  },
  {
    id: 8,
    name:" Appliances",
    price: "USD 19",
    img:homeAppliances,
   
  },
  {
    id: 9,
    name:" Watches",
    price: "USD 19",
    img:watchImg,
    
  },
  {
    id: 10,
    name:"Laptops",
    price: "USD 19",
    img:laptopImg,
   
  },
  {
    id: 11,
    name:"GoPro ",
    price: "USD 19",
    img:camera,
    
  },
  {
    id: 12,
    name:"HeadPhones",
    price: "USD 19",
    img:headPhoneImg,
   
  },
  {
    id: 13,
    name:"Canon ",
    price: "USD 19",
    img:blackPhoneImg,
  
  },
  {
    id: 14,
    name:" Phone",
    price: "USD 19",
    img:bluePhone,
   
  },
  {
    id: 15,
    name:"Kettle",
    price: "USD 19",
    img:kettle,
   
  },
  {
    id: 16,
    name:" Phone",
    price: "USD 19",
    img:redPhone,
   
  },
  
]
// cloth products data
const clothProducts=[
  {
    id: 1,
    name:"Bag",
    price: 12.99,
    img:bag,
    des:"Bag for travel"
    
  },
  {
    id: 2,
    name:"Blazer",
    price: 10.30,
    img:blazer,
    des:"Blazer for Men"
   
  },
  {
    id: 3,
    name:" Shorts",
    price:  10.30,
    img:shorts,
    des:"beach shorts"
   
  },
  {
    id: 4,
    name:"Wallet",
    price:  12.30,
    img:wallet,
    des:"Wallet"
   
  },
  {
    id: 5,
    name:"Sky Blue",
    price: 34.00,
    img:skyBlueShirt,
    des:"Sky Blue Shirt"
   
  },
  {
    id: 6,
    name:"Jeans Jacket",
    price: 99.00,
    img:jeansJacket,
    des:"Jeans Jacket"
   
  },
  {
    id: 7,
    name:"Blue Shirt",
    price: 8.99,
    img:blueShirt,
    des:"Blue Shirt"
   
  },
  {
    id: 8,
    name:"Kettle",
    price: 8.99,
    img:kettle,
    des:"Kettle for tea"
   
  },
  {
    id: 9,
    name:"Headphones",
    price: 8.99,
    img:headPhoneImg,
    des:"White Headphones"
   
  },
  {
    id: 10,
    name:" POT",
    price: 8.99,
    img:mudBowl,
    des:"POT"
   
  }
]

  //export the array of object to use in other files from function
export const getProductsData = () => {
    return productsData;
  };

//   fetch product ID from arroy of objects

export const getProductById = (id) => {
    return productsData.find((product) => product.id === id);
  }


// export interior products data
export const getInteriorProducts = () => {
  return interiorProducts;
};
// export cloth products data ID
export const getInteriorProductById = (id) => {
  return interiorProducts.find((product) => product.id === id);
}

// export cloth products data
export const getClothProducts = () => {
  return clothProducts;
};
// export cloth products data ID
export const getClothProductById = (id) => {
  return clothProducts.find((product) => product.id === id);
}


