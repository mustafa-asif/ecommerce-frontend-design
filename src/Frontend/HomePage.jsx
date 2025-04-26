import React,{useState,useEffect} from 'react'
import { getProductsData } from '../Backend/productsData';

const HomePage = () => {
const[products,setProducts] = useState([]);

const getProductData=()=>{
  const data=getProductsData();
  setProducts(data);
  console.log(data);
}

useEffect(()=>{
  getProductData();
  // console.log(products)
},[])




  return (
    <section>
     
      <main className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div>
              <img src={product.img} alt={product.name} />
            </div>
          <div>
            <h2>{product.name}</h2>
            <p> {product.discount}</p>
          </div>
          </div>
        ))}
      </main>
      
    </section>
  )
}

export default HomePage
