import React from 'react'
import {UserIcon} from '@heroicons/react/24/outline'
import trendingImage from '../assets/Images/tech/trendingImage.jpg'

const Trending = () => {
  // Sample data for categories

  const list = [
    {
      id:1,
      name:"Auto mobiles"
    },
    {
      id:2,
      name:"Clothes and wear"
    },
    {
      id:3,
      name:"Home interior"
    },
    {
      id:4,
      name:"Computer and tech"
    },
    {
      id:5,
      name:"Tools and equipments"
    },
    {
      id:6,
      name:"Sports and outdoor"
    },
    {
      id:7,
      name:"Animals and pets"
    },
    {
      id:8,
      name:"Machinery tools"
    },
    {
      id:9,
      name:"More category "
    },
  ]
  return (
    <section className="border-gray-200 p-4 grid grid-cols-1 md:grid-cols-4 gap-4">

  {/* Left Sidebar - Categories */}
  <main className="bg-white ">
    <div>
      <ul className="text-sm space-y-2">
        {list.map((item) => (
          <li key={item.id} className="flex items-center gap-2 hover:bg-blue-100 hover:rounded p-2 cursor-pointer">
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  </main>

  {/* Middle Banner */}
  <main className="relative col-span-2">
    <img className="rounded w-full h-full object-cover" src={trendingImage} alt="" />
    <div className="absolute top-6 left-6">
      <p className="text-lg font-medium text-gray-700">Latest trending</p>
      <p className="text-2xl font-bold text-black">Electronic items</p>
      <button className="mt-4 px-5 py-2 bg-white text-black rounded-md font-semibold shadow hover:bg-gray-100">
        Learn more
      </button>
    </div>
  </main>

  {/* Right Sidebar - User and Promotions */}
  <main className="flex flex-col gap-4">
    
    {/* User Card */}
    <div className="bg-white  rounded p-4">
      <div className="flex items-center gap-3 mb-4">
        <UserIcon className="w-10 h-10 border bg-gray-200 rounded-full" />
        <p className="text-gray-700 font-medium">Hi, user<br /><span className="text-sm text-gray-400">Let's get started</span></p>
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-blue-500 text-white rounded-full py-2 px-6 font-semibold">Join now</button>
        <button className="bg-gray-100 text-black rounded-full py-2 px-6 font-semibold">Log in</button>
      </div>
    </div>

    {/* Promo Cards */}
    <div className="bg-orange-400 text-white text-center p-4 rounded">
      <p>Get US $10 off with a new supplier</p>
    </div>
    <div className="bg-blue-400 text-white text-center p-4 rounded">
      <p>Send quotes with supplier preferences</p>
    </div>

  </main>

</section>

  )
}

export default Trending
