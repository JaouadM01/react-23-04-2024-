import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './eshop/pages/home/home'
import Cart from './eshop/pages/cart/cart'
import Shop from './eshop/pages/shop/Shop'
import { ShopContextProvider } from "./eshop/context/shop-context";
import Header from "./eshop/components/Header";
import ProductPage from "./eshop/pages/shop/ProductPage";
import Reviews from './eshop/pages/reviews/reviews'
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage/>}/>
            <Route path="/reviews" element={<Reviews/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;