import React,{useState,useEffect} from 'react'
import { getInteriorProducts ,getInteriorProductById} from '../Backend/productsData';

const Interior = () => {
  const [products, setProducts] = useState([]);
  const getIntertiorData = () => {
    const data = getInteriorProducts();
    setProducts(data);
    console.log(data)
  }
  useEffect(() => {
    getIntertiorData();
  }
  , [])
  return (
    <main className='p-4 '>
      <section className='  grid grid-cols-4 md:grid-cols-4  gap-4  border-gray-400  items-center'>
        {products.map((product) => (
          <div
          onClick={() => {
            const productId = getInteriorProductById(product.id);
            console.log(productId);}
          }
           key={product.id} className="relative bg-white p-10  border-gray-800 rounded shadow flex flex-col items-center justify-center text-center">
            {/* Product Image */}
            <div className="absolute bottom-0 right-3   w-15 h-auto flex items-center justify-center mb-2">
              <img src={product.img} alt={product.name} className="object-contain h-full" />
            </div>

            {/* Product Name */}
            <div className='absolute top-0 left-1 w-20 h-auto flex items-center justify-center mb-2'>

             <p className="text-sm text-gray-600 mb-2">{product.name}</p>
            </div>
            <div className='absolute top-6 left-1 w-20 h-auto flex items-center justify-center mb-2'>
              <p className='text-sm  mb-2 text-gray-400'>
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </section>

    </main>
      
    
  )
}

export default Interior
