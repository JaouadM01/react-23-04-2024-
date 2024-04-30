import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './eshop/pages/home/home'
import Cart from './eshop/pages/cart/cart'
import Shop from './eshop/pages/shop/Shop'
import { ShopContextProvider } from "./eshop/context/shop-context";
import Header from "./eshop/components/Header";

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
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;