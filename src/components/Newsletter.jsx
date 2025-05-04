import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

const Newsletter = () => {
  return (
    <main>
      <section className='p-4 text-center border-t-2 bg-gray-200 border-gray-200'>
        <div className=" p-4   bg-gray-200 ">
          <h2 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-4">Get daily news on upcoming offers from many suppliers all over the world</p>
          <form className="  flex flex-row gap-2 justify-center">
            <div className='relative w-full max-w-xs'>
            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 mr-10 text-gray-500" />
            <input type="email"   placeholder="Email" className="border border-gray-300 px-4 py-2 rounded" required />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Subscribe</button>
            </div>
            
          </form>
        </div>
      </section>
      
    </main>
  )
}

export default Newsletter
