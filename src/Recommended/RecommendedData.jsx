import React,{useState,useEffect} from 'react'
import { getClothProducts,getClothProductById } from '../Backend/productsData'

const RecommendedData = () => {
  const [products, setProducts] = useState([]);
  const getRecommendedData = () => {
    const data = getClothProducts();
    setProducts(data);
    console.log(data)
  }
  useEffect(() => {
    getRecommendedData();
  }
  , [])
  return (
   <main>
      <p>Recommend Items</p>
    <section className='grid grid-cols-2   md:grid-cols-5  gap-4 p-5  '>
      {products.map((product)=>{
        return(
          <article onClick={()=>{
            const productId=getClothProductById(product.id);
            console.log(productId);
          }} key={product.id} className=" bg-white p-10    rounded-3xl shadow  " >
            {/* Product Image */} 
            <div className="mb-5 flex items-center justify-center w-auto h-auto">
              <img src={product.img} alt={product.name} className=" object-cover h-full md:object-cover" />
            </div>

            {/* Product price */}
           
            <div >
              <p className='text-sm  mb-2 text-gray-600'>
                ${product.price}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">{product.des}</p>
            </div>
          </article>
        )
      })}
    </section>
   </main>
  )
}

export default RecommendedData
