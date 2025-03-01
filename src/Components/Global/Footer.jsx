import React from 'react'
import { FaInstagram, FaYoutube, FaTwitter, FaTiktok, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
   


    <footer className="bg-black text-white p-10">
      <div className="grid grid-cols-4 gap-10">
        {/* Products Section */}
        <div>
          <h3 className="font-bold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>Phone (2a) Plus</li>
            <li>Phone (2a)</li>
            <li>Phone (2)</li>
            <li>Ear (open)</li>
            <li>Ear (a)</li>
            <li>Ear</li>
            <li>Accessories</li>
            <li>Apparel</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Community</li>
            <li>Sustainability</li>
            <li>Business enquiry</li>
            <li>Press contact</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Support centre</li>
            <li>Contact us</li>
            <li>Contact us via WhatsApp</li>
            <li>Service centre</li>
            <li>E-waste management</li>
            <li>Find a store</li>
          </ul>
        </div>

        {/* Mailing List */}
        <div>
          <h3 className="font-bold mb-4">JOIN OUR MAILING LIST</h3>
          <div className="flex items-center border border-gray-500 p-2">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-black text-white outline-none flex-grow"
            />
            <span className="text-gray-500">&gt;</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-5 flex justify-between items-center">
        <div className="flex space-x-6">
          <span>Privacy policy</span>
          <span>Warranty policy</span>
          <span>Acceptable use policy</span>
          <span>User agreement</span>
        </div>

        <div className="flex space-x-4">
          <FaInstagram size={24} />
          <FaYoutube size={24} />
          <FaTwitter size={24} />
          <FaTiktok size={24} />
          <FaDiscord size={24} />
        </div>

        <span className="text-blue-400 underline">India</span>
      </div>
    </footer>

  )
}

export default Footer


