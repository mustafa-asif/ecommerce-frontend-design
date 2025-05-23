import React,{useState,useEffect} from 'react'
import Interior from '../InteriorComponents/Interior';
import RecommendedData from '../Recommended/RecommendedData';
import { getProductsData } from '../Backend/productsData';
import Timer from '../components/Timer';
import Header from '../components/Header';
import ExtraServices from '../components/ExtraServices';
import Footer from '../components/Footer';
import Trending from '../components/Trending';
import Newsletter from '../components/Newsletter';
import { getProductById } from '../Backend/productsData';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
const[products,setProducts] = useState([]);

const navigate=useNavigate();
const cartHandler=()=>{
  navigate("/Cart")
}


//fetch data from productsData.js file and set the data to products state

const getProductData=()=>{
  const data=getProductsData();
  setProducts(data);
  
}

useEffect(()=>{
  getProductData();
  
},[])




  return (
  <>
  <Header />
  <Trending />
    <section className="p-4">
    <main className="grid grid-cols-1 md:grid-cols-6 gap-4 border-y-2 border-gray-200 items-center">
      
      {/* Timer Section */}
      <nav className="   ">
        <Timer />
      </nav>
  
      {/* Products Section */}
      {products.map((product) => (
        <div  onClick={()=>{
          const productId=getProductById(product.id);
          console.log(productId);
          cartHandler();
        }} key={product.id} className="bg-white p-4 rounded shadow flex flex-col items-center justify-center text-center">
          
          {/* Product Image */}
          <div className="w-full h-24 flex items-center justify-center mb-2">
            <img src={product.img} alt={product.name} className="object-contain h-full" />
          </div>
  
          {/* Product Name */}
          <h2 className="text-sm font-medium mb-2">{product.name}</h2>
  
          {/* Discount Button */}
          <button className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full hover:bg-red-600 hover:text-white transition">
            {product.discount}
          </button>
  
        </div>
      ))}
  
    </main>
  </section>
  <section>
    <Interior />
  </section>
  <section className='p-4'>
    <RecommendedData />
  </section>
  <section>
    <ExtraServices/>
  </section>
  <Newsletter />
  <Footer />
  
  
  
</>
  )
}

export default HomePage
