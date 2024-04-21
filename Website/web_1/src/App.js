import logo from './logo.svg';
import './App.css';
import Header from './WEB/Header';
import './Style.css';
import Header_2 from './WEB/Header_2';

import Home from './WEB/Home';
import Footer from './WEB/Footer';
import TopCateg from './WEB/TopCateg';
import PopularProduct from './WEB/PopularProduct';
import Pots from './WEB/Pots';
import Follow from './WEB/Follow';
function App() {
  return (
    <div className="App">
      <Header/>
      <Header_2/>
      <Home/>
      <TopCateg/>
      <PopularProduct/>
      <Pots/>
      <Follow/>
      <Footer/>
    </div>
  );
}

export default App;
