import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "react-scroll-to-top";
import { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import Collections from "./Pages/Collections";
import Offers from "./Pages/Offers";
import Cookie from "./Components/Footer/Policy/Cookie";
import Shipping from "./Components/Footer/Policy/Shipping";
import Return from "./Components/Footer/Policy/Return";
import TermsOfService from "./Components/Footer/Policy/TermsOfService";
import Privacy from "./Components/Footer/Policy/Privacy";
function App() {
  const { theme } = useContext(ShopContext);
  return (
    <div className={`${theme}_app`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/cookie-policy" element={<Cookie/>} />
          <Route path="/shipping-policy" element={<Shipping/>} />
          <Route path="/return-policy" element={<Return/>} />
          <Route path="/terms-of-service" element={<TermsOfService/>}/>
          <Route path="/privacy-policy" element={<Privacy/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      <ScrollToTop smooth component={<p style={{ color: "blue" }}>↑</p>} />
    </div>
  );
}

export default App;
