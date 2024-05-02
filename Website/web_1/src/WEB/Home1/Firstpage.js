import React from 'react'
import Welcome from '../Nav/Welcome'
import Header from '../Nav_1/Header'
import Header_2 from '../Nav_2/Header_2'
import Home from '../Sliderhome/Home'
import TopCateg from '../Topcategories/TopCateg'
import PopularProduct from '../Product/PopularProduct'
import Pots from '../Potss/Pots'
import Follow from '../Instapage/Follow'
import Footer from '../Footeer/Footer'

function Firstpage() {
  return (
    <div>
        {/* <Welcome/>
        <Header/>
        <Header_2/> */}
        <Home/>
        <TopCateg/>
        <PopularProduct/>
        <Pots/>
        <Follow/>
    </div>
  )
}

export default Firstpage
