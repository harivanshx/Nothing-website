import React from 'react'

const Post5 = () => {
  return (
    <div className="flex    bg-white  items-center justify-center shadow-lg overflow-hidden">
    <div className="w-2/3 relative">
        <img 
            src=" https://in.nothing.tech/cdn/shop/files/2560x2040_62f4a802-9155-4564-a112-13bb8f6656be_1592x.jpg?v=1731901615" 
            alt="Phone Series" 
            className="object-cover w-full h-full"
        />
    </div>
    <div className="w-1/3 p-8 flex flex-col justify-between">
        <h2 className="text-4xl font-bold">Nothing Apparel</h2>
        <p className="text-gray-600 mt-4">Drop 2 is here.
<br />
<br />
The Ripstop Tracksuit, Ripstop Overall and Heavy Hoodie are available now.
<br />
<br />
Find your fit.</p>
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

export default Post5