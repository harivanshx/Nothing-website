import React from 'react'

const Post1 = () => {
  return (
    
    <div className="flex    bg-white  items-center justify-center shadow-lg overflow-hidden">
        <div className="w-2/3 relative">
            <img 
                src=" https://in.nothing.tech/cdn/shop/files/Desktop_f57ca4b7-e2f3-4772-9449-647a2d8a003e_1592x.png?v=1740474442" 
                alt="Phone Series" 
                className="object-cover w-full h-full"
            />
        </div>
        <div className="w-1/3 p-8 flex flex-col justify-between">
            <h2 className="text-4xl font-bold">Phone (3a) Series.</h2>
            <p className="text-gray-600 mt-4">Get Closer. 4 March 3:30 PM IST</p>
            <a 
                href="#" 
                className="mt-6 inline-block bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition"
            >
                LEARN MORE
            </a>
        </div>
    </div>
    
  )
}

export default Post1