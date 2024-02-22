
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import About from './Pages/About';
import Contact from './Pages/Contact';
import { useContext} from 'react';
import { ShopContext } from './Context/ShopContext';
function App() {
  const {theme}=useContext(ShopContext);
  return (
    <div className={`${theme}_app`}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>} />
        {/* <Route path='/latestcollection' element={<ShopCategory banner={latest_collection_banner} category="latestcollection"/>} /> */}
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
