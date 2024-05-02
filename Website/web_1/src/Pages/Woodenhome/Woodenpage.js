import React from 'react'
import Welcome from '../../WEB/Nav/Welcome'
import Header from '../../WEB/Nav_1/Header'
import Header_2 from '../../WEB/Nav_2/Header_2'
import Home from '../../WEB/Sliderhome/Home'
import TopCateg from '../../WEB/Topcategories/TopCateg'
import PopularProduct from '../../WEB/Product/PopularProduct'
import Pots from '../../WEB/Potss/Pots'
import Follow from '../../WEB/Instapage/Follow'
import Footer from '../../WEB/Footeer/Footer'

function Woodenpage() {
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

export default Woodenpage
