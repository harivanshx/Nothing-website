import React from 'react'
import Navbar from './Components/Global/Navbar'
import Footer from './Components/Global/Footer'
import Post1 from './Components/Local/Homepage/Post1'
import Post2 from './Components/Local/Homepage/Post2'
import Post3 from './Components/Local/Homepage/Post3'
import Post4 from './Components/Local/Homepage/Post4'
import Post5 from './Components/Local/Homepage/Post5'


const App = () => {
  return (
    <>
    <Navbar style/>
    <Post1/>
    <Post2/>
    <Post3/>
    <Post4/>
    <Post5/>
    <Footer/>  
    </>
  )
}

export default App