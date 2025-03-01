import React from 'react'

const Post4 = () => {
  return (
    <div className="flex    bg-white  items-center justify-center shadow-lg overflow-hidden">
        <div className="w-2/3 relative">
            <img 
                src=" https://in.nothing.tech/cdn/shop/files/phone-2a-blue-desktop_1592x.jpg?v=1714298780" 
                alt="Phone Series" 
                className="object-cover w-full h-full"
            />
        </div>
        <div className="w-1/3 p-8 flex flex-col justify-between">
            <h2 className="text-4xl font-bold">Phone (2a)</h2>
            <p className="text-gray-600 mt-4">Get Closer</p>
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

export default Post4