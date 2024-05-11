
import './App.css';
import Navigaionerr from '../src/Pages/Errorpage/Naverrorpage';

import Checkout from './Pages/Shops/Checkout';
import Signin from './Pages/Shops/Signin';
import Producttrac from './Pages/Shops/Producttrac';
import Header from './WEB/Nav_1/Header';
import './Style.css';
import './HeaderStyle.css';
import Header_2 from './WEB/Nav_2/Header_2';
import './StyleHtwo.css';

import Home from './WEB/Sliderhome/Home';
import Footer from './WEB/Footeer/Footer';
import TopCateg from './WEB/Topcategories/TopCateg';
import PopularProduct from './WEB/Product/PopularProduct';
import Pots from './WEB/Potss/Pots';
import Follow from './WEB/Instapage/Follow';
import Welcome from './WEB/Nav/Welcome';
import Shop from './Pages/Shops/Shop';
import Wishlist from './Pages/Shops/Wishlist';
import Homm from './WEB/Homm';
import Cart from './Pages/Shops/Cart';

import Contact from './Pages/Contact/Contact';
import './WEB/Product/Product.css';
import Firstpage from './WEB/Home1/Firstpage';
import Woodenpage from './Pages/Woodenhome/Woodenpage';
import Signpage from './Pages/Page/Signin/Signpage';
import SHopfilter from './Pages/Page/FIlter_1/SHopfilter';
import Filterv_2 from './Pages/Page/V2/Filterv_2';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Page from './WEB/HPage/Page';
import Blog1 from './WEB/Blogs/Blog1';
import ProductMap from './WEB/Product/ProductMap';
import ProductCard from './WEB/Product/ProductCard';
function App() {
  return (
   
  
    <div className="App">
       <BrowserRouter>
            <Welcome/>
            <Header/>
            <Header_2/>
            {/* <SHopfilter/> */}
            {/* <Filterv_2/> */}
          <Routes>
              <Route path='/' element={<Firstpage/>}/>
              <Route path='/woodenpage' element={<Woodenpage/>}/>  
              <Route path='/shop' element={<Shop/>}/> 
              <Route path='/page' element={<Page/>}/>
              <Route path='/blog' element={<Blog1/>}/> 
              <Route path='/wishlist' element={<Wishlist/>}/>
              <Route path='/contact' element={<Contact/>}/> 
              <Route path='/signpage' element={<Signpage/>}/> 
              <Route path='/cart' element={ <Cart/>}/>
              <Route path='*' element={<Navigaionerr/>}/>
          </Routes>
       </BrowserRouter> 
       
             {/* <Signin/> */}
            {/* <ProductMap/>
            <ProductCard/> */}
        <Footer/> 
    </div>
    
  );
}

export default App;
