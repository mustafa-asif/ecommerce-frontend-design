import React from 'react'

const Timer = () => {
  return (
    <div>
   <h2 className="text-xl font-semibold mb-2">Deals and offers</h2>
        <p className="text-gray-400 mb-4 text-sm">Hygiene equipments</p>
        <div className="flex space-x-2">
          <div className="bg-gray-700 text-white px-3 py-2 rounded text-center">
            <div className="text-lg font-bold">04</div>
            <div className="text-xs">Days</div>
          </div>
          <div className="bg-gray-700 text-white px-3 py-2 rounded text-center">
            <div className="text-lg font-bold">13</div>
            <div className="text-xs">Hour</div>
          </div>
          <div className="bg-gray-700 text-white px-3 py-2 rounded text-center">
            <div className="text-lg font-bold">34</div>
            <div className="text-xs">Min</div>
          </div>
          <div className="bg-gray-700 text-white px-3 py-2 rounded text-center">
            <div className="text-lg font-bold">56</div>
            <div className="text-xs">Sec</div>
          </div>
        </div>

      
    </div>
  )
}

export default Timer
